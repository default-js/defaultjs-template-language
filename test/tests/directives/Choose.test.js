import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

const CHOOSE = `<div jstl-choose>
	<div jstl-when="\${usecase == 1}">1</div>
	<div jstl-when="\${usecase == 2}">2</div>
	<div jstl-when="\${usecase == 3}">3</div>
	<div jstl-otherwise>otherwise</div>
</div>`;

describe("jstl-choose", () => {
	it.each([
		{ usecase: 1, text: "1" },
		{ usecase: 2, text: "2" },
		{ usecase: 3, text: "3" },
		{ usecase: 100, text: "otherwise" }
	])("renders only the branch \"$text\" for usecase $usecase", async ({ usecase, text }) => {
		const container = document.createElement("div");
		const template = await Template.load(CHOOSE);

		await Renderer.render({ container, template, data: { usecase } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0].textContent).toBe(text);
	});

	it("chooses again on every render of the same template", async () => {
		const container = document.createElement("div");
		const template = await Template.load(CHOOSE, false);

		for (const [usecase, text] of [[1, "1"], [2, "2"], [100, "otherwise"]]) {
			await Renderer.render({ container, template, data: { usecase } });

			expect(container.children).toHaveLength(1);
			const element = container.children[0];
			expect(element.children).toHaveLength(1);
			expect(element.children[0].textContent).toBe(text);
		}
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
