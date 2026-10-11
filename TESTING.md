# How tests are written here

The rules a new test case follows, and the shape of the suite they apply to. The reasoning behind a
rule is in `DECISIONS.md`; `README.md` says what the package does, this file says where a case
saying it belongs and what it may assert.

No rule has been agreed yet; each one gets its section here once it is.

## What the suite runs on

Vitest in browser mode, through Playwright, in three engines: Chromium, Firefox and WebKit —
headless for `npm test`, with windows for `npm run test:live`. Configuration in `vitest.config.mjs`.
The sources are served unbundled, as ES modules; so are the `@default-js` packages, which vite
does not pre-bundle.

`test/index.js` imports `@default-js/defaultjs-extdom`, then `test/setup.js`, which sets the
default executer of `ExpressionResolver` to `context-deconstruction-executer`, then the tests. All
of it runs in one page per engine, so the cases share the state of the package, such as the
template cache. Every test file imports `describe`, `it`, `expect`, `beforeAll` and `afterAll` from
`vitest`; they are not globals, because an expression resolves a name it does not find in its
context against the global object. The helpers of `@default-js/defaultjs-extdom` the tests use,
such as `create`, are globals.

A case that depends on the engine reads it from `server.browser` of `vitest/browser`.

## Files

Test files are **not** discovered. `test/tests/index.js` imports one directory per area, each
directory's `index.js` imports its files; a file outside that chain does not run.

| Directory | Area |
|---|---|
| `test/tests/TemplateTest/` | `Template` |
| `test/tests/RendererTest/` | `Renderer` |
| `test/tests/directives/<Directive>Test/` | one directive each |
| `test/tests/bugs/` | empty |

`test/bench/` holds the benchmarks, `*.bench.js`. `npm run bench` runs them, `npm test` never does;
`BENCHMARKS.md` describes them.

## Fixtures

Served as they are on disk by a middleware in `vitest.config.mjs`, not loaded as scripts:

| Directory | URL |
|---|---|
| `test/data/` | `/data/` |
| `test/templates/` | `/templates/` — `test/templates/bench/` for the benchmarks |
