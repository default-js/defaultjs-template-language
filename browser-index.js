import pack from "./src"

const global = window || global || self || this || {};
global.defaultjs = global.defaultjs || {};
global.defaultjs.tl = global.defaultjs.tl || {
	VERSION : "${version}",
	TaskChain : pack.TaskChain
};