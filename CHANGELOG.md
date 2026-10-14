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
- The status of `jstl-foreach` and `jstl-repeat` carries `key` — the index of the item in an
  array, the name of the property in an object — and `first`, `last` and `step`.

### Changed

- `jstl-data` resolves a relative URL against `location`, the address of the page, as
  `jstl-include` and `Template.fetch` do. It resolved it against the origin: in a page below the
  root, `jstl-data="data.json"` loaded `/data.json` and now loads `data.json` beside the page.
- `src/Element.js` is renamed to `src/DirectiveElement.js`, after the class it exports. A deep
  import of `src/Element.js` fails; import `DirectiveElement` from the package instead.
- `DirectiveElement.execute` is called with the `Context`, the tag of the template and the
  `Renderer`; it was declared with `{ template, context }`. Its own implementation throws an
  `Error`: a class extending `DirectiveElement` has to implement `execute`.
- `Renderer` holds `template` and `resolver` as read-only properties; they were writable fields.
  Assigning either has no effect, and in strict mode code, such as an ES module, it throws a
  `TypeError`. Hand the template to `new Renderer` or to `render` instead.
- `Directive.define` throws an `Error` for a directive whose `name` is not a non-empty string or is
  already defined, whose `rank` is not a number from `Directive.MIN_RANK` to `Directive.MAX_RANK`,
  whose `phase` is none of `Directive.PHASE`, or whose class does not implement `execute`. It
  accepted each of them; without a `rank`, the order of the directives was undetermined.
- An element of a class extending `DirectiveElement` is no longer hidden: the constructor of
  `DirectiveElement` set `hidden` to `true`.

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

### Removed

- `src/index.js`, an empty module; a deep import of it fails.
- The entry `directive` of `SCOPES` in `src/Renderer.js`; no resolver was named after it.
- The attribute `jstl-text-prevent-format` is no longer read; it had no effect.

### Fixed

- A directive element, an element of a class extending `DirectiveElement` in a template, is
  executed: the node its `execute` delivers takes the place of the tag, and the children of the tag
  are rendered into it. It was rendered like any other element, hidden, with the directives run on
  it and its `execute` never called.
- `jstl-foreach` and `jstl-repeat` over an object render once per own property, with the value of
  the property as item. The item was `undefined`.
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
