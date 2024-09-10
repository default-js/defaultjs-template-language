await import("/browser-defaultjs-template-language.js");
const {Renderer, Template} = defaultjs.tl;
console.log({Renderer, Template});

let inputTimeoutId = null;

document.body.on("action:input", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const value = event.target.value;
    if(inputTimeoutId)
        clearTimeout(inputTimeoutId);

    inputTimeoutId = setTimeout(() => {        
        find("#result").first().textContent = value;
    }, 333);


});

const template = await Template.load(find("template").first());
const container = find("main").first();

Renderer.render({data:{}, container, template});