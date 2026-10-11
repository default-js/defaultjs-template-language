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

### B13 — does a change to documented behaviour update `README.md` in the same turn?

**Status:** open · **Kind:** decision

A rule like the changelog rule in `AGENTS.md`, for `README.md`. Frank wants to discuss it first.

### B14 — JSDoc rules for TypeScript tooling

**Status:** open · **Kind:** decision

Whether the JSDoc keeps to what `tsc` reads: function types in arrow syntax
`(aTemplate: string) => *` rather than the Closure form `function(string): *`; no `@readonly` on a
getter; no `@typedef` on the class it names. In `@default-js/defaultjs-expression-language` these
rules exist because type declarations are generated from the JSDoc.

### B15 — project section of `AGENTS.md`

**Status:** open · **Kind:** decision

The goals are taken from `README.md`, the constraints — notably "Extensible" — are formulated
without Frank's confirmation.

### B16 — benchmark record and runner

**Status:** open · **Kind:** decision

`BENCHMARKS.md` is to keep a running record ordered by package version and development state, to
be drawn as a graph. Open: the format of a row, whether the numbers also live in a
machine-readable file, and how a measurement is run — today the cases in
`test/tests/performance/index.js` run nowhere and time a single render with `Date.now()`.

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
