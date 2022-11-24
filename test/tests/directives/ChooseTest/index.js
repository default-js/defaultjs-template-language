import { Renderer, Template } from "../../../../index";

describe("Choose Test - ", () => {
	beforeAll(() => {});

	it("case 1", async () => {
		const template = await Template.load("<div jstl-choose>" + '<div jstl-when="${usecase==1}">1</div>' + '<div jstl-when="${usecase==2}">2</div>' + '<div jstl-when="${usecase==3}">3</div>' + "<div jstl-otherwise>otherwise</div>" + "</div>", false);
		const container = create("<div></div>").first();
		const renderer = new Renderer({ template });

		await renderer.render({ container, data: { usecase: 1 } });
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("1");

		await renderer.render({ container, data: { usecase: 2 } });
		element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("2");

		await renderer.render({ container, data: { usecase: 100 } });
		element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("otherwise");
	});

	it("case 2 - ignore other content", async () => {
		const template = await Template.load(`
		<div jstl-choose>
			ignore
			<div jstl-when="\${usecase==1}">1</div>
			<div>ignore</div>
			<div jstl-when="\${usecase==2}">2</div>
			<div>ignore</div>
			<div jstl-when="\${usecase==3}">3</div>
			<div>ignore</div>
			<div jstl-otherwise>otherwise</div>
		</div>`, false);
		const container = create("<div></div>").first();
		const renderer = new Renderer({ template });

		await renderer.render({ container, data: { usecase: 1 } });
		let element = container.children[0];
		expect(element.children.length).toBe(4);
		console.log(element.outerHTML);
		expect(element.children[0].textContent).toBe("1");
		expect(element.children[1].textContent).toBe("ignore");
		expect(element.children[2].textContent).toBe("ignore");
		expect(element.children[3].textContent).toBe("ignore");
	});

	it("case 3 - foreach", async () => {
		const template = await Template.load(
			`<div jstl-foreach="\${list}" jstl-foreach-item="item" jstl-foreach-status="status">
				<jstl jstl-choose>
					<div jstl-when="\${item.usecase==1}">1</div>
					<div jstl-when="\${item.usecase==2}">2</div>
					<div jstl-when="\${item.usecase==3}">3</div>
					<div jstl-otherwise>otherwise</div>
				</jstl>
			</div>`,
			false,
		);

		const container = create("<div></div>").first();
		const renderer = new Renderer({ template });

		await renderer.render({
			container,
			data: {
				list: [{ usecase: 1 }, { usecase: 2 }, { usecase: 3 }, { usecase: 4 }],
			},
		});
		const element = container.children[0];
		console.log(element.outerHTML);

		expect(element.children.length).toBe(4);

		expect(element.children[0].textContent).toBe("1");
		expect(element.children[1].textContent).toBe("2");
		expect(element.children[2].textContent).toBe("3");
		expect(element.children[3].textContent).toBe("otherwise");


	});

	afterAll(() => {});
});
