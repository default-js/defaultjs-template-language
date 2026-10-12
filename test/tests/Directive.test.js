import { describe, it, expect, beforeAll, afterAll } from "vitest";
import Directive from "../../src/Directive.js";
import "../../src/directives/index.js";

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
			"attach-element",
			"on-finished"
		];

		const directive = Directive.directives.map(d => d.name);

		expect(directive).toEqual(expected);
	});

	afterAll(() => {});
});
