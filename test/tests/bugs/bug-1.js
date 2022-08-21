/** 
	jstl-data load remote bug

*/

import Renderer from "../../../src/Renderer.js";

describe("Attribute Test - ", () => {

	beforeAll(() => { });

	it("keep attributes from template", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: `
		<div jstl-data="${url}", jstl-data-mode="remote">
			<div jstl-foreach="${test2}" jstl-foreach-var="item">
				${item}
			</div>
		</div>
		`, data : {url: "/data/DataTest/remote-data.json"}});

		await renderer.render({ container });
		let element = container.children[0];

		expect(element.attr("id")).toBe("id");
		expect(element.attr("attr-1")).toBe("attr-1");
		expect(element.attr("data-test-1")).toBe("data-test-1");
	});
	
	

	afterAll(() => { });
});