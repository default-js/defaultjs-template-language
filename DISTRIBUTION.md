# Distribution

How `@default-js/defaultjs-template-language` reaches a consumer. How it is built inside is in
`ARCHITECTURE.md`.

## Entry points

| Entry | Purpose |
|---|---|
| `index.js` | the ES module entry, `main` in `package.json` and `.` in its `exports`; exports `Template`, `Renderer`, `Context`, `Directive`, `DirectiveElement`, `toAsyncTemplateLoader` |
| `browser.js` | the browser script; sets `defaultjs.tl`, alias `defaultjs.jstl`, on the global object to `{ VERSION, Template, Renderer, Context, Directive, DirectiveElement }` |

`package.json` declares `"type": "module"` and opens in `exports`: `.` and `./index.js`,
`./browser.js`, `./src/*`, `./dist/*` and `./package.json` — every published file that can be
imported. Any other path is refused.

## Bundles

`entries.config.json` names both entries — `module` for `index.js`, `browser` for `browser.js` —
and `webpack.config.mjs` bundles them into `dist/`, one configuration per entry:

| Build | File | Source map |
|---|---|---|
| `npm run build:dev` | `<entry>-defaultjs-template-language.js` | inline |
| `npm run build:prod` | `<entry>-defaultjs-template-language.min.js` | `.min.js.map` |

The `module` bundle is an ES module (`output.library.type` `module`) exporting what `index.js`
exports. The `browser` bundle is a script that runs `browser.js`, wrapped in a function, and
exports nothing. Both carry their dependencies. The build replaces `${version}` in the bundles with
the version from `package.json`.

`dist/` is committed byte for byte as webpack writes it: `.gitattributes` marks it `-text`, since
the development bundles carry the CRLF of bundled dependency sources. `npm run dev` serves
`WebContent/` and both bundles on port 3000.

## Published files

`package.json` `files`: `index.js`, `browser.js`, `src/**`, `dist/**`, `LICENSE`, `README.md`,
`package.json`.

Runtime dependencies, as caret ranges: `@default-js/defaultjs-common-utils` `^1.0.0`,
`@default-js/defaultjs-expression-language` `^3.0.2`, `@default-js/defaultjs-extdom` `^2.0.0`.
