# How tests are written here

The rules a new test case follows, and the shape of the suite they apply to. The reasoning behind a
rule is in `DECISIONS.md`; `README.md` says what the package does, this file says where a case
saying it belongs and what it may assert.

A rule gets its section here once the maintainer has agreed it.

## What the suite runs on

Vitest in browser mode, through Playwright, in three engines: Chromium, Firefox and WebKit —
headless for `npm test`, with windows for `npm run test:live`. Configuration in `vitest.config.mjs`.
The sources are served unbundled, as ES modules; so are the `@default-js` packages, which vite
does not pre-bundle.

Vitest finds every `*.test.js` under `test/` and runs each file in a page of its own, per engine.
The files share nothing: not the state of the package, such as the template cache, not globals, not
registered custom elements. Before each file, `@default-js/defaultjs-extdom` is imported; the
helpers it installs, such as `create`, are globals in the tests. No executer is set: the suite runs
with the default executer of `@default-js/defaultjs-expression-language`, as the package renders.

Every test file imports `describe`, `it`, `expect`, `beforeAll` and `afterAll` from `vitest`; they
are not globals, because an expression resolves a name it does not find in its context against the
global object.

A case that depends on the engine reads it from `server.browser` of `vitest/browser`.

## Where a case belongs

The suite mirrors `src/`: the cases of `src/<path>.js` stand in `test/tests/<path>.test.js`, one
test file per source module — those of `src/directives/Foreach.js` in
`test/tests/directives/Foreach.test.js`.

`test/bench/` holds the benchmarks, `*.bench.js`. `npm run bench` runs them, `npm test` never does;
`BENCHMARKS.md` describes them.

## Fixtures

Served as they are on disk by a middleware in `vitest.config.mjs`, not loaded as scripts:

| Directory | URL |
|---|---|
| `test/data/` | `/data/` |
| `test/templates/` | `/templates/` — `test/templates/bench/` for the benchmarks |

The fixtures of a test file lie below these directories under the path of the file: those of
`test/tests/directives/Include.test.js` in `test/templates/directives/Include/`.
