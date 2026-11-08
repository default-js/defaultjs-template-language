import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("jstl-choose", () => {
	it("renders only the branch \"1\" for usecase 1", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose>
			<div jstl-when="\${usecase == 1}">1</div>
			<div jstl-when="\${usecase == 2}">2</div>
			<div jstl-when="\${usecase == 3}">3</div>
			<div jstl-otherwise>otherwise</div>
		</div>`);

		await Renderer.render({ container, template, data: { usecase: 1 } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0].textContent).toBe("1");
	});

	it("renders only the branch \"2\" for usecase 2", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose>
			<div jstl-when="\${usecase == 1}">1</div>
			<div jstl-when="\${usecase == 2}">2</div>
			<div jstl-when="\${usecase == 3}">3</div>
			<div jstl-otherwise>otherwise</div>
		</div>`);

		await Renderer.render({ container, template, data: { usecase: 2 } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0].textContent).toBe("2");
	});

	it("renders only the branch \"3\" for usecase 3", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose>
			<div jstl-when="\${usecase == 1}">1</div>
			<div jstl-when="\${usecase == 2}">2</div>
			<div jstl-when="\${usecase == 3}">3</div>
			<div jstl-otherwise>otherwise</div>
		</div>`);

		await Renderer.render({ container, template, data: { usecase: 3 } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0].textContent).toBe("3");
	});

	it("renders only the branch \"otherwise\" for usecase 100", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose>
			<div jstl-when="\${usecase == 1}">1</div>
			<div jstl-when="\${usecase == 2}">2</div>
			<div jstl-when="\${usecase == 3}">3</div>
			<div jstl-otherwise>otherwise</div>
		</div>`);

		await Renderer.render({ container, template, data: { usecase: 100 } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0].textContent).toBe("otherwise");
	});

	it("chooses again on every render of the same template", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose>
			<div jstl-when="\${usecase == 1}">1</div>
			<div jstl-when="\${usecase == 2}">2</div>
			<div jstl-when="\${usecase == 3}">3</div>
			<div jstl-otherwise>otherwise</div>
		</div>`, false);

		await Renderer.render({ container, template, data: { usecase: 1 } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].children).toHaveLength(1);
		expect(container.children[0].children[0].textContent).toBe("1");

		await Renderer.render({ container, template, data: { usecase: 2 } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].children).toHaveLength(1);
		expect(container.children[0].children[0].textContent).toBe("2");

		await Renderer.render({ container, template, data: { usecase: 100 } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].children).toHaveLength(1);
		expect(container.children[0].children[0].textContent).toBe("otherwise");
	});

	it("keeps the content that is neither jstl-when nor jstl-otherwise", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose>ignore<div jstl-when="\${usecase == 1}">1</div><div>ignore</div><div jstl-when="\${usecase == 2}">2</div><div>ignore</div><div jstl-when="\${usecase == 3}">3</div><div>ignore</div><div jstl-otherwise>otherwise</div></div>`);

		await Renderer.render({ container, template, data: { usecase: 1 } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.textContent).toBe("ignore1ignoreignoreignore");
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["1", "ignore", "ignore", "ignore"]);
	});

	it("renders only the first of several jstl-when evaluating to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose><div jstl-when="\${true}">1</div><div jstl-when="\${true}">2</div><div jstl-otherwise>otherwise</div></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (aChild) => aChild.textContent)).toEqual(["1"]);
	});

	it("renders no branch when no jstl-when evaluates to true and there is no jstl-otherwise", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose><div jstl-when="\${false}">1</div><div jstl-when="\${false}">2</div></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].childNodes).toHaveLength(0);
	});

	it("renders the branch \"1\" for a jstl-when awaiting an async function resolving to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose><div jstl-when="\${await check()}">1</div><div jstl-otherwise>otherwise</div></div>`);

		await Renderer.render({ container, template, data: { check: async () => true } });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (aChild) => aChild.textContent)).toEqual(["1"]);
	});

	it("renders the branch \"otherwise\" for a jstl-when awaiting an async function resolving to false", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-choose><div jstl-when="\${await check()}">1</div><div jstl-otherwise>otherwise</div></div>`);

		await Renderer.render({ container, template, data: { check: async () => false } });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (aChild) => aChild.textContent)).toEqual(["otherwise"]);
	});

	it("chooses per item inside jstl-foreach", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`
			<div jstl-foreach="\${list}" jstl-foreach-var="entry">
				<jstl jstl-choose>
					<div jstl-when="\${entry.usecase == 1}">1</div>
					<div jstl-when="\${entry.usecase == 2}">2</div>
					<div jstl-when="\${entry.usecase == 3}">3</div>
					<div jstl-otherwise>otherwise</div>
				</jstl>
			</div>`);

		await Renderer.render({ container, template, data: { list: [{ usecase: 1 }, { usecase: 2 }, { usecase: 3 }, { usecase: 4 }] } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["1", "2", "3", "otherwise"]);
	});
});
