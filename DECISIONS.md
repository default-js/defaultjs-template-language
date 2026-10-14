# Decisions

Architecture and API decisions for `@default-js/defaultjs-template-language`, newest first.

What matters in an entry is the *reasoning*. A decision recorded without it cannot be revisited later — only obeyed or overturned blindly. Only decisions in force stand here, each written against the current state: a superseded entry is deleted, a partly superseded one is rewritten to the half still in force, and git history keeps what was there before.

A decision that is only a step inside a running undertaking stays in that undertaking's plan under `plans/`. It moves here once it outlives the plan.

## Format

```
## YYYY-MM-DD — <the question, phrased as a question>

**Decision:** what was chosen.
**Reasoning:** why, and what evidence supported it.
**Alternatives:** what was rejected, and what would make it the better choice.
**Consequences:** what this costs, and what it rules out later.
```

---

## 2026-10-14 — How does the renderer execute a custom tag?

**Decision:** An element of a class extending `DirectiveElement` — a custom tag — is an instruction
of the template and is not taken into the result. `renderNode` recognizes it through
`customElements.get` of its local name and a class whose prototype is a `DirectiveElement`, creates
an element of that class with `document.importNode` of the tag, without its children, and calls the
element's `execute(context, template, renderer)` — `template` the tag in the template, with its
children, `renderer` the `Renderer` of the rendering. The node `execute` sets as `context.content`
takes the place of the tag; the children of the tag are rendered into it with the mode `append`, unless `execute` sets
`context.ignore`. No directive runs on the tag. `DirectiveElement.execute` throws an `Error`: a
class extending it has to implement `execute`. The maintainer's decisions.

**Reasoning:** The renderer gets a template as the content of a `<template>`, whose document has no
browsing context and so no custom element registry. Measured 2026-10-14 in Chromium, Firefox and
WebKit: a custom tag there is a plain `HTMLElement` without `execute`, `customElements.upgrade`
leaves it so, and `instanceof` its class never holds; `customElements.get` finds the class by the
name of the tag, and `document.importNode` of the node gives an element of the class. Calling
`execute` on that element gives the author of a tag an ordinary custom element: its constructor
has run, its private fields and methods work. The children stay in the template, where the
renderer renders them from in any case; `execute` gets the tag of the template, children
included, as an argument beside the context, and the renderer with it. They are appended because the content a tag delivers may
hold nodes of its own: rendered with the mode of the rendering, `replace` removed them (measured
2026-10-14 in all three engines). A class that does not implement `execute` is an error of its
author, and the `Error` of the base class says so.

**Alternatives:** Calling the `execute` of the prototype on the node of the template — no
constructor runs, and a private field throws a `TypeError`. A static `execute` on the class — a
change of the extension API exported since 2026-10-13. Importing the tag with its children — `this`
would carry them, at the cost of a second copy of the subtree per occurrence. Taking the tag into
the result, as the former `DirectiveElement.execute` did with a copy of it — the tag would stand in
the result, hidden by the constructor of `DirectiveElement`. A base `execute` delivering no content
— a tag whose class lacks `execute` would vanish without a trace.

**Consequences:** Every element of a template costs a lookup in the custom element registry, every
occurrence of a custom tag the creation of an element and a run of its constructor, in every
rendering. No directive works on a custom tag, and its `connectedCallback` never runs. A
`jstl-replace` written into a template leaves nothing in the result.

## 2026-10-13 — How are the scopes of `jstl-data` documented, and what is a relative URL of it resolved against?

**Decision:** `README.md` documents `jstl-data-scope` with the scopes `container`, `render`,
`data`, `application`, `jstl-foreach` and `jstl-repeat`, and marks the names of the scopes as
experimental — an exception to "published files state facts" (`AGENTS.md`, Conventions). A
relative URL of `jstl-data` is resolved against `location`. The maintainer's decisions, the first
after the conflict with the convention was raised.

**Reasoning:** The scope names are the names of the resolvers of the chain (`SCOPES` in
`src/Renderer.js`, the names the directives give their resolvers); they are not settled, and the
README says so rather than promising them. Measured 2026-10-13 in Chromium: without a scope the data
reaches the element and its children; `container` the following elements of the parent, `render`
the rest of the rendering, `data` later renderings of the same renderer, `application` every
renderer, `jstl-foreach` the rest of the iteration; the data handed to `render` stays unchanged.
`jstl-include` and `Template.fetch` resolve against `location`; `jstl-data` resolved against
`location.origin`, so `data.json` in a page below the root loaded `/data.json`.

**Alternatives:** Leaving `jstl-data-scope` undocumented until the names are settled — a function
of 2.0.0 without description. Removing it from 2.0.0. Documenting the names without the mark — a
promise the maintainer does not give. Keeping the origin — `jstl-data` alone among the loading
functions would read a relative URL differently.

**Consequences:** The README is the one published file that says something may change; the mark
goes when the names are settled. A template below the root of its origin that loads data by a
relative URL loads it from beside the page.

## 2026-10-13 — How do `jstl-foreach` and `jstl-repeat` iterate an object, and what does the status carry?

**Decision:** An object is iterated by its own property names, `Object.getOwnPropertyNames`; the
item is the value of a property. The status carries `key` — the name of the property in an
object, the index of the item in an array — and `first`, `last` and `step` beside `index`,
`number`, `count` and `data`. The counting loop of `-count` carries `first` and `last` too. The
maintainer's decisions; `first`, `last` and `step` are an exception to "no new functions" in
2.0.0.

**Reasoning:** Both directives already ran over the property names of an object but read the item
at the numeric index, so it was `undefined`. The value is what a template iterating an object
needs, and its name has nowhere else to come from, hence `key`; for an array it is the index, so a
template reads `status.key` the same way for both. `first` and `last` spare a template comparing
`index` against `count`.

**Alternatives:** The property name as item and the value in the status — the opposite of how an
array is iterated. `key` for objects only — a template would need to know which of the two it
iterates.

**Consequences:** `Object.getOwnPropertyNames` includes the non-enumerable own properties of an
object; inherited properties and those keyed by a symbol are not iterated.

## 2026-10-13 — Under which names does the package export the classes for extending it?

**Decision:** `index.js` exports `Context`, `Directive` and `DirectiveElement` beside `Template`,
`Renderer` and `toAsyncTemplateLoader`; the global `defaultjs.tl` of `browser.js` carries the same
three beside `Template` and `Renderer`. The base class of a custom element is exported as
`DirectiveElement`, and its module is `src/DirectiveElement.js`, formerly `src/Element.js`. The
maintainer's decisions.

**Reasoning:** A custom directive extends `Directive` and works with the `Context` it is handed, a
custom element extends `DirectiveElement`, and `render` resolves to a `Context`: the extension API
and the result of a rendering need all three reachable from the package. The class in
`src/Element.js` was already named `DirectiveElement`; exported as `Element`, it would shadow the
DOM's global `Element` in every module importing it under that name. The module now carries the
name of its class, as `src/Directive.js`, `src/Context.js` and `src/Template.js` do.

**Alternatives:** Exporting the class as `Element` — it shadows the DOM's `Element` wherever it is
imported. Keeping the module at `src/Element.js` — a deep import of it keeps working, under a name
that differs from its class.

**Consequences:** A deep import of `src/Element.js` fails.

## 2026-10-13 — How does git store the bundles?

**Decision:** `.gitattributes` marks `dist/**` `-text`: git stores the bundles byte for byte, as
webpack writes them, without normalizing their line endings. Agreed with the maintainer on
2026-10-11, on the condition that the bundles need it, which the measurement below shows.

**Reasoning:** Measured 2026-10-13 in a clone of the repository, checked out under
`* text=auto eol=lf`: each development bundle carries 2377 CR — 1579 from the sources of
`@default-js/defaultjs-extdom` 2.0.0, 798 from those of `@default-js/defaultjs-common-utils` 1.0.0,
which are installed with CRLF in 24 of 29 and 8 of 18 files. The minified bundles and the source
maps carry none. Normalized by git, the committed bundle would differ from the built and published
one, and every build would show `dist/` modified. With the rule, a build in that clone, a build in
the maintainer's working copy and a second build there are byte-identical, and `git hash-object`
gives every bundle the same id with and without filters. `@default-js/defaultjs-expression-language`
keeps the same rule.

**Alternatives:** Normalizing `dist/` to LF like every other text file — the commit would differ
from the build. Removing the CR in the build — a step of its own for a property of the
dependencies.

**Consequences:** A bundle is built from sources with LF, or the CR of a CRLF working copy reaches
the commit. A fresh checkout gets LF through `* text=auto eol=lf`; a working copy checked out
before that rule needs its tracked files rewritten.

## 2026-10-13 — How is the `module` bundle built, and how are the bundles checked?

**Decision:** `webpack.config.mjs` exports one configuration per entry of `entries.config.json`. The
`module` configuration enables `experiments.outputModule` and sets `output.library.type` `module`:
the bundle is an ES module exporting what `index.js` exports, with its dependencies bundled in. The
`browser` configuration keeps the options it had. Only the first configuration carries `devServer`.
The suite tests the sources, not the bundles, and runs before they are built. The maintainer's
decisions; the bundled dependencies were agreed with the plan.

**Reasoning:** `index.js` imports the `@default-js` packages by bare name, so a page needs a bundler
or an import map for it; the `module` bundle needs neither. Measured 2026-10-13 with webpack
5.111.1: one configuration with `experiments.outputModule` emits the `module` bundle as an ES
module, but drops the function the `browser` bundle is wrapped in, so its top-level `var`
declarations become globals of the page; forcing `output.iife` fails in terser with "Export
statement may only appear at the top level". In a configuration of its own, the `browser` bundle is
concatenated differently — the minified one shrinks from 49704 to 49153 bytes — and works as
before. Checked by loading every bundle of `dist/` in Chromium, Firefox and WebKit: both `browser`
bundles set `defaultjs.tl` with `Renderer`, `Template` and `VERSION`, define none of the
minifier's top-level names `t`, `e`, `n`, `r`, `o` on the global object, and render a
`jstl-foreach` template, before and after the change; both `module` bundles exported
nothing before and now export `Renderer`, `Template` and `toAsyncTemplateLoader` and render the
same template. webpack-cli starts a dev server for every configuration carrying `devServer`, refuses
two on one port, and hands each the bundles of all configurations. The configurations are built in
parallel, so each replaces `${version}` in its own bundle only. The suite tests the code before it
is bundled, which is why the bundles were checked outside of it.

**Alternatives:** One configuration with `experiments.outputModule` — the `browser` bundle would
leak its variables into the page. The dependencies kept as imports (`externals`) — the bundle would
need an import map or a bundler, as `index.js` does. Tests in the suite loading `dist/` — they would
check the bundles of the previous build.

**Consequences:** The `module` bundle carries its own copy of
`@default-js/defaultjs-expression-language`; an executer set through that package does not reach
it, which `README.md` points out. No test notices a defect of a bundle: a change of the build is
checked by hand.

## 2026-10-13 — Which tools build the bundles and serve the development pages?

**Decision:** webpack 5 with webpack-cli 7, webpack-dev-server 6 and `replace-in-file-webpack-plugin`,
each declared with a caret range on its current release: `^5.111.1`, `^7.2.3`, `^6.0.0`, `^1.0.6`.
`clean-webpack-plugin`, `terser-webpack-plugin` and `http-server` are removed. The maintainer's
decisions.

**Reasoning:** `webpack.config.mjs` imports `replace-in-file-webpack-plugin` and no other plugin; no
script, configuration or document names the three removed packages, and webpack minifies with the
`terser-webpack-plugin` it depends on itself. webpack-cli 7 needs Node 20.9, webpack-dev-server 6
Node 22.15; `.nvmrc` pins 24. Every option of `devServer` in the configuration exists in the
schema of webpack-dev-server 6, so the configuration stays as it is. Measured 2026-10-13: the six
files of `dist/` built with the new tools are byte-identical to those built from the same sources
with webpack-cli 5.1.4 and webpack-dev-server 5.2.6 — webpack itself stayed at 5.111.1 — and
`npm run dev` serves `WebContent/` and the bundles on port 3000. `npm audit` falls from 7 findings
(5 high, 2 moderate) to 5 high, all from one advisory: GHSA-vfj7-8cjw-p6xm in `braces` 3.0.3, which
reaches the tree through webpack-dev-server 6, `http-proxy-middleware` 4.2.0 and `micromatch`
4.0.8. No release of `braces` fixes it. A clean audit is no condition of 2.0.0; the findings are
reduced as far as current releases allow.

**Alternatives:** Keeping webpack-cli 5 and webpack-dev-server 5 — the two moderate findings of
`uuid` through `sockjs` stay, and the tools stay a major version or two behind. Updating the
three unused packages instead of removing them — dependencies nothing uses. webpack-dev-server
1.14.1, which `npm audit fix --force` proposes against the `braces` advisory — a release of
2016-01-11 that requires webpack below 3.

**Consequences:** The `braces` advisory stays in the development tree until a release of `braces`,
`micromatch` or `http-proxy-middleware` removes it; it does not reach consumers, since
development dependencies are not installed with the package. Building and serving need Node 22.15
or later.

## 2026-10-12 — How does the package declare its module format, its entry points and its build?

**Decision:** `package.json` declares `"type": "module"` and an `exports` field opening `.`,
`./index.js`, `./browser.js`, `./src/*`, `./dist/*` and `./package.json`. The webpack configuration
is an ES module, `webpack.config.mjs`; Node 24 is pinned in `.nvmrc`. The `CopyPlugin` and
`copy-webpack-plugin` are removed. The maintainer's decisions.

**Reasoning:** The sources are ES modules. Without `"type"`, Node 24 parses a source as CommonJS
first, warns `MODULE_TYPELESS_PACKAGE_JSON` and parses it again as ES module (measured
2026-10-12). `exports` names the entry points; `./src/*` and `./dist/*` keep deep imports open, and
`./package.json`, opened as in the expression language, leaves every published file that can be
imported reachable — `exports` closes nothing that worked before. Under `"type": "module"` the
CommonJS configuration fails with `ReferenceError: require is not defined in ES module scope`
(measured 2026-10-12), hence the move to `.mjs`. The `CopyPlugin` copied only `./src/css`, which
does not exist. Measured 2026-10-12 against a build of the same sources with the former
configuration: webpack now treats the sources as strict ES modules, and the development bundles
differ only in the order of the modules, the name of an unused parameter and their inline source
map; the minified `module` bundle is identical; the minified `browser` bundle orders its modules
differently and renders a template with `jstl-if`, `jstl-foreach`, `jstl-choose`, `jstl-data`, `jstl`
and html content the same in Chromium, Firefox and WebKit.

**Alternatives:** No `exports`, as before — every path open, no declared entry point. `exports`
without `./src/*` — it would close the deep imports consumers use. `webpack.config.cjs` — the
smallest change, keeping the configuration in CommonJS. Keeping the `CopyPlugin` for files to come.

**Consequences:** A module a consumer imports has to lie under one of the opened paths; every
module under `src/` can be imported, so moving or renaming one changes a public path. Copying files
into `dist/` needs a plugin again.

## 2026-10-12 — What does a test case assert, and how is it written?

**Decision:** As `TESTING.md` sets it out in "What a case asserts", "How a case is written",
"Skipped and failing cases" and "Fixtures". The result is checked by targeted assertions, the
expected number of children always among them, independent of the formatting of the template; text
is compared exactly through `textContent`, whitespace included; the cases of a directive render the
way `README.md` shows it, `Template.load` and the static `Renderer.render`; a case that reveals a
defect is marked `it.fails` and names the defect's backlog entry. The maintainer's decisions on
these four; the other rules were agreed with the maintainer as drafted.

**Reasoning:** The cases ported from Karma pass where the behaviour is wrong (found 2026-10-12): a
second `render` not awaited, so its assertion runs before it; a case named "direct mode" that tests
`set`; a case that passes through a default name because the attribute it sets does not exist;
assertions on a count only, down to `find("div").length > 100`; negative event cases that race a
100 ms timeout and `throw` inside the handler, where the error never reaches the case. A count
alone passes with wrong content, so the properties the behaviour is about are asserted beside it;
counting through `children` keeps the whitespace of a formatted template out of the count. Text is
compared with its whitespace because whitespace is part of the result — in a `<pre>` it is the
point, and a `trim()` by default would hide it. A handler as spy is asserted after a synchronous
`trigger`, since the handlers are bound once `render` is awaited and extdom's `trigger` dispatches
at once (`EventSupport.js`, read 2026-10-12). Rendering as `README.md` shows it makes the cases use
the documented API. `it.fails` keeps the right assertion in the suite and the gate green; Vitest
fails a case marked so once it passes ("Expect test to fail", Vitest 5.0.3), so a fix cannot go
unnoticed.

**Alternatives:** The rendered markup compared as a string — short and complete, but tied to the
formatting of the template and to the serialization; with a helper that drops whitespace text
nodes, a helper of its own and whitespace no longer asserted. `Renderer.build`, through which most
ported cases render — it takes a string, and `README.md` does not describe it. For a revealed
defect: the weak assertion kept until the fix, or the case removed until then — either loses the
right assertion until someone writes it again.

**Consequences:** Every case of the suite is revised under these rules. A case asserting text in a
formatted template carries the template's whitespace in its expectation. `it.fails` passes for any
failure, also a wrong one, so a case is seen failing for the right reason before it is marked.
Cases of a directive depend on `Template.load` and the static `Renderer.render` working.

## 2026-10-12 — How is the test suite organized?

**Decision:** Vitest finds the test files, every `*.test.js` under `test/`, and runs each in a page
of its own. The suite mirrors `src/`: the cases of `src/<path>.js` stand in
`test/tests/<path>.test.js`. The maintainer's decisions.

**Reasoning:** Until then `test/index.js` imported every test file into one page per engine. A
file outside that import chain did not run, without anyone noticing; the cases shared the state of
the package — the template cache, globals, registered custom elements — and the order of the
imports decided which module of the package loaded first. That order hid a defect: loading
`src/Directive.js` as the first module threw a `ReferenceError` while `src/Context.js` imported
`src/Renderer.js`. In a page of its own, `test/tests/Directive.test.js` loads `src/Directive.js`
first; with that import put back it fails in Chromium, Firefox and WebKit, without it it passes
(measured 2026-10-12). Mirroring `src/` gives every module one place for its cases, and the
coverage of a source file points at one test file.

**Alternatives:** The import chain in one page, as before — half the run time, at the price of
shared state and of a file that can drop out unnoticed. A structure by the sections of `README.md`
— closer to the reference for the behaviour, further from the coverage per file.

**Consequences:** A page per file and engine costs time to start: `npm test` took 6.1 to 6.8 s with
the chain and takes 12.2 to 12.5 s with 14 files (measured 2026-10-12, same machine, same 279
cases). A case cannot rely on what another file set up. Test files carry the `.test.js` suffix, or
they do not run.

## 2026-10-12 — Which executer does the package render with?

**Decision:** The default executer of `@default-js/defaultjs-expression-language`. The package
neither selects nor configures an executer: which one runs, and what it costs, is a matter of the
expression language, not a function of this package. The maintainer's decision.

**Reasoning:** What an expression can do, and how that is configured, is defined by the expression
language. The executer matters for speed — measured 2026-10-11 (`BENCHMARKS.md`, "Expression
language and executer compared"), `context-deconstruction-executer`, the default of 3.x, renders
1.23 to 1.65 times as slow as `with-scoped-executer` over all cases and up to 2.15 times on deep
templates — but choosing one would make the package carry a rule of the expression language and
change what an expression means for every consumer: the executers differ in semantics, e.g.
`context-deconstruction-executer` carries no assignment back to the context. A consumer who wants
another executer sets it in the expression language.

**Alternatives:** Setting `with-scoped-executer`, the fastest in every engine measured — it would
override the default of the expression language for every consumer and tie the package to the
semantics of one executer.

**Consequences:** The package's rendering speed follows the default of the expression language; the
benchmarks measure with it, and the suite tests with it. Work on performance stays within this package: what the renderer,
the contexts and the directives cost and what they hand to the expression language, never the
executers themselves.

## 2026-10-11 — How is rendering performance measured?

**Decision:** With Vitest's benchmark API — the `bench` of the test context in Vitest 5 — through
`npm run bench`, in Chromium, Firefox and WebKit, one engine and one file after the other, never as
part of `npm test`. Besides cases 1–3, which stay as they were, every directive with a nesting of
its own is measured nested at a depth of 10, 100 and 500 elements and side by side as 10, 100 and
1000 siblings, the loops over 10, 100 and 1000 items. Recorded is the median of three runs of the
mean latency, per engine. The maintainer's decisions.

**Reasoning:** The former cases ran nowhere and timed a single render with `Date.now()`; a benchmark
runner repeats a render until the mean is stable. Vitest 5 replaced the `bench()` of Vitest 4, so
the API differs from the expression language, which still runs Vitest 4. A regression can be
specific to one engine, and the package supports all three. Measurements that share the machine
distort each other, hence one after the other. A directive costs per element and per level of
nesting, so both are measured. The depth stops at 500 because the HTML parser caps nesting at 512
levels — 511 in WebKit — and attaches deeper elements as siblings (measured 2026-10-11): a deeper
template cannot be written as HTML, and a `jstl-choose` chain written deeper falls apart.

**Alternatives:** Vitest 4, as in the expression language — keeps its `bench()`, at the price of
an older release. Chromium only — a third of the time, blind to the other engines. A depth of 1000 built
through the DOM API — a depth no HTML template reaches, loaded another way than the other sizes.

**Consequences:** A full run takes several minutes and needs the three Playwright browsers. Case 1,
written 5000 levels deep, is 512 deep in every engine; its description says so.

## 2026-10-11 — What does the test suite run on?

**Decision:** Vitest in browser mode, through Playwright, in Chromium, Firefox and WebKit — every
engine from the first run on. The sources and the `@default-js` packages are served unbundled.
Vitest's functions are imported in every test file, not globals. The maintainer's decisions,
except the last, which follows from the reasoning below.

**Reasoning:** Karma is deprecated. The package renders into the DOM of the browser it runs in, so
the suite runs in real browsers, and in the engines of the browsers the package supports — WebKit
for Safari. Served unbundled, the suite loads the sources the way a browser does without a bundler,
which showed at once that `src/Context.js` imported an export that does not exist; the bundled
Karma run never failed on it. The packages are not pre-bundled because the sources and
the test setup import them through different paths and have to share one instance of each module.
An expression resolves a name its context does not hold against the global object, so global
`describe`, `it`, `test` or `expect` would be found by a template that means something else.

**Alternatives:** Node with jsdom or happy-dom — a simulation of the DOM, not a browser. One engine
first and the others later — the maintainer chose all three at once.

**Consequences:** `npm test` needs the three Playwright browsers installed
(`npx playwright install chromium firefox webkit`). A case that a single engine cannot pass needs a
decision of its own, since the gate runs all three. The first one, decided by the maintainer: WebKit does
not support customized built-in elements, so `README.md` names that limitation for Safari, the case
for the `is` attribute is skipped in WebKit, and a case of its own asserts there what the README
says.

## 2026-10-11 — How are the runtime dependencies declared?

**Decision:** With caret ranges on the current releases: `^3.0.2` for
`@default-js/defaultjs-expression-language`, `^1.0.0` for `@default-js/defaultjs-common-utils`,
`^2.0.0` for `@default-js/defaultjs-extdom`. The maintainer's decision.

**Reasoning:** Up to 1.7.20 all three were declared `latest`, so an install was not reproducible
and a breaking release of a dependency reached consumers unannounced. It happened on 2026-10-11:
`latest` of the expression language moved to 3.0.0, whose `exports` closed paths this package
imports, and a fresh install of 1.7.20 no longer built. 3.0.1 and 3.0.2 reopened the paths; with
3.0.2 the build succeeds and the suite passes, hence the lower bound. A caret range still accepts
the minor and patch releases of each dependency.

**Alternatives:** Exact versions — every fix in a dependency would need a release of this package
to reach a consumer; the better choice if a dependency broke compatibility within a major version.
`latest`, as before.

**Consequences:** A new major version of a dependency reaches consumers only through a release of
this package that raises the range.

## 2026-10-11 — How does a change in behaviour reach `README.md`?

**Decision:** README first, on trial. The plan for a change in behaviour carries the new wording
of `README.md`, and the maintainer approves it with the plan; then README, test and code follow in that
order, in one diff. Code that deviates from the README is a defect: the code is fixed, the README
stays. Behaviour the README does not describe gets its own `BACKLOG.md` entry instead of being
documented along the way. The maintainer's decisions.

**Reasoning:** `README.md` is the reference for the behaviour (entry below), so changing it changes
the reference — the maintainer's decision, hence the wording in the plan. Written first, it is what the test
pins, not the code. One diff keeps README and code in agreement at every commit, as published files
state facts. A gap gets its own entry so that a change does not settle new behaviour on the side.

**Alternatives:** The README updated after the code, in the same turn, like the changelog — the
reference would follow the code instead of leading it. README wording written within an approved
scope and seen by the maintainer only in the diff.

**Consequences:** A change in behaviour always touches README, test and code, so it always goes
through a plan.

## 2026-10-11 — How are type declarations made?

**Decision:** `tsc` generates them from the JSDoc of the sources, and the package ships them from
version 2.0.0 on — the version the maintainer declares finished. The JSDoc keeps to what `tsc` reads from
2026-10-11 on (`AGENTS.md`, Conventions). The maintainer's decisions.

**Reasoning:** `tsc` reads the code and takes the types from the JSDoc where it has them. Measured
2026-10-11 with `tsc` 7.0.2 (`--allowJs --declaration`) on a sample class: without JSDoc every
parameter, return value and field is declared `any`, a destructured option object `{}`; with JSDoc
the declarations carry the documented types, and the comments an editor shows a consumer. JSDoc is
required on everything anyway, so the declarations need no second source.

**Alternatives:** Hand-written `.d.ts` — a second source beside the code, drifting from it without
any test noticing. Sources in TypeScript — the sources are published and run untranspiled in the
browser, which a compile step for `src/` would end.

**Consequences:** The JSDoc has to keep to what `tsc` reads. Measured 2026-10-11 with `tsc` 7.0.2,
the generated declaration then type-checked: the Closure function type `function(string): *` is
declared `Function`, the arrow form `(aValue: string) => *` keeps its types; `@readonly` on a getter
is emitted as `readonly get`, error TS1024 in the declaration; a `@typedef` on the class it names is
emitted as a type alias merged with the default-exported class, error TS2652. Generating needs
`typescript` as a dev dependency and a build step.

## 2026-10-11 — What is the reference for the package's behaviour?

**Decision:** `README.md`. It describes how a consumer uses each feature, and the code is
implemented the way it describes. There is no separate specification. The maintainer's decision.

**Reasoning:** The README is where a consumer learns how a feature is used; that description is
what the implementation has to meet.

**Alternatives:** An internal `SPECIFICATION.md` beside the README, as
`@default-js/defaultjs-expression-language` keeps one.

**Consequences:** Behaviour the README does not describe has no reference to be checked against.
