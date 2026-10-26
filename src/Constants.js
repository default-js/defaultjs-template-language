import {ExpressionResolver} from "@default-js/defaultjs-expression-language";


export const SCOPE__APPLICATION = "application";
export const SCOPE__DATA = "data";
export const SCOPE__RENDER = "render";
export const SCOPE__CONTAINER = "container";
export const SCOPE__NODE = "node";

export const EVENT__RENDER = "render";
export const EVENT__RENDERED = "rendered";

export const APPLICATION_SCOPE_RESOLVER = new ExpressionResolver({ name: SCOPE__APPLICATION });
