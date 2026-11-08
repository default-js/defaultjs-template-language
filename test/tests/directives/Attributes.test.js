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

	it("sets the attribute to true with only a condition evaluating to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?boolean="\${boolean}"></div>`);

		await Renderer.render({ container, template, data: { boolean: true } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].getAttribute("boolean")).toBe("true");
	});

	it("leaves the attribute out with only a condition evaluating to false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?boolean="\${boolean}"></div>`);

		await Renderer.render({ container, template, data: { boolean: false } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].getAttribute("boolean")).toBeNull();
	});

	it("sets the attribute to its value with a condition evaluating to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?attr="\${boolean}" attr="\${attr}"></div>`);

		await Renderer.render({ container, template, data: { attr: "attr", boolean: true } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].getAttribute("attr")).toBe("attr");
	});

	it("leaves the attribute out with a condition evaluating to false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?attr="\${boolean}" attr="\${attr}"></div>`);

		await Renderer.render({ container, template, data: { attr: "attr", boolean: false } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].getAttribute("attr")).toBeNull();
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

	it("binds a function as handler with a condition evaluating to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click="\${condition}" @click="\${action}"></div>`);
		const action = vi.fn();

		await Renderer.render({ container, template, data: { action, condition: true } });
		container.children[0].trigger("click");

		expect(action).toHaveBeenCalledOnce();
	});

	it("binds no handler with a condition evaluating to false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click="\${condition}" @click="\${action}"></div>`);
		const action = vi.fn();

		await Renderer.render({ container, template, data: { action, condition: false } });
		container.children[0].trigger("click");

		expect(action).not.toHaveBeenCalled();
	});

	it("delegates the event as an event of its own, with :delegate", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click:delegate="\${action}"></div>`);
		const handle = vi.fn();

		await Renderer.render({ container, template, data: { action: "event-delegate-test" } });
		container.children[0].on("event-delegate-test", handle);
		container.children[0].trigger("click");

		expect(handle).toHaveBeenCalledOnce();
	});

	it("delegates the event as an event of its own, implied by a string", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${action}"></div>`);
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

	it("binds the eventHandle of an object with capture true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${ { eventHandle: action, capture } }"><span @click="\${child}"></span></div>`);
		const calls = [];
		const action = vi.fn(() => calls.push("element"));
		const child = vi.fn(() => calls.push("child"));

		await Renderer.render({ container, template, data: { action, child, capture: true } });
		container.children[0].children[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));

		expect(calls).toEqual(["element", "child"]);
	});

	it("binds the eventHandle of an object with capture false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${ { eventHandle: action, capture } }"><span @click="\${child}"></span></div>`);
		const calls = [];
		const action = vi.fn(() => calls.push("element"));
		const child = vi.fn(() => calls.push("child"));

		await Renderer.render({ container, template, data: { action, child, capture: false } });
		container.children[0].children[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));

		expect(calls).toEqual(["child", "element"]);
	});

	it("binds the eventHandle of an object with passive true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${ { eventHandle: action, passive } }"></div>`);
		const action = vi.fn((anEvent) => anEvent.preventDefault());

		await Renderer.render({ container, template, data: { action, passive: true } });
		const click = new MouseEvent("click", { cancelable: true });
		container.children[0].dispatchEvent(click);

		expect(action).toHaveBeenCalledOnce();
		expect(click.defaultPrevented).toBe(false);
	});

	it("binds the eventHandle of an object with passive false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click="\${ { eventHandle: action, passive } }"></div>`);
		const action = vi.fn((anEvent) => anEvent.preventDefault());

		await Renderer.render({ container, template, data: { action, passive: false } });
		const click = new MouseEvent("click", { cancelable: true });
		container.children[0].dispatchEvent(click);

		expect(action).toHaveBeenCalledOnce();
		expect(click.defaultPrevented).toBe(true);
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

	it("delegates the event with a condition evaluating to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click:delegate="\${boolean}" @click:delegate="\${action}"></div>`);
		const handle = vi.fn();

		await Renderer.render({ container, template, data: { action: "event-delegate-test", boolean: true } });
		container.children[0].on("event-delegate-test", handle);
		container.children[0].trigger("click");

		expect(handle).toHaveBeenCalledOnce();
	});

	it("does not delegate the event with a condition evaluating to false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click:delegate="\${boolean}" @click:delegate="\${action}"></div>`);
		const handle = vi.fn();

		await Renderer.render({ container, template, data: { action: "event-delegate-test", boolean: false } });
		container.children[0].on("event-delegate-test", handle);
		container.children[0].trigger("click");

		expect(handle).not.toHaveBeenCalled();
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

	it("toggles the class on a click with a condition evaluating to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click:toggleClass:test="\${condition}" @click:toggleClass:test=""></div>`);

		await Renderer.render({ container, template, data: { condition: true } });
		const target = container.children[0];
		target.trigger("click");

		expect(target.className).toBe("test");
	});

	it("does not toggle the class on a click with a condition evaluating to false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click:toggleClass:test="\${condition}" @click:toggleClass:test=""></div>`);

		await Renderer.render({ container, template, data: { condition: false } });
		const target = container.children[0];
		target.trigger("click");

		expect(target.className).toBe("");
	});

	it("toggles the class and prevents the default action with the option prevent-default", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click:toggleClass:test:prevent-default=""></div>`);

		await Renderer.render({ container, template });
		const target = container.children[0];
		const click = new MouseEvent("click", { cancelable: true });
		target.dispatchEvent(click);

		expect(target.className).toBe("test");
		expect(click.defaultPrevented).toBe(true);
	});

	it("toggles the class and leaves the default action without an option", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click:toggleClass:test=""></div>`);

		await Renderer.render({ container, template });
		const target = container.children[0];
		const click = new MouseEvent("click", { cancelable: true });
		target.dispatchEvent(click);

		expect(target.className).toBe("test");
		expect(click.defaultPrevented).toBe(false);
	});
});

describe("event handler toggleAttribute, separated by :", () => {
	it("toggles the attribute at the target found by the selector", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div id="source" @click:toggleAttribute:test="#target"></div><div id="target"></div>`);

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
		const template = await Template.load(`<div id="target" @click:toggleAttribute:test=""></div>`);

		await Renderer.render({ container, template, data: {} });
		const target = container.children[0];

		expect(target.getAttribute("test")).toBeNull();
		target.trigger("click");
		expect(target.getAttribute("test")).toBe("");
		target.trigger("click");
		expect(target.getAttribute("test")).toBeNull();
	});

	it("toggles the attribute on a click with a condition evaluating to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click:toggleAttribute:test="\${condition}" @click:toggleAttribute:test=""></div>`);

		await Renderer.render({ container, template, data: { condition: true } });
		const target = container.children[0];
		target.trigger("click");

		expect(target.getAttribute("test")).toBe("");
	});

	it("does not toggle the attribute on a click with a condition evaluating to false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click:toggleAttribute:test="\${condition}" @click:toggleAttribute:test=""></div>`);

		await Renderer.render({ container, template, data: { condition: false } });
		const target = container.children[0];
		target.trigger("click");

		expect(target.getAttribute("test")).toBeNull();
	});

	it("toggles the attribute and prevents the default action with the option prevent-default", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click:toggleAttribute:test:prevent-default=""></div>`);

		await Renderer.render({ container, template });
		const target = container.children[0];
		const click = new MouseEvent("click", { cancelable: true });
		target.dispatchEvent(click);

		expect(target.getAttribute("test")).toBe("");
		expect(click.defaultPrevented).toBe(true);
	});

	it("toggles the attribute and leaves the default action without an option", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click:toggleAttribute:test=""></div>`);

		await Renderer.render({ container, template });
		const target = container.children[0];
		const click = new MouseEvent("click", { cancelable: true });
		target.dispatchEvent(click);

		expect(target.getAttribute("test")).toBe("");
		expect(click.defaultPrevented).toBe(false);
	});
});

describe("event handler toggleAttribute, separated by ::", () => {
	it("toggles the attribute at the target found by the selector", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div id="source" @click::toggleAttribute::test="#target"></div><div id="target"></div>`);

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
		const template = await Template.load(`<div id="target" @click::toggleAttribute::test=""></div>`);

		await Renderer.render({ container, template, data: {} });
		const target = container.children[0];

		expect(target.getAttribute("test")).toBeNull();
		target.trigger("click");
		expect(target.getAttribute("test")).toBe("");
		target.trigger("click");
		expect(target.getAttribute("test")).toBeNull();
	});

	it("toggles the attribute on a click with a condition evaluating to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click::toggleAttribute::test="\${condition}" @click::toggleAttribute::test=""></div>`);

		await Renderer.render({ container, template, data: { condition: true } });
		const target = container.children[0];
		target.trigger("click");

		expect(target.getAttribute("test")).toBe("");
	});

	it("does not toggle the attribute on a click with a condition evaluating to false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div ?@click::toggleAttribute::test="\${condition}" @click::toggleAttribute::test=""></div>`);

		await Renderer.render({ container, template, data: { condition: false } });
		const target = container.children[0];
		target.trigger("click");

		expect(target.getAttribute("test")).toBeNull();
	});

	it("toggles the attribute and prevents the default action with the option prevent-default", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click::toggleAttribute::test::prevent-default=""></div>`);

		await Renderer.render({ container, template });
		const target = container.children[0];
		const click = new MouseEvent("click", { cancelable: true });
		target.dispatchEvent(click);

		expect(target.getAttribute("test")).toBe("");
		expect(click.defaultPrevented).toBe(true);
	});

	it("toggles the attribute and leaves the default action without an option", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div @click::toggleAttribute::test=""></div>`);

		await Renderer.render({ container, template });
		const target = container.children[0];
		const click = new MouseEvent("click", { cancelable: true });
		target.dispatchEvent(click);

		expect(target.getAttribute("test")).toBe("");
		expect(click.defaultPrevented).toBe(false);
	});
});
