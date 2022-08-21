import Directive from "../../../src/Directive";
import "../../../src/directives";

describe("Test directive chain - ", () => {
	
	beforeAll(() => {});
	
	it("order test", async () => {
		const expected = [
			"initial",
			"if",
			"data",
			"include",
			"choose",
			"foreach",
			"jstl-repeat",		
			"attribute",
			"text",
			"on-finished"
		];
		
		const directive = Directive.directives.map(d => d.name);		
				
		expect(directive).toEqual(expected);
	});
	
	afterAll(() => {});
});