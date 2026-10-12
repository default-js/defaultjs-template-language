# Distribution

How `@default-js/defaultjs-template-language` reaches a consumer. How it is built inside is in
`ARCHITECTURE.md`.

## Entry points

| Entry | Purpose |
|---|---|
| `index.js` | the ES module entry, `main` in `package.json` and `.` in its `exports`; exports `Template`, `Renderer`, `toAsyncTemplateLoader` |
| `browser.js` | the browser script; sets `defaultjs.tl`, alias `defaultjs.jstl`, on the global object to `{ VERSION, Template, Renderer }` |

`package.json` declares `"type": "module"` and opens in `exports`: `.` and `./index.js`,
`./browser.js`, `./src/*`, `./dist/*` and `./package.json` — every published file that can be
imported. Any other path is refused.

## Bundles

`entries.config.json` names both entries — `module` for `index.js`, `browser` for `browser.js` —
and `webpack.config.mjs` bundles them into `dist/` in one configuration:

| Build | File | Source map |
|---|---|---|
| `npm run build:dev` | `<entry>-defaultjs-template-language.js` | inline |
| `npm run build:prod` | `<entry>-defaultjs-template-language.min.js` | `.min.js.map` |

The build replaces `${version}` in the bundles with the version from `package.json`.
`webpack.config.mjs` sets no `output.library`, so neither bundle exports anything; each one runs
its entry. `dist/` is committed.

## Published files

`package.json` `files`: `index.js`, `browser.js`, `src/**`, `dist/**`, `LICENSE`, `README.md`,
`package.json`.

Runtime dependencies, as caret ranges: `@default-js/defaultjs-common-utils` `^1.0.0`,
`@default-js/defaultjs-expression-language` `^3.0.2`, `@default-js/defaultjs-extdom` `^2.0.0`.
