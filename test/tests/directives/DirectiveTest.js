import Directive from "@src/Directive.js";
import "@src/directives";

describe("If Test - ", () => {
	
	beforeAll(() => {});
	
	it("order test", async () => {
		const expected = [
			"initial",
			"if",
			"data",
			"include",
			"choose",
			"foreach",			
			"attribute",
			"text"
		];
		
		const directive = Directive.directives.map(d => d.name);		
				
		expect(directive).toEqual(expected);
	});
	
	afterAll(() => {});
});