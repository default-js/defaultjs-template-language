# Distribution

How `@default-js/defaultjs-template-language` reaches a consumer. How it is built inside is in
`ARCHITECTURE.md`.

## Entry points

| Entry | Purpose |
|---|---|
| `index.js` | the ES module entry, `main` in `package.json`; exports `Template`, `Renderer`, `toAsyncTemplateLoader` |
| `browser.js` | the browser script; sets `defaultjs.tl`, alias `defaultjs.jstl`, on the global object to `{ VERSION, Template, Renderer }` |

## Bundles

`entries.config.json` names both entries — `module` for `index.js`, `browser` for `browser.js` —
and `webpack.config.js` bundles them into `dist/` in one configuration:

| Build | File | Source map |
|---|---|---|
| `npm run build:dev` | `<entry>-defaultjs-template-language.js` | inline |
| `npm run build:prod` | `<entry>-defaultjs-template-language.min.js` | `.min.js.map` |

The build replaces `${version}` in the bundles with the version from `package.json`.
`webpack.config.js` sets no `output.library`, so neither bundle exports anything; each one runs
its entry. `dist/` is committed.

## Published files

`package.json` `files`: `index.js`, `browser.js`, `src/**`, `dist/**`, `LICENSE`, `README.md`,
`package.json`. It carries neither `"type"` nor `exports`.

Runtime dependencies, as caret ranges: `@default-js/defaultjs-common-utils` `^1.0.0`,
`@default-js/defaultjs-expression-language` `^3.0.2`, `@default-js/defaultjs-extdom` `^2.0.0`.
