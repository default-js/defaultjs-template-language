(async () => {

    const {Renderer, Template} = defaultjs.tl;


    class RendererElement extends HTMLElement {

        connectedCallback() {
            if (this.ownerDocument == document) {
                (async () => {
                    const template = await Template.load(new URL(this.attr("template"), location));
                    await Renderer.render({template, container:this});
                    this.replace(this.content());
                })();
            };
        }
    }
    customElements.define("d-renderer", RendererElement);
})();