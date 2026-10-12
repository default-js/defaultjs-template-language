import { describe, it, expect } from "vitest";
// loaded first on purpose: as the first module, src/Directive.js once threw a ReferenceError
import Directive from "../../src/Directive.js";
import "../../src/directives/index.js";

describe("Directive.directives", () => {
	it("lists the built-in directives in the order they run", () => {
		expect(Directive.directives.map((aDirective) => aDirective.name)).toEqual([
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
		]);
	});
});
