# How tests are written here

The rules a new test case follows, and the shape of the suite they apply to. The reasoning behind a
rule is in `DECISIONS.md`; `README.md` says what the package does, this file says where a case
saying it belongs and what it may assert.

No rule has been agreed yet; each one gets its section here once it is.

## What the suite runs on

Karma with Jasmine, in Chrome — the Chromium that puppeteer installs, headless for `npm test`, with
a window for `npm run test:live`. Configuration in `karma.conf.js`. Karma bundles `test/index.js`
with webpack, using `webpack.config.js` in development mode.

`test/index.js` imports `@default-js/defaultjs-extdom`, then `test/setup.js`, which sets the
default executer of `ExpressionResolver` to `context-deconstruction-executer`, then the tests.
Jasmine's functions — `describe`, `it`, `expect`, `beforeAll`, `afterAll` — are globals, and so are
the helpers of `@default-js/defaultjs-extdom` the tests use, such as `create`.

## Files

Test files are **not** discovered. `test/tests/index.js` imports one directory per area, each
directory's `index.js` imports its files; a file outside that chain does not run.

| Directory | Area |
|---|---|
| `test/tests/TemplateTest/` | `Template` |
| `test/tests/RendererTest/` | `Renderer` |
| `test/tests/directives/<Directive>Test/` | one directive each |
| `test/tests/bugs/` | empty |
| `test/tests/performance/` | not imported — see `BENCHMARKS.md` |

## Fixtures

Served by Karma, not loaded as scripts:

| Directory | URL |
|---|---|
| `test/data/` | `/data/` |
| `test/templates/` | `/templates/` |

`test/sites/**/*.html` is turned into `window.__html__` by `karma-html2js-preprocessor`; no test
reads it.
