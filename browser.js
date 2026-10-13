import "@default-js/defaultjs-extdom";
import GLOBAL from "@default-js/defaultjs-common-utils/src/Global.js";
import {Template, Renderer, Context, Directive, DirectiveElement} from "./index.js"

GLOBAL.defaultjs = GLOBAL.defaultjs || {};
GLOBAL.defaultjs.jstl = GLOBAL.defaultjs.tl = GLOBAL.defaultjs.tl || {
	VERSION : "${version}",
	Template,
	Renderer,
	Context,
	Directive,
	DirectiveElement
};

export {Template, Renderer, Context, Directive, DirectiveElement};
