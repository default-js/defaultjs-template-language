import {Constants, Processor} from "./src"

const global = window || global || self || this || {};
global.defaultjs = global.defaultjs || {};
global.defaultjs.tl = global.defaultjs.tl || {
	VERSION : "${version}",
	Constants : Constants,
	Processor : Processor
};