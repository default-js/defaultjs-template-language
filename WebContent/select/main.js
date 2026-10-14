await import("/browser-defaultjs-template-language.js");
const { Renderer, Template } = defaultjs.tl;

const ITEMS = [["a", "b", "c"], ["d", "e"]];
let round = 0;

/**
 * Renders the template of every section into its result, with the items of the current round.
 */
const render = async () => {
	const items = ITEMS[round % ITEMS.length];
	round++;
	for (const section of document.querySelectorAll("section")) {
		const template = await Template.load(section.querySelector("template"), false);
		await Renderer.render({ container: section.querySelector(".result"), template, data: { items, current: items[1] } });
	}
};

document.getElementById("render-again").addEventListener("click", render);
await render();
