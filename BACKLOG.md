# Backlog

Every open item of this project: findings, open decisions, agreed work, ideas. Entries are deleted
once done; git history is the archive. IDs are never reused.

## Format

Each entry is a level-3 heading `### B<n> — <title>`, followed by one line

`**Status:** open | agreed | in progress | blocked · **Kind:** defect | decision | task | idea`

and a short body: what, where (file and symbol, not line numbers), why it matters. Agreed work
carries the agreed scope; a blocked entry names what it waits for.

- `open` — noted, nothing agreed yet.
- `agreed` — scope approved, not started.
- `in progress` — being worked on.
- `blocked` — waits for something outside the entry.

## Entries

### B1 — `Context.js` imports an export `Renderer.js` does not have

**Status:** open · **Kind:** defect

`src/Context.js` does `import {Renderer} from "./Renderer.js"`, but `src/Renderer.js` exports only
`SCOPES` and a default class. Importing a missing named binding is a link-time `SyntaxError` for
native ES modules, so `index.js` cannot be loaded unbundled; the committed bundles in `dist/` were
built regardless. The import is used only in a JSDoc type.

### B2 — `Template.fetch` with a string throws `ReferenceError`

**Status:** open · **Kind:** defect

`src/Template.js`, `Template.fetch`: `new URL(url, loaction)` — `loaction` is a typo for `location`.

### B3 — `Template.fetch` and `Template.load` swallow unsupported types

**Status:** open · **Kind:** defect

`src/Template.js`: both end in `new Error(...)` without `throw`, so an unsupported argument
resolves to `undefined` instead of failing.

### B4 — `toTemplate` never converts a string

**Status:** open · **Kind:** defect

`src/Context.js`, `toTemplate`: `typeof template === String` compares against the constructor and
is always false; a string template passes through unconverted.

### B5 — `Context.ready` with an array throws

**Status:** open · **Kind:** defect

`src/Context.js`, `ready(callback)`: for an array it calls `this.wait.then(...)`; there is no
`wait` property, only the private `#wait`, so this throws a `TypeError`.

### B6 — `jstl-async` documented but disabled

**Status:** open · **Kind:** decision

`README.md` documents `jstl-async`; `src/directives/Initial.js` guards the branch with
`false && ...`, so the attribute has no effect. Either the feature comes back or the README section
goes.

### B7 — dev server paths do not match the repository

**Status:** open · **Kind:** defect

`webpack.config.js`, `devServer`: `static` and `watchFiles` name `./webcontent`, the directory is
`WebContent` — works on case-insensitive file systems only. `./src/css` (also in `CopyPlugin`)
does not exist.

### B8 — `webpack-merge` required but not declared

**Status:** open · **Kind:** defect

`webpack.config.js` requires `webpack-merge`, which is not in `devDependencies` and resolves only
as a transitive dependency; the imported `merge` is unused.

### B9 — `web/` holds stale build output

**Status:** open · **Kind:** decision

`web/` contains webpack output last changed in 2022 (`commons.js` alone is 29 MB). Nothing in the
repository refers to it. Keep or remove.

### B10 — runtime dependencies pinned to `latest`

**Status:** open · **Kind:** decision

`package.json`, `dependencies`: all three `@default-js` packages are `latest`. Installs are not
reproducible, and a breaking release of a dependency reaches consumers unannounced.

### B11 — empty README sections

**Status:** open · **Kind:** task

`README.md`: "Use Template File", "Custom Directives" and "Custom Tags" have a heading and no
content.

### B12 — dead code

**Status:** open · **Kind:** task

`src/Context.js`: `observe` / `runObserver` are never called. `src/index.js` is an empty file.
`SCOPES.directive` in `src/Renderer.js` is used nowhere.

### B16 — benchmark runner

**Status:** open · **Kind:** decision

The record in `BENCHMARKS.md` is a table, one row per measurement. Open: how a measurement is
run — today the cases in `test/tests/performance/index.js` run nowhere and time a single render
with `Date.now()`.

### B17 — the `module` bundle exports nothing

**Status:** open · **Kind:** defect

`webpack.config.js` sets no `output.library`; `dist/module-defaultjs-template-language[.min].js`
is a script that runs `index.js` and exposes none of its exports.

### B18 — `Element.execute` reads a parameter it is not given

**Status:** open · **Kind:** defect

`src/Renderer.js`, `renderNode`, calls `template.execute(context)`; `src/Element.js` and
`src/elements/Replace.js` declare `execute({ template, context })` and so destructure
`context.context`, which does not exist. The base implementation then throws on
`context.content = ...`.

### B19 — unused test fixtures

**Status:** open · **Kind:** decision

`test/sites/**/*.html` is loaded through `karma-html2js-preprocessor` and
`test/templates/performance/` is served, but no test reads either. Keep or remove.

### B20 — line endings of `dist/`

**Status:** open · **Kind:** task

`@default-js/defaultjs-expression-language` marks `dist/**` as `-text` in `.gitattributes`, because
bundled dependency sources brought CRLF into its bundles and git normalized them away. Whether the
bundles here carry CRLF is not measured, so `.gitattributes` does not carry the rule. Measure after
a build.

### B21 — ship type declarations with 2.0.0

**Status:** agreed · **Kind:** task

The package ships `.d.ts` files generated by `tsc` from the JSDoc, from version 2.0.0 on — the
version the maintainer declares finished (`DECISIONS.md`, 2026-10-11). Needs `typescript` as a dev
dependency and a build step; how they are built, where they lie, whether they are committed and
how the gate checks them is for the plan.

### B22 — `jstl-foreach` and `jstl-repeat` over an object yield `undefined`

**Status:** open · **Kind:** defect

`src/directives/Foreach.js`, `doForeach`, and `src/directives/Repeat.js`, `doRepeat`: for data
that is not an array, the loop runs over `Object.getOwnPropertyNames(data)`, but the item is
`data[i]` — the value at the numeric index, not at the `i`-th property name.

### B23 — README errors

**Status:** open · **Kind:** task

`README.md`, the reference for the behaviour, contains errors:
- the package name misspelled — `defaultjs-template-languange` in "Basic usage",
  `defauljs-template-language` in both API imports;
- the script tag names `defaultjs-template-languange.min.js`; the bundle is
  `browser-defaultjs-template-language.min.js`;
- "Text content manipulation": `${hallo}` against the data key `hello`; the escaped output reads
  `&gt;b&lt;` where escaping gives `&lt;b&gt;`; the filtered output ends `</b>/div>`;
- the `jstl-repeat-var` example uses `jstl-foreach-var`;
- the mode tables of `jstl-include` and `jstl-attach-element` list `prepand`; the code reads
  `prepend`;
- "toggle class by event": the condition names `toggleclass`, the handler `toggleAttribute`;
- the heading `new Tempate(template)`; `render(option)` is marked "Kind: constructor".

### B24 — behaviour `README.md` does not describe

**Status:** open · **Kind:** decision

The code does more than the README documents. Each item needs the maintainer's decision — document it
(README first) or remove it:
- `jstl-foreach-count`, `-start`, `-step`, `-condition` and the same for `jstl-repeat`: a counting
  loop without data, a start index, a step, a break condition; iterating an object (see B22);
- `jstl-data-option` (fetch options for `remote`), `jstl-data-scope`; `remote` is the default mode;
- `jstl-text-ignore`; `jstl-text-prevent-format` is read and has no effect;
- `jstl-ignore-childs`; the `is` attribute for customized built-in elements; a `<template>` in a
  template renders into its content;
- event handlers: an object `{ eventHandle, capture, passive, once }` as handler, a string as
  delegated event, the option `prevent-default` of `toggleClass` / `toggleAttribute`, the
  separator `::` beside the old `:`;
- `jstl-on-finished-async` and the names `$element`, `$root`, `$template` in `jstl-on-finished`;
- `toAsyncTemplateLoader`, exported by `index.js`;
- the global `defaultjs.tl` / `defaultjs.jstl` of `browser.js`.

### B25 — update a rendering when its data changes

**Status:** open · **Kind:** idea

Today `render()` renders once into a container; a change of the data needs another call. Updating
the output on a change of the data is not offered, and not ruled out (2026-10-11).

### B26 — server-side rendering

**Status:** open · **Kind:** idea

Rendering outside the browser, possibly with restrictions. Today the renderer needs a DOM. Not a
goal of 2.0.0 (2026-10-11).
