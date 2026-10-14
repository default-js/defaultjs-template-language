import { describe, it, expect, vi, onTestFinished } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("attribute manipulation", () => {
	it("keeps the attributes of the template", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div id="id" attr-1="attr-1" data-test-1="data-test-1"></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.getAttribute("id")).toBe("id");
		expect(element.getAttribute("attr-1")).toBe("attr-1");
		expect(element.getAttribute("data-test-1")).toBe("data-test-1");
	});

	it("sets the value of an attribute by an expression", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div attr="\${attr}"></div>`);

		await Renderer.render({ container, template, data: { attr: "attr" } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].getAttribute("attr")).toBe("attr");
	});

	it("sets the value of an attribute by an expression awaiting an async function", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div attr="\${await load()}"></div>`);

		await Renderer.render({ container, template, data: { load: async () => "attr" } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].getAttribute("attr")).toBe("attr");
	});

	it("keeps an empty attribute", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div attr=""></div>`);

		await Renderer.render({ container, template, data: { attr: "attr" } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].getAttribute("attr")).toBe("");
	});

	it.each([
		{ condition: true, value: "true" },
		{ condition: false, value: null }
	])("with a condition only, evaluating to $condition, sets the attribute to $value", async ({ condition, value }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?boolean="\${boolean}"></div>`);

		await Renderer.render({ container, template, data: { boolean: condition } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].getAttribute("boolean")).toBe(value);
	});

	it.each([
		{ condition: true, value: "attr" },
		{ condition: false, value: null }
	])("with a condition evaluating to $condition sets the attribute to $value", async ({ condition, value }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?attr="\${boolean}" attr="\${attr}"></div>`);

		await Renderer.render({ container, template, data: { attr: "attr", boolean: condition } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].getAttribute("attr")).toBe(value);
	});

	it("keeps the attributes of the template beside conditional ones", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div id="id" attr-1="attr-1" data-test-1="data-test-1" ?data-test-2="true" data-test-2="data-test-2" ?data-test-3="false" data-test-3="data-test-3" data-test-4="data-test-4"></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.getAttribute("id")).toBe("id");
		expect(element.getAttribute("attr-1")).toBe("attr-1");
		expect(element.getAttribute("data-test-1")).toBe("data-test-1");
		expect(element.getAttribute("data-test-2")).toBe("data-test-2");
		expect(element.getAttribute("data-test-3")).toBeNull();
		expect(element.getAttribute("data-test-4")).toBe("data-test-4");
	});

	it("does not take an attribute whose name begins with jstl into the result", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-mine="mine" jstlother="other" mine="mine"></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].attributes, ({ name, value }) => [name, value])).toEqual([["mine", "mine"]]);
	});

	// defect: B52
	it.fails("takes an attribute into the result beside one of the same name prefixed with jstl", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstlmine="other" mine="mine"></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].attributes, ({ name, value }) => [name, value])).toEqual([["mine", "mine"]]);
	});
});

describe("event handler", () => {
	it("binds a function of the data as handler", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${action}"></div>`);
		const action = vi.fn();

		await Renderer.render({ container, template, data: { action } });
		container.children[0].trigger("click");

		expect(action).toHaveBeenCalledOnce();
		expect(action.mock.calls[0][0].type).toBe("click");
	});

	it("binds a global function as handler", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${attributesTestAction}"></div>`);
		const action = vi.fn();
		globalThis.attributesTestAction = action;
		onTestFinished(() => delete globalThis.attributesTestAction);

		await Renderer.render({ container, template });
		container.children[0].trigger("click");

		expect(action).toHaveBeenCalledOnce();
	});

	it("binds the function an expression awaiting an async function results in", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${await load()}"></div>`);
		const action = vi.fn();

		await Renderer.render({ container, template, data: { load: async () => action } });
		container.children[0].trigger("click");

		expect(action).toHaveBeenCalledOnce();
	});

	it.each([
		{ condition: true, calls: 1 },
		{ condition: false, calls: 0 }
	])("with a condition evaluating to $condition binds a function as handler $calls times", async ({ condition, calls }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click="\${condition}" @click="\${action}"></div>`);
		const action = vi.fn();

		await Renderer.render({ container, template, data: { action, condition } });
		container.children[0].trigger("click");

		expect(action).toHaveBeenCalledTimes(calls);
	});

	it.each([
		{ kind: "with :delegate", attribute: "@click:delegate" },
		{ kind: "implied by a string", attribute: "@click" }
	])("delegates the event as an event of its own, $kind", async ({ attribute }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ${attribute}="\${action}"></div>`);
		const handle = vi.fn();

		await Renderer.render({ container, template, data: { action: "event-delegate-test" } });
		container.children[0].on("event-delegate-test", handle);
		container.children[0].trigger("click");

		expect(handle).toHaveBeenCalledOnce();
	});

	it("binds the eventHandle of an object with its options", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${ { eventHandle: action, once: true } }"></div>`);
		const action = vi.fn();

		await Renderer.render({ container, template, data: { action } });
		container.children[0].trigger("click");
		container.children[0].trigger("click");

		expect(action).toHaveBeenCalledOnce();
	});

	it.each([
		{ capture: true, order: ["element", "child"] },
		{ capture: false, order: ["child", "element"] }
	])("binds the eventHandle of an object with capture $capture", async ({ capture, order }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${ { eventHandle: action, capture } }"><span @click="\${child}"></span></div>`);
		const calls = [];
		const action = vi.fn(() => calls.push("element"));
		const child = vi.fn(() => calls.push("child"));

		await Renderer.render({ container, template, data: { action, child, capture } });
		container.children[0].children[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));

		expect(calls).toEqual(order);
	});

	it.each([
		{ passive: true, prevented: false },
		{ passive: false, prevented: true }
	])("binds the eventHandle of an object with passive $passive", async ({ passive, prevented }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${ { eventHandle: action, passive } }"></div>`);
		const action = vi.fn((anEvent) => anEvent.preventDefault());

		await Renderer.render({ container, template, data: { action, passive } });
		const click = new MouseEvent("click", { cancelable: true });
		container.children[0].dispatchEvent(click);

		expect(action).toHaveBeenCalledOnce();
		expect(click.defaultPrevented).toBe(prevented);
	});

	it("prevents and stops the delegated event and hands it on as detail", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${action}"></div>`);
		const handle = vi.fn();
		const parent = vi.fn();

		await Renderer.render({ container, template, data: { action: "event-delegate-test" } });
		const element = container.children[0];
		element.addEventListener("event-delegate-test", handle);
		container.addEventListener("click", parent);
		const click = new MouseEvent("click", { bubbles: true, cancelable: true });
		element.dispatchEvent(click);

		expect(handle).toHaveBeenCalledOnce();
		expect(handle.mock.calls[0][0].detail).toBe(click);
		expect(click.defaultPrevented).toBe(true);
		expect(parent).not.toHaveBeenCalled();
	});

	it("delegates an event triggered at a child from the element", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click:delegate="\${action}"><span>trigger</span></div>`);
		const handle = vi.fn();

		await Renderer.render({ container, template, data: { action: "event-delegate-test" } });
		container.on("event-delegate-test", handle);
		container.children[0].children[0].trigger("click");

		expect(handle).toHaveBeenCalledOnce();
		expect(handle.mock.calls[0][0].target).toBe(container.children[0]);
	});

	it.each([
		{ condition: true, calls: 1 },
		{ condition: false, calls: 0 }
	])("with a condition evaluating to $condition delegates the event $calls times", async ({ condition, calls }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click:delegate="\${boolean}" @click:delegate="\${action}"></div>`);
		const handle = vi.fn();

		await Renderer.render({ container, template, data: { action: "event-delegate-test", boolean: condition } });
		container.children[0].on("event-delegate-test", handle);
		container.children[0].trigger("click");

		expect(handle).toHaveBeenCalledTimes(calls);
	});
});

describe("event handler toggleClass", () => {
	it("toggles the class at the target found by the selector", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div id="source" @click:toggleClass:test="#target"></div><div id="target"></div>`);

		await Renderer.render({ container, template, data: {} });
		const [source, target] = container.children;

		expect(target.className).toBe("");
		source.trigger("click");
		expect(target.className).toBe("test");
		source.trigger("click");
		expect(target.className).toBe("");
	});

	it("toggles the class at the element without selector", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div id="target" @click:toggleClass:test=""></div>`);

		await Renderer.render({ container, template, data: {} });
		const target = container.children[0];

		expect(target.className).toBe("");
		target.trigger("click");
		expect(target.className).toBe("test");
		target.trigger("click");
		expect(target.className).toBe("");
	});

	it.each([
		{ condition: true, className: "test" },
		{ condition: false, className: "" }
	])("with a condition evaluating to $condition sets the class to '$className' on a click", async ({ condition, className }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click:toggleClass:test="\${condition}" @click:toggleClass:test=""></div>`);

		await Renderer.render({ container, template, data: { condition } });
		const target = container.children[0];
		target.trigger("click");

		expect(target.className).toBe(className);
	});

	it.each([
		{ option: ":prevent-default", prevented: true },
		{ option: "", prevented: false }
	])("toggles the class and prevents the default action $prevented with the option '$option'", async ({ option, prevented }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click:toggleClass:test${option}=""></div>`);

		await Renderer.render({ container, template });
		const target = container.children[0];
		const click = new MouseEvent("click", { cancelable: true });
		target.dispatchEvent(click);

		expect(target.className).toBe("test");
		expect(click.defaultPrevented).toBe(prevented);
	});
});

describe.each([
	{ separator: ":" },
	{ separator: "::" }
])("event handler toggleAttribute, separated by $separator", ({ separator }) => {
	it("toggles the attribute at the target found by the selector", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div id="source" @click${separator}toggleAttribute${separator}test="#target"></div><div id="target"></div>`);

		await Renderer.render({ container, template, data: {} });
		const [source, target] = container.children;

		expect(target.getAttribute("test")).toBeNull();
		source.trigger("click");
		expect(target.getAttribute("test")).toBe("");
		source.trigger("click");
		expect(target.getAttribute("test")).toBeNull();
	});

	it("toggles the attribute at the element without selector", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div id="target" @click${separator}toggleAttribute${separator}test=""></div>`);

		await Renderer.render({ container, template, data: {} });
		const target = container.children[0];

		expect(target.getAttribute("test")).toBeNull();
		target.trigger("click");
		expect(target.getAttribute("test")).toBe("");
		target.trigger("click");
		expect(target.getAttribute("test")).toBeNull();
	});

	it.each([
		{ condition: true, value: "" },
		{ condition: false, value: null }
	])("with a condition evaluating to $condition sets the attribute to $value on a click", async ({ condition, value }) => {
		const container = document.createElement("div");
		const name = `@click${separator}toggleAttribute${separator}test`;
		const template = await Template.load(`<div ?${name}="\${condition}" ${name}=""></div>`);

		await Renderer.render({ container, template, data: { condition } });
		const target = container.children[0];
		target.trigger("click");

		expect(target.getAttribute("test")).toBe(value);
	});

	it.each([
		{ option: "prevent-default", prevented: true },
		{ option: "", prevented: false }
	])("toggles the attribute and prevents the default action $prevented with the option '$option'", async ({ option, prevented }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click${separator}toggleAttribute${separator}test${option ? separator + option : ""}=""></div>`);

		await Renderer.render({ container, template });
		const target = container.children[0];
		const click = new MouseEvent("click", { cancelable: true });
		target.dispatchEvent(click);

		expect(target.getAttribute("test")).toBe("");
		expect(click.defaultPrevented).toBe(prevented);
	});
});
