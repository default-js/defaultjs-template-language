import { describe, it, expect, vi } from "vitest";
// loaded first on purpose: as the first module, src/Directive.js once threw a ReferenceError
import Directive from "../../src/Directive.js";
import "../../src/directives/index.js";
import { Renderer, Template } from "../../index.js";

/**
 * Creates a directive that implements the members given as values, and no other.
 *
 * @param {object} aMembers - `name`, `rank`, `phase` and `execute`, each optional
 * @returns {Directive}
 */
const toDirective = (aMembers) => {
	const directive = new (class extends Directive {})();
	for (const [name, value] of Object.entries(aMembers)) Object.defineProperty(directive, name, { value });
	return directive;
};

/**
 * Defines a directive that calls `execute` on the elements carrying an attribute.
 *
 * @param {object} anOption
 * @param {string} anOption.name - the name of the directive
 * @param {number} anOption.rank - the rank of the directive
 * @param {number} [anOption.phase] - the phase of the directive; without it the directive keeps the phase of `Directive`
 * @param {string} [anOption.attribute] - the attribute the directive acts on, defaults to its name
 * @param {(aContext: import("../../src/Context.js").default) => *} anOption.execute - called with the context of the element
 */
const defineDirective = ({ name, rank, phase, attribute = name, execute }) => {
	class AttributeDirective extends Directive {
		get name() { return name; }
		get rank() { return rank; }
		get phase() { return phase === undefined ? super.phase : phase; }

		async execute(aContext) {
			const { template } = aContext;
			if (template instanceof Element && template.hasAttribute(attribute)) await execute(aContext);
			return aContext;
		}
	}
	Directive.define({ directive: new AttributeDirective() });
};

const execute = async (aContext) => aContext;

const DEFINED = toDirective({ name: "test-defined", rank: Directive.MIN_RANK, execute });
Directive.define({ directive: DEFINED });

const ordered = vi.fn();
const defineOrdered = (aName, aRank, aPhase) => defineDirective({ name: aName, rank: aRank, phase: aPhase, attribute: "test-order", execute: () => ordered(aName) });
defineOrdered("test-order-finish", Directive.MIN_RANK);
defineOrdered("test-order-content-high", 20, Directive.PHASE.content);
defineOrdered("test-order-content-low", 10, Directive.PHASE.content);
defineOrdered("test-order-init", 5000, Directive.PHASE.init);
defineOrdered("test-order-content-same", 10, Directive.PHASE.content);

const afterAttribute = vi.fn();
defineDirective({ name: "test-after-attribute", rank: Directive.MIN_RANK, phase: Directive.PHASE.content, execute: (aContext) => afterAttribute(aContext.content.getAttribute("title")) });

const visited = vi.fn();

class NodeDirective extends Directive {
	get name() { return "test-nodes"; }
	get rank() { return Directive.MIN_RANK + 1; }
	get phase() { return Directive.PHASE.init; }

	async execute(aContext) {
		const { parentNode } = aContext.template;
		if (parentNode instanceof Element && parentNode.hasAttribute("test-nodes")) visited(aContext.template.nodeType);
		return aContext;
	}
}
Directive.define({ directive: new NodeDirective() });

defineDirective({ name: "test-stop", rank: 3000, phase: Directive.PHASE.init, execute: (aContext) => { aContext.stop = true; } });
defineDirective({ name: "test-ignore", rank: 3000, phase: Directive.PHASE.init, execute: (aContext) => { aContext.ignore = true; } });
defineDirective({ name: "test-remove", rank: Directive.MAX_RANK, phase: Directive.PHASE.finish, execute: (aContext) => { aContext.content = null; } });

const awaited = vi.fn();
defineDirective({
	name: "test-await",
	rank: 4000,
	phase: Directive.PHASE.init,
	execute: async (aContext) => {
		await Promise.resolve();
		aContext.content.setAttribute("data-awaited", "");
	}
});
defineDirective({ name: "test-await-check", rank: 50, phase: Directive.PHASE.content, attribute: "test-await", execute: (aContext) => awaited(aContext.content.hasAttribute("data-awaited")) });

class Hidden extends Directive {
	get name() { return "my-hidden"; }
	get rank() { return Directive.MIN_RANK + 2000; }
	get phase() { return Directive.PHASE.init; }

	async execute(context) {
		const { template, content, resolver } = context;
		if (template instanceof Element && template.hasAttribute("my-hidden"))
			content.hidden = await resolver.resolve(template.getAttribute("my-hidden"), false);
		return context;
	}
}
Directive.define({ directive: new Hidden() });

const BUILT_IN = [
	{ phase: Directive.PHASE.init, rank: 0, name: "initial" },
	{ phase: Directive.PHASE.init, rank: 1000, name: "if" },
	{ phase: Directive.PHASE.data, rank: 1000, name: "data" },
	{ phase: Directive.PHASE.template, rank: 0, name: "include" },
	{ phase: Directive.PHASE.template, rank: 1, name: "choose" },
	{ phase: Directive.PHASE.template, rank: 2, name: "foreach" },
	{ phase: Directive.PHASE.template, rank: 3, name: "jstl-repeat" },
	{ phase: Directive.PHASE.content, rank: 0, name: "attribute" },
	{ phase: Directive.PHASE.content, rank: 1, name: "text" },
	{ phase: Directive.PHASE.content, rank: 1, name: "attach-element" },
	{ phase: Directive.PHASE.finish, rank: 100000, name: "on-finished" }
];

describe("built-in directives", () => {
	it("run in the order of their phase and rank", () => {
		const names = BUILT_IN.map(({ name }) => name);
		const builtIn = Directive.directives.filter(({ name }) => names.includes(name));

		expect(builtIn.map(({ phase, rank, name }) => ({ phase, rank, name }))).toEqual(BUILT_IN);
	});
});

describe("Directive.define", () => {
	it.each([
		["is no Directive", { name: "test-no-directive", rank: Directive.MIN_RANK, phase: Directive.PHASE.finish, execute }],
		["is already defined", DEFINED],
		["does not implement name", toDirective({ rank: Directive.MIN_RANK, execute })],
		["has an empty name", toDirective({ name: "", rank: Directive.MIN_RANK, execute })],
		["has a name that is no string", toDirective({ name: 1, rank: Directive.MIN_RANK, execute })],
		["has the name of a built-in directive", toDirective({ name: "text", rank: Directive.MIN_RANK, execute })],
		["has the name of a defined directive", toDirective({ name: "test-defined", rank: Directive.MIN_RANK, execute })],
		["does not implement rank", toDirective({ name: "test-no-rank", execute })],
		["has a rank that is no number", toDirective({ name: "test-string-rank", rank: "1", execute })],
		["has the rank NaN", toDirective({ name: "test-nan-rank", rank: NaN, execute })],
		["has a rank below Directive.MIN_RANK", toDirective({ name: "test-low-rank", rank: Directive.MIN_RANK - 1, execute })],
		["has a rank above Directive.MAX_RANK", toDirective({ name: "test-high-rank", rank: Directive.MAX_RANK + 1, execute })],
		["has a phase that is none of Directive.PHASE", toDirective({ name: "test-unknown-phase", rank: Directive.MIN_RANK, phase: 5, execute })],
		["has the name of a phase as phase", toDirective({ name: "test-phase-name", rank: Directive.MIN_RANK, phase: "init", execute })],
		["does not implement execute", toDirective({ name: "test-no-execute", rank: Directive.MIN_RANK })]
	])("throws an Error for a directive that %s", (aDescription, aDirective) => {
		expect(() => Directive.define({ directive: aDirective })).toThrow(Error);
	});
});

describe("custom directive", () => {
	it("runs by phase, then by rank, then in the order the directives were defined", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<p test-order></p>`);

		await Renderer.render({ container, template });

		expect(ordered.mock.calls.map(([aName]) => aName)).toEqual([
			"test-order-init",
			"test-order-content-low",
			"test-order-content-same",
			"test-order-content-high",
			"test-order-finish"
		]);
	});

	it("runs after a built-in directive of the same phase and rank", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<p test-after-attribute title="\${text}"></p>`);

		await Renderer.render({ container, template, data: { text: "some text" } });

		expect(afterAttribute).toHaveBeenCalledOnce();
		expect(afterAttribute).toHaveBeenCalledWith("some text");
	});

	it("runs on every node of the template", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div test-nodes>text<!--comment--><p></p></div>`);

		await Renderer.render({ container, template });

		expect(visited.mock.calls.map(([aType]) => aType)).toEqual([Node.TEXT_NODE, Node.COMMENT_NODE, Node.ELEMENT_NODE]);
	});

	it("ends the directives of the node with stop", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<p test-stop title="\${text}">\${text}</p>`);

		await Renderer.render({ container, template, data: { text: "some text" } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.tagName).toBe("P");
		expect(element.attributes).toHaveLength(0);
		expect(element.textContent).toBe("some text");
	});

	it("leaves the children of the node unrendered with ignore", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<p test-ignore><b></b></p>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.tagName).toBe("P");
		expect(element.childNodes).toHaveLength(0);
	});

	it("leaves nothing in the result when it sets the content to null", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><p test-remove><b></b></p><i></i></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.tagName)).toEqual(["I"]);
	});

	it("goes on with the node once execute resolves", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<p test-await></p>`);

		await Renderer.render({ container, template });

		expect(awaited).toHaveBeenCalledOnce();
		expect(awaited).toHaveBeenCalledWith(true);
	});

	it("renders the example of the README", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<p my-hidden="\${empty}">nothing found</p>`);

		await Renderer.render({ container, template, data: { empty: true } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.tagName).toBe("P");
		expect(Array.from(element.attributes, ({ name, value }) => [name, value])).toEqual([["hidden", ""], ["my-hidden", "true"]]);
		expect(element.textContent).toBe("nothing found");
	});
});
