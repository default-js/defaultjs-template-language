# Backlog

Every open item of this project: findings, open decisions, agreed work, ideas. Entries are deleted
once done; git history is the archive. IDs are never reused.

## Format

Each entry is a level-3 heading `### B<n> — <title>`, followed by one line

`**Status:** open | agreed | in progress | blocked · **Kind:** defect | decision | task | idea`

and, on an entry 2.0.0 waits for, `· **Blocks 2.0.0**` at the end of that line,

and a short body: what, where (file and symbol, not line numbers), why it matters. Agreed work
carries the agreed scope; a blocked entry names what it waits for.

- `open` — noted, nothing agreed yet.
- `agreed` — scope approved, not started.
- `in progress` — being worked on.
- `blocked` — waits for something outside the entry.

## 2.0.0 scope

Defined with the maintainer on 2026-10-11. This is the overview; every item is carried by an entry
below marked **Blocks 2.0.0**, and 2.0.0 is done when none of them is open and the maintainer
releases it. A decision here reaches `DECISIONS.md` when its entry is worked on, not before — until
then it may still change.

- **Character:** quality and modernization, like 3.0.0 of `@default-js/defaultjs-expression-language`
  — toolchain, package shape, defects, documentation, tests. No new functions, with one exception
  the maintainer decided: the configurable separator of event attributes (B33).
- **Test runner (B28):** Vitest in browser mode through Playwright, replacing Karma and Jasmine
  (Karma is deprecated). The existing cases are ported 1:1 first, as a green
  baseline; then the suite is reorganized under rules written into `TESTING.md` (B39).
- **Coverage (B29):** complete, measured with v8 coverage; whatever stays untested on purpose is listed
  one by one with its reason.
- **Package shape (B30):** `"type": "module"` and an `exports` field opening `.`, `./index.js`,
  `./browser.js`, `./src/*` and `./dist/*` — clear entry points, deep imports stay open.
- **Build (B31):** webpack stays, its configuration becomes an ES module (`webpack.config.mjs`); Node 24
  pinned in `.nvmrc`.
- **Development dependencies (B36):** brought up to date — webpack, webpack-dev-server and the
  plugins.
- **Bundles:** the `module` bundle becomes an ES module exporting what `index.js` exports (B17);
  the `browser` bundle stays as it is.
- **Type declarations (B21):** as in the expression language — `npm run build:types` generates a
  `.d.ts` beside every source, they are committed, and the gate type-checks them.
- **Extension API (B32):** custom directives and elements become official API — `index.js` exports
  `Directive` and `Element`, `README.md` documents extending (B11), tests cover it. Nothing new is
  built; the existing mechanism is made public.
- **Defects**, decided one by one — fixed in 2.0.0: B2, B3, B4 (a string template works, as
  the JSDoc promises), B5 (an array of callbacks works like a single one), B7 (with the move to
  `webpack.config.mjs`), B18 (custom elements are repaired: the renderer recognizes one
  through `customElements.get` and a class extending `Element`; `execute(context)` gets one
  signature), B22 (an object is iterated by its own properties — the item is the value, the
  status also carries the key; documented, README first), B6 (`jstl-async` implemented anew),
  B37 (loading `src/Directive.js` first). All defects are fixed.
- **README:** complete and correct at 2.0.0 — the errors of B23 fixed, the empty sections filled
  (B11), every function of the code documented or removed (B24, B40, B43, decided item by item). Code
  and README agree.
- **Benchmarks:** the baseline on the sources of 1.7.20 is in `BENCHMARKS.md` (2026-10-11); every
  later stage gets its row.
- **Clean-up:** `web/` (B9) and the dead code of B12 are removed.
- **Browsers (B28, B35):** current evergreen browsers — Chrome, Edge, Firefox, Safari — named in the README
  with their limitations (e.g. `is` in Safari). The suite runs in all three engines through
  Playwright: Chromium, Firefox, WebKit.
- **Migration (B35):** `CHANGELOG.md` lists every change under 2.0.0; `README.md` gets a section
  "Migrating from 1.x" with the steps a consumer has to take.
- **Expression language 3:** no separate audit of its behaviour changes; the suite, at complete
  coverage, is relied on to show what reaches this package.
- **Error behaviour (B34):** decided per directive — what the result holds and what is logged when a
  directive or an expression fails — written into `README.md` first, then tested. Today renderer
  and directives log and render on, from 15 `console.*` call sites in `src/`.
- **Tracking:** no plan under `plans/`; every scope item is a backlog entry, its order decided when
  it is started. The baseline is measured, so `src/` may change.
- **Releases:** no pre-release on npm; 1.7.20 stays `latest` until 2.0.0.
- **Also in 2.0.0:** B20, measured with the first build. **Not in 2.0.0:** B25 and B26.

## Entries

### B2 — `Template.fetch` with a string throws `ReferenceError`

**Status:** agreed · **Kind:** defect · **Blocks 2.0.0**

`src/Template.js`, `Template.fetch`: `new URL(url, loaction)` — `loaction` is a typo for `location`.

Two cases of `test/tests/Template.test.js` are marked `it.fails` for it; the fix starts by turning
them into `it`.

### B3 — `Template.fetch` and `Template.load` swallow unsupported types

**Status:** agreed · **Kind:** defect · **Blocks 2.0.0**

`src/Template.js`: both end in `new Error(...)` without `throw`, so an unsupported argument
resolves to `undefined` instead of failing.

### B4 — `toTemplate` never converts a string

**Status:** agreed · **Kind:** defect · **Blocks 2.0.0**

`src/Context.js`, `toTemplate`: `typeof template === String` compares against the constructor and
is always false; a string template passes through unconverted.

Agreed: a string template works, as the JSDoc promises. Inside the package no caller hands one
over; a custom directive (B32) can.

### B5 — `Context.ready` with an array throws

**Status:** agreed · **Kind:** defect · **Blocks 2.0.0**

`src/Context.js`, `ready(callback)`: for an array it calls `this.wait.then(...)`; there is no
`wait` property, only the private `#wait`, so this throws a `TypeError`.

Agreed: an array registers each of its callbacks like a single one. Inside the package only
functions are handed over (`AttachElement.js`, `OnFinished.js`); a custom directive can.

### B6 — `jstl-async` documented but disabled

**Status:** agreed · **Kind:** defect · **Blocks 2.0.0**

`README.md` documents `jstl-async`; `src/directives/Initial.js` guards the branch with
`false && ...`, so the attribute has no effect.

History: until `43ac9e0` (2025-07-16) the branch tested `template.attr("jstl-async")`, which is
empty — falsy — for `<div jstl-async>` as the README writes it, so the feature hardly ever ran.
`43ac9e0` switched to `hasAttribute`; `6c6de76` (2025-08-07, "usage of jstl-ignore improved")
disabled the branch three weeks later, without a reason in the message. No test covers it. The
branch also removes the attribute before reading its value as the delay, so the delay is always
250 ms.

Agreed: implemented anew — first reproduce in a test what broke when it was enabled,
then implement it as `README.md` describes.

### B9 — `web/` holds stale build output

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

`web/` contains webpack output last changed in 2022 (`commons.js` alone is 29 MB). Nothing in the
repository refers to it.

Agreed: removed.

### B11 — empty README sections

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

`README.md`: "Use Template File", "Custom Directives" and "Custom Tags" have a heading and no
content.

Agreed: all three filled; "Custom Directives" and "Custom Tags" with the extension API (B32).

### B12 — dead code

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

`src/Context.js`: `observe` / `runObserver` are never called. `src/index.js` is an empty file.
`SCOPES.directive` in `src/Renderer.js` is used nowhere.

Agreed: removed.

### B18 — `Element.execute` reads a parameter it is not given

**Status:** agreed · **Kind:** defect · **Blocks 2.0.0**

`src/Renderer.js`, `renderNode`, calls `template.execute(context)`; `src/Element.js` and
`src/elements/Replace.js` declare `execute({ template, context })` and so destructure
`context.context`, which does not exist. The base implementation then throws on
`context.content = ...`.

The path is not reached either. Measured 2026-10-11 in headless Chromium: a custom element parsed
into a `<template>` and taken from the content of `document.importNode(template, true)` — what
`Template.importContent` hands the renderer — is not an instance of its class; the same markup
parsed into a live element is. So `template instanceof Element` in `renderNode` is never true for a
template loaded through `Template`. `jstl-replace` is created only in the disabled branch of
`jstl-async` (B6).

Agreed: repaired — the renderer recognizes a custom element through `customElements.get` and a
class extending `Element`; `execute(context)` gets one signature. `Element` becomes public with the
extension API (B32).

### B21 — ship type declarations with 2.0.0

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

The package ships `.d.ts` files generated by `tsc` from the JSDoc, from version 2.0.0 on — the
version the maintainer declares finished (`DECISIONS.md`, 2026-10-11). Needs `typescript` as a dev
dependency and a build step.

Agreed: as in the expression language — `npm run build:types` generates a `.d.ts` beside every
source, they are committed, and the gate type-checks them.

### B22 — `jstl-foreach` and `jstl-repeat` over an object yield `undefined`

**Status:** agreed · **Kind:** defect · **Blocks 2.0.0**

`src/directives/Foreach.js`, `doForeach`, and `src/directives/Repeat.js`, `doRepeat`: for data
that is not an array, the loop runs over `Object.getOwnPropertyNames(data)`, but the item is
`data[i]` — the value at the numeric index, not at the `i`-th property name.

Agreed: an object is iterated by its own properties — the item is the value, the status also
carries the key; documented in `README.md` first.

### B23 — README errors

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

`README.md`, the reference for the behaviour, contains errors:
- the package name misspelled — `defaultjs-template-languange` in "Basic usage",
  `defauljs-template-language` in both API imports;
- the script tag names `defaultjs-template-languange.min.js`; the bundle is
  `browser-defaultjs-template-language.min.js`;
- "Text content manipulation": `${hallo}` against the data key `hello`; the filtered output ends
  `</b>/div>`;
- "Text content manipulation", trim length: `jstl-text-trim-length` is the length with the
  ellipsis — the example gives `this is an l...`, not `this is an long...`;
- "Text content manipulation", html as text: the tags are not escaped but removed, entities
  decoded — the example gives `hello worldalert("unsecure")`;
- the `jstl-repeat-var` example uses `jstl-foreach-var`;
- the mode tables of `jstl-include` and `jstl-attach-element` list `prepand`; the code reads
  `prepend`;
- "toggle class by event": the condition names `toggleclass`, the handler `toggleAttribute`;
- the heading `new Tempate(template)`; `render(option)` is marked "Kind: constructor".

Agreed: all fixed.

### B24 — behaviour `README.md` does not describe

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

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

Agreed:
- loops: `-count`, `-start`, `-step`, `-condition` documented and tested, for both directives.
- data: `jstl-data-option`, `jstl-data-scope` and `remote` as the default mode documented and tested.
- text: `jstl-text-ignore` documented and tested; `jstl-text-prevent-format` removed — it called
  `StringUtils.formatToHtml` until 2019 (`c3eeceb`) and has had no effect since the reimplementation.
- elements: `jstl-ignore-childs`, the `is` attribute and rendering a `<template>` into its content
  documented and tested.
- events: the handler object `{ eventHandle, capture, passive, once }`, a string as delegated event,
  the option `prevent-default` of `toggleClass` / `toggleAttribute` documented and tested. The
  separator becomes configurable (B33).
- the rest: `jstl-on-finished` with `-async` and `$element`, `$root`, `$template` (no longer
  "experimental"), `toAsyncTemplateLoader`, the global `defaultjs.tl` / `defaultjs.jstl` documented
  and tested.

### B25 — update a rendering when its data changes

**Status:** open · **Kind:** idea

Today `render()` renders once into a container; a change of the data needs another call. Updating
the output on a change of the data is not offered, and not ruled out (2026-10-11).

### B26 — server-side rendering

**Status:** open · **Kind:** idea

Rendering outside the browser, possibly with restrictions. Today the renderer needs a DOM. Not a
goal of 2.0.0 (2026-10-11).

### B29 — complete test coverage

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

Coverage is complete, measured with v8 coverage; whatever stays untested on purpose is listed one
by one with its reason.

### B32 — extension API

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

Custom directives and elements become official API: `index.js` exports `Directive` and `Element`,
`README.md` documents extending ("Custom Directives", "Custom Tags", B11), tests cover it. Nothing
new is built; the existing mechanism is made public, with custom elements repaired (B18).

Open until this entry is worked on: the name under which the element class is exported. In
`src/Element.js` it is `DirectiveElement`; exported as `Element` it would shadow the DOM's global
`Element` in every module importing it — as `src/Renderer.js` already does with its default import
named `Element`, while `src/directives/Initial.js` means the DOM's `Element` by `instanceof Element`.

### B33 — configurable separator of event attributes

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

The separator in an event attribute — `::` in `@click::delegate`, today with a fallback to `:` —
becomes configurable: a global setting, overridable for a single event attribute in the template.
The default is `::`, without the fallback; a template using `:` needs the setting. A new function,
the one exception to the character of 2.0.0 the maintainer decided. The syntax of the override goes
into `README.md` first.

### B34 — error behaviour per directive

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

Today renderer and directives log a failure and render on, from 15 `console.*` call sites in
`src/`; what the result then holds is not described. Agreed: decided per directive — what the
result holds and what is logged when a directive or an expression fails — written into `README.md`
first, then tested.

Measured 2026-10-11 on the sources of 1.7.20, the case "undefined array", now "renders no item
when jstl-foreach-count is undefined" in `test/tests/directives/Foreach.test.js`: with the expression language 2.0.4 the resolver logs
the `ReferenceError` ("Execution error on statement!") and the directive goes on; with 3.0.2 the
resolver logs it and passes it on, and `jstl-foreach` logs it a second time ("error at
jstl-foreach"). The expectation of the case holds with both. Version 3 hands a failing expression
to the directive, where version 2 kept it.

### B35 — supported browsers and migration guide

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

`README.md` names the supported browsers — current Chrome, Edge, Firefox and Safari — with their
limitations, and gets a section "Migrating from 1.x" with the steps a consumer has to take.
`CHANGELOG.md` lists every change under 2.0.0.

The section "Browser support" exists since 2026-10-11 and holds one limitation: Safari does not
support customized built-in elements, so the `is` attribute has no effect there.

### B38 — this package's share in the cost of nesting depth

**Status:** agreed · **Kind:** task

Rendering cost grows faster than the nesting depth. Measured 2026-10-11 (`BENCHMARKS.md`, median of
three runs): ten times the siblings — 100 to 1000 — cost 9.1 to 10.3 times as much in every engine,
close to linear; five times the depth — 100 to 500 — costs 9.0 to 28.8 times as much in Chromium,
9.0 to 20.1 in WebKit and 6.4 to 15.4 in Firefox, where linear would be 5. Case 1, 5000 elements
512 deep, takes 1200 ms in Chromium against 278 ms for the 10000 flat elements of case 3. Compared
across executers ("Expression language and executer compared"): with `with-scoped-executer`, `if`,
attributes and events still grow 8.8 to 11.3 times from a depth of 100 to 500 in Chromium, so part
of the growth is not the executer's.

Agreed 2026-10-12: investigated within the boundaries of this package — the renderer, the contexts
and the directives, and what they hand to the expression language per level of nesting. The
expression language and its executers are neither changed nor configured nor analysed; the package
renders with the default executer (`DECISIONS.md`, 2026-10-12), and the investigation measures with
it.

### B43 — what `render` resolves to

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

`src/Renderer.js`: `render(option)` and the static `Renderer.render` resolve to the `Context` of
the rendering (measured 2026-10-12). `Context` is not exported by `index.js` and `README.md` does
not describe the value.

Agreed 2026-10-12: the `Context` is documented — `index.js` exports it, `README.md` describes its
public parts (README first), the type declarations of B21 cover it. Public is all of `Context`
(the maintainer, 2026-10-12): the constructor, the methods `ignoreDirective`, `acceptDirective`,
`finished`, `ready`, `subContext`, `clone`, `toRenderOption`, the getters `id`, `depth`, `parent`,
`renderer`, `root`, `template` (with its setter), `mode`, `subcontexts`, `closed`, and the fields
`content`, `container`, `target`, `resolver`, `stop`, `ignore`. Custom directives (B32) work with
the same members.

### B44 — a page of `WebContent/` loads a bundle the build does not emit

**Status:** open · **Kind:** defect

`WebContent/event-handling/index.html` loads `/defaultjs-template-language.js`; the build names its
bundles `<entry>-defaultjs-template-language.js` since `15061e2` (2022-08-21), and
`WebContent/delegate-input-event/main.js` loads `/browser-defaultjs-template-language.js`. Measured
2026-10-13 with `npm run dev`: the dev server answers 404 for `/defaultjs-template-language.js`.
`WebContent/js/Renderer.js`, loaded by the same page, reads `defaultjs.tl`, which the `browser`
bundle sets. `WebContent/` is not published.
