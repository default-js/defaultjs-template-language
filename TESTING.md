# How tests are written here

The rules a new test case follows, and the shape of the suite they apply to. The reasoning behind a
rule is in `DECISIONS.md`; `README.md` says what the package does, this file says where a case
saying it belongs and what it may assert.

A rule gets its section here once the maintainer has agreed it.

## What the suite runs on

Vitest in browser mode, through Playwright, in three engines: Chromium, Firefox and WebKit —
headless for `npm test`, with windows for `npm run test:live`. Configuration in `vitest.config.mjs`.
The sources are served unbundled, as ES modules; so are the `@default-js` packages, which vite
does not pre-bundle. The suite tests the sources, never the bundles under `dist/`: `npm run build`
runs it before it bundles.

Vitest finds every `*.test.js` under `test/` and runs each file in a page of its own, per engine.
The files share nothing: not the state of the package, such as the template cache, not globals, not
registered custom elements. Before each file, `@default-js/defaultjs-extdom` is imported; the
helpers it installs, such as `create`, are globals in the tests. No executer is set: the suite runs
with the default executer of `@default-js/defaultjs-expression-language`, as the package renders.

Every test file imports what it uses of Vitest — `describe`, `it`, `expect`, `vi`, `onTestFinished`
— from `vitest`; none of them is a global, because an expression resolves a name it does not find
in its context against the global object.

A case that depends on the engine reads it from `server.browser` of `vitest/browser`.

## Where a case belongs

The suite mirrors `src/`: the cases of `src/<path>.js` stand in `test/tests/<path>.test.js`, one
test file per source module — those of `src/directives/Foreach.js` in
`test/tests/directives/Foreach.test.js`.

`test/bench/` holds the benchmarks, `*.bench.js`. `npm run bench` runs them, `npm test` never does;
`BENCHMARKS.md` describes them.

## What a case asserts

`README.md` is the reference: a case asserts what it says about the feature — the result a
consumer sees. Behaviour `README.md` does not describe is asserted as the code does it today, until
its backlog entry decides otherwise.

- **Targeted assertions.** A case asserts the properties of the result its behaviour is about —
  the elements, their order, their text, their attributes — and always the expected number of
  children, counted through `children`, so that an element too many or too few fails it. Depending
  on the case, text nodes or children may be left out. No assertion depends on the formatting of
  the template: the whitespace between elements becomes text nodes, which `children` does not
  count.
- **Text exactly.** Text is compared through `textContent`, as exactly as possible: the whitespace
  the template leaves in an element belongs to the expectation. Leaving it out — `trim()` or the
  like — needs a reason in the case; in a `<pre>` it would hide what the case is about. Where an
  element holds text nodes only, such as a loop rendering text, the `textContent` of its parent
  shows the result.
- **Matchers that show the actual value.** `toBeInstanceOf`, `toHaveLength`, `toBeNull`, `toBe`
  with the expected node — not `expect(a instanceof B).toBe(true)`, whose failure reads "expected
  false to be true". No assertion another one already implies, such as `toBeDefined` before
  `toBeInstanceOf`.
- **Absence asserted directly.** A handler that has to run, or must not, is a `vi.fn()`; the case
  triggers the event and asserts `toHaveBeenCalledOnce()` or `not.toHaveBeenCalled()`. Once
  `render` is awaited the handlers are bound, and `trigger` of `@default-js/defaultjs-extdom`
  dispatches synchronously. No timeout, no race, no `throw` or `expect` inside a handler, where a
  failure does not reach the case.
- **One behaviour per case.** Variants of one behaviour stand as a table in `it.each`.

## How a case is written

- **Names.** `describe` names the subject — a directive, an attribute, a method: `jstl-foreach`,
  `Template.load`. `it` states the behaviour as a sentence: `renders the body once per item`. A
  name is unique within its file.
- **Public API.** A case imports from `index.js`. A source module is imported directly only where
  its behaviour cannot be reached through `index.js`.
- **Rendered the way `README.md` shows it.** A case of a directive loads its template with
  `Template.load` and renders it with the static `Renderer.render`, as "Basic usage" does, without
  the cache argument. The other ways to render are the subject of `test/tests/Renderer.test.js`,
  the cache that of `test/tests/Template.test.js`.
- **Awaited.** Every promise is awaited. No timer waits for a result, and no promise is resolved by
  a handler.
- **Isolated.** Every case creates its own container and its own template. The container is
  attached to the document only where the behaviour needs it, such as a selector looked up in the
  document. A case that changes the document or a global undoes it with `onTestFinished`, which
  runs when the case fails too. No case relies on another case of its file.
- **No output, no leftovers.** No `console.*`, no empty hooks, no import that is not used.
- **Templates inline**, as template literals.

## Skipped and failing cases

- `skip`, `skipIf` and `runIf` are used only for a case that depends on the engine, by a decision
  in `DECISIONS.md` — today the `is` attribute in WebKit. `todo` is not used.
- A case that reveals a defect — the code deviating from `README.md` — is first seen failing for
  the right reason, then marked `it.fails`, with a comment naming the backlog entry of the defect:
  `// defect: B<n>`. The gate stays green; a case marked `it.fails` that passes fails the run. The
  fix of the defect starts by turning the case into `it`.

## Fixtures

Served as they are on disk by a middleware in `vitest.config.mjs`, not loaded as scripts:

| Directory | URL |
|---|---|
| `test/data/` | `/data/` |
| `test/templates/` | `/templates/` — `test/templates/bench/` for the benchmarks |

The fixtures of a test file lie below these directories under the path of the file: those of
`test/tests/directives/Include.test.js` in `test/templates/directives/Include/`.

A file is a fixture only where loading it by URL is the subject of the case; otherwise the template
or the data stands inline in the case. Every fixture is used by a case.
