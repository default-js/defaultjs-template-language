import { Renderer, Template } from "../../index.js";

/**
 * Run options of every benchmark: at least 10 timed iterations after 2 for warmup, and at least the
 * 1000 ms tinybench takes by default — the deep cases need seconds per iteration, the small ones
 * fill the time.
 */
export const RUN_OPTIONS = { iterations: 10, warmupIterations: 2 };

/** Timeout of a test holding benchmarks: a deep case takes minutes in a slow engine. */
export const TIMEOUT = 600000;

/**
 * The nesting depths a directive is measured at, in elements. The HTML parser caps nesting at 512
 * levels and attaches deeper elements as siblings, so no template written as HTML gets deeper.
 */
export const DEPTHS = [10, 100, 500];

/** The numbers of siblings a directive is measured at, and of the items of a loop. */
export const WIDTHS = [10, 100, 1000];

/**
 * Nests aLevel aDepth times: every level replaces `{content}` of the level around it, the innermost
 * level drops it.
 *
 * @param {string} aLevel
 * @param {number} aDepth
 * @returns {string}
 */
export const nest = (aLevel, aDepth) => {
	let html = "";
	for (let i = 0; i < aDepth; i++) html = aLevel.replace("{content}", () => html);
	return html;
};

/**
 * Repeats aLevel aCount times side by side, without its `{content}`.
 *
 * @param {string} aLevel
 * @param {number} aCount
 * @returns {string}
 */
export const repeat = (aLevel, aCount) => aLevel.replace("{content}", "").repeat(aCount);

/**
 * The number of elements below aContainer.
 *
 * @param {HTMLElement} aContainer
 * @returns {number}
 */
export const countElements = (aContainer) => aContainer.querySelectorAll("*").length;

/**
 * Renders a template once and hands the result to `check`, then measures rendering it into a fresh
 * container attached to the document. The result of the measurement is written to
 * `target/bench/<engine>/<id>.json`.
 *
 * @param {object} aBench the `bench` of the test context
 * @param {object} anOptions
 * @param {string} anOptions.id the file name of the written result, unique per case
 * @param {string} anOptions.name
 * @param {string} anOptions.template
 * @param {object} anOptions.data
 * @param {(aContainer: HTMLElement) => void} anOptions.check
 * @returns {Promise<void>}
 */
export const measure = async (aBench, { id, name, template, data, check }) => {
	const renderer = new Renderer({ template: await Template.load(template, false) });

	const container = document.createElement("div");
	document.body.append(container);
	await renderer.render({ data, container });
	check(container);
	container.remove();

	let target = null;
	const options = {
		writeResult: `target/bench/\${projectName}/${id}.json`,
		beforeEach: () => {
			target = document.createElement("div");
			document.body.append(target);
		},
		afterEach: () => target.remove()
	};
	await aBench(name, options, async () => {
		await renderer.render({ data, container: target });
	}).run(RUN_OPTIONS);
};
