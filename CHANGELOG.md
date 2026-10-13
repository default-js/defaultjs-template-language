# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Only what reaches a consumer of the package belongs here: the public api, the published
files, runtime dependencies, the supported environment. Build and test work stays out.
This file carries the effect of a change, and its reason where a consumer needs it to decide.

Versions up to 1.7.20 predate this file — the git history is the record for those.

## [Unreleased]

### Added

- `index.js` exports `Context`, `Directive` and `DirectiveElement` beside `Template`, `Renderer`
  and `toAsyncTemplateLoader`; the global `defaultjs.tl` of `browser.js` carries the same three
  beside `Template` and `Renderer`.

### Changed

- `src/Element.js` is renamed to `src/DirectiveElement.js`, after the class it exports. A deep
  import of `src/Element.js` fails; import `DirectiveElement` from the package instead.

- `package.json` declares `"type": "module"`: Node loads the `.js` files of the package as ES
  modules, without the warning `MODULE_TYPELESS_PACKAGE_JSON` and without parsing them twice.
- `package.json` declares `exports`: `.` and `./index.js` for the ES module entry, `./browser.js`,
  `./src/*`, `./dist/*` and `./package.json`. Every published file that can be imported stays
  reachable; any other path of the package is refused, in Node with `ERR_PACKAGE_PATH_NOT_EXPORTED`.
- The runtime dependencies are declared with caret ranges instead of `latest`:
  `@default-js/defaultjs-expression-language` `^3.0.2`, `@default-js/defaultjs-common-utils`
  `^1.0.0`, `@default-js/defaultjs-extdom` `^2.0.0`. A new major release of a dependency no longer
  reaches an install unannounced. An install that resolved version 2 of the expression language
  gets version 3.

### Fixed

- `Template.fetch` loads a template from a url given as `string`, resolved against `location`. It
  rejected with a `ReferenceError`.
- `Template.load` and `Template.fetch` reject with an `Error` when given a type they do not
  support. They resolved to `undefined`.
- A `Context` given a template as `string`, to its constructor or its `template` setter, holds
  the nodes of that source. It held the string.
- `Context.ready` with an array registers every function of it like a single one. It rejected with
  a `TypeError`.
- `dist/module-defaultjs-template-language.js` and its minified version are ES modules exporting
  what `index.js` exports. They ran `index.js` as a script and exported nothing.
- `index.js` loads as an ES module without a bundler. `src/Context.js` imported an export
  `src/Renderer.js` does not have, which the browser rejects with a `SyntaxError`.
- `src/Directive.js` loads as the first module; it threw a `ReferenceError` through an import cycle.
