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
  — toolchain, package shape, defects, documentation, tests. No new functions, with the exceptions
  the maintainer decided: the configurable separator of event attributes (B33), `first`,
  `last` and `step` in the status of `jstl-foreach` and `jstl-repeat` (2026-10-13, with B22), and
  iterables and `Map`s as data of `jstl-foreach` and `jstl-repeat` (2026-10-14, B47).
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
  `Directive` and `DirectiveElement`, `README.md` documents extending (B11), tests cover it. Nothing new is
  built; the existing mechanism is made public.
- **Defects**, decided one by one — fixed in 2.0.0: B2, B3, B4 (a string template works, as
  the JSDoc promises), B5 (an array of callbacks works like a single one), B7 (with the move to
  `webpack.config.mjs`), B18 (custom elements are repaired: the renderer recognizes one
  through `customElements.get` and a class extending `DirectiveElement`; `execute(context)` gets one
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

### B6 — `jstl-async` documented but disabled

**Status:** agreed · **Kind:** defect · **Blocks 2.0.0**

`README.md` documents `jstl-async`; `src/directives/Initial.js` guards the branch with
`false && ...`, so the attribute has no effect.

History: until `43ac9e0` (2025-07-16) the branch tested `template.attr("jstl-async")`, which is
empty — falsy — for `<div jstl-async>` as the README writes it, so the feature hardly ever ran.
`43ac9e0` switched to `hasAttribute`; `6c6de76` (2025-08-07, "usage of jstl-ignore improved")
disabled the branch three weeks later, without a reason in the message. No test covers it. The
branch also removes the attribute before reading its value as the delay, so the delay is always
250 ms. The branch puts a `jstl-replace` into the result as a placeholder, while an element extending
`DirectiveElement` found in a template is not taken into the result (`DECISIONS.md`, 2026-10-14).

Agreed: implemented anew — first reproduce in a test what broke when it was enabled,
then implement it as `README.md` describes.

### B11 — empty README sections

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

`README.md`: "Use Template File" has a heading and no content.

Agreed: filled. "Custom Directives" and "Directive Elements", formerly "Custom Tags", are filled
since 2026-10-14 with the extension API.

### B21 — ship type declarations with 2.0.0

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

The package ships `.d.ts` files generated by `tsc` from the JSDoc, from version 2.0.0 on — the
version the maintainer declares finished (`DECISIONS.md`, 2026-10-11). Needs `typescript` as a dev
dependency and a build step.

Agreed: as in the expression language — `npm run build:types` generates a `.d.ts` beside every
source, they are committed, and the gate type-checks them.

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

A directive element whose `execute` throws, such as one whose class does not implement it, is one
of the cases: by the code, `renderNode` in `src/Renderer.js` logs "error at render node" and the
tag leaves nothing in the result. So is an `execute` that resolves to something other than the context:
`renderNode` goes on with what `execute` resolves to. Measured 2026-10-14 in Chromium, Firefox and
WebKit with `<div><probe-noreturn></probe-noreturn><p></p></div>`, its `execute` setting a
`<section>` and returning nothing: `render` resolves, and the `<div>` is empty — the `<p>` after
the tag is missing too. By the code, `renderContainer` calls `ready()` on the `undefined` that
`renderNode` returns, and the `TypeError` ends the rendering of the children of the `<div>`.

A custom directive that sets `context.content` to `null` before the phase `content` without setting
`context.stop` is another: by the code, `attribute` then sets each attribute of the element on
`null`, and `executeDirectives` logs "error at directive" for the `TypeError` once per element with
attributes; the node leaves nothing in the result, as `README.md` says. Found 2026-10-14 by reading
the code; not measured.

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
the rendering (measured 2026-10-12). `README.md` does not describe the value. `index.js` and the
global `defaultjs.tl` of `browser.js` export `Context` since 2026-10-13, by the maintainer; open are
`README.md`, the tests and the type declarations.

Agreed 2026-10-12: the `Context` is documented — `index.js` exports it, `README.md` describes its
public parts (README first), the type declarations of B21 cover it. Public is all of `Context`
(the maintainer, 2026-10-12): the constructor, the methods `ignoreDirective`, `acceptDirective`,
`finished`, `ready`, `subContext`, `clone`, `toRenderOption`, the getters `id`, `depth`, `parent`,
`renderer`, `root`, `template` (with its setter), `mode`, `subcontexts`, `closed`, and the fields
`content`, `container`, `target`, `resolver`, `stop`, `ignore`. Custom directives work with
the same members.

### B44 — a page of `WebContent/` loads a bundle the build does not emit

**Status:** open · **Kind:** defect

`WebContent/event-handling/index.html` loads `/defaultjs-template-language.js`; the build names its
bundles `<entry>-defaultjs-template-language.js` since `15061e2` (2022-08-21), and
`WebContent/delegate-input-event/main.js` loads `/browser-defaultjs-template-language.js`. Measured
2026-10-13 with `npm run dev`: the dev server answers 404 for `/defaultjs-template-language.js`.
`WebContent/js/Renderer.js`, loaded by the same page, reads `defaultjs.tl`, which the `browser`
bundle sets. `WebContent/` is not published.

### B45 — `Context.ready` with an array completes the context on an empty item

**Status:** open · **Kind:** defect

`src/Context.js`, `ready(callback)`: an array hands each item to `ready` again. An item that is
falsy — `null`, `undefined` — reaches the branch of a call without argument, which runs the
callbacks, waits for the subcontexts and resolves the context, before the rendering has finished.
Found 2026-10-13 by reading the code; not measured.

### B46 — `jstl-include-mode` `append` and `prepend` drop the content of the element

**Status:** open · **Kind:** defect

`README.md` describes `append` as appending and `prepend` as prepending the included template to
the content of the element. `src/directives/Include.js` renders the template into the content with
the mode, then sets `context.ignore`, so the children of the element are not rendered: every mode
gives the same result as `replace`. Measured 2026-10-13 in Chromium, Firefox and WebKit with
`<div jstl-include="…" jstl-include-mode="append"><p></p></div>`: the `<p>` is missing. The cases
"keeps the content of the element in mode append/prepend" in
`test/tests/directives/Include.test.js` are marked `it.fails` for it.

### B47 — iterables and `Map`s in `jstl-foreach` and `jstl-repeat`

**Status:** agreed · **Kind:** task · **Blocks 2.0.0**

`src/directives/Foreach.js`, `doForeach`, and `src/directives/Repeat.js`, `doRepeat`, iterate an
`Array` by index and anything else by `Object.getOwnPropertyNames`. Decided by the maintainer
2026-10-14, as two new functions of 2.0.0:

- **Iterable** — any value with `Symbol.iterator` that is not a `Map` is iterated like an array:
  the item is the value, `status.key` its index; `start`, `step` and `count` apply as to an array.
- **`Map`** — iterated like an object: the item is the value of an entry, `status.key` its key.

`status.data` is the iterable or the `Map` itself. README first: the sections `jstl-foreach` and
`jstl-repeat` describe both, including the status.

To clarify when worked on: `status.count` and `status.last` need the length, so an iterable is read
completely before the first item renders — what an endless iterable does then; whether a string,
iterable by its characters, stays iterated by its properties as today; whether async iterables are
in scope.

### B48 — nested renderings take the `mode` and `target` of the rendering

**Status:** open · **Kind:** defect

`src/Context.js`, `subContext`, hands on `mode` and `target` unless the caller sets them.
`src/Renderer.js`, `renderNode`, renders the children of an element with `mode: "append"` since
2026-10-14; `jstl-foreach` and `jstl-repeat` set `mode: "append"` too, `jstl-include` its mode, the
`<template>` branch of `src/directives/Initial.js` none — every one hands on the `target` of the
rendering. Measured
2026-10-14 in Chromium, Firefox and WebKit, alike in all three:

- **`target`** — `README.md` says `replace` replaces the target with the result, `append` inserts it
  after, `prepend` before. With a container `<span></span><i></i>` and the `<span>` as target,
  `<div><p>x</p></div>` gives `<span></span><div></div><p></p>x<i></i>` with `append` and
  `x<p></p><div></div><span></span><i></i>` with `prepend`: the children of each element are placed
  at the target instead of into the element. With `replace` the text `x` replaces the target and
  the promise rejects with a `TypeError`, since the target is gone when the `<div>` replaces it.
  Only a template whose elements have no children renders as described.
- **`mode`** — the children of an element were rendered with the mode of the rendering, so they
  removed what the element held with `replace`, and went after it with `append`, before it with
  `prepend`. Measured with a custom directive putting a `<b>` into the element before its `<p>`
  child is rendered. Fixed 2026-10-14 in `renderNode`, for directive elements delivering content of
  their own (`DECISIONS.md`, 2026-10-14); the `<template>` branch of `src/directives/Initial.js`
  still hands on the mode, into the empty content of the new `<template>`.

### B49 — unclear types of `template` and `content` in `Renderer` and `Context`

**Status:** open · **Kind:** task

Raised by the maintainer 2026-10-14: `src/Renderer.js` and `src/Context.js` are hard to read, in
their API and their implementation, because the types of `template` and `content` are unclear in
the definitions. To be reviewed. Found in the JSDoc as of 2026-10-14:

- **`template`** — `Context`: the constructor documents `Template|string`, `toTemplate` takes
  `Template|NodeList|Node|string` and accepts an `HTMLCollection` too, the field is typed
  `Iterable<Node>`, the getter `Iterable<Node>|Node`. `Renderer`: the constructor takes a
  `Template`, `render` a `Template|string|URL|Node|NodeList|HTMLCollection`, `Renderer.build` that
  or a `Promise` of it, the static `Renderer.render` a `Template`; `loadTemplateContent` returns a
  `NodeList`. A directive reads `context.template` as one node, `renderContainer` iterates it.
- **`content`** — the constructor of `Context` documents a `NodeList`; the directives set an
  element, a node imported from the template, a `DocumentFragment` (the mode `html` of
  `src/directives/Text.js`) or `null`, `renderContainer` an `Array` of nodes, the special case of
  the tag `jstl` a `NodeList`. `renderNode` hands it on as the `container` of the children, which
  `Context` documents as an `HTMLElement`.
- `renderNode` and `executeDirectives` are `async` and document `@returns {Context}`.

### B51 — `Directive.directives` is not documented

**Status:** open · **Kind:** decision

`src/Directive.js`: the static getter `directives` returns the internal array of the defined
directives, sorted in the order they run; `src/Renderer.js`, `executeDirectives`, reads it for
every node. A `push` or `splice` on it changes the directives of every rendering past the checks of
`Directive.define`. `README.md` does not describe it, decided by the maintainer 2026-10-14:
to be decided whether it is documented or removed.

### B52 — an attribute `jstl<name>` keeps the attribute `<name>` out of the result

**Status:** open · **Kind:** defect

`README.md` says the `attribute` directive takes every attribute whose name does not begin with
`jstl` into the result. `src/directives/Attributes.js`, `Attribute.execute`, notes the name of each
attribute as processed with the prefix `jstl` cut off, so a later attribute of that name is skipped.
Measured 2026-10-14 in Chromium, Firefox and WebKit: `<div jstlmine="other" mine="mine">` renders a
`<div>` without attributes. A name beginning with `jstl-` leaves a name beginning with `-`, which no
attribute of HTML has. The case "takes an attribute into the result beside one of the same name
prefixed with jstl" in `test/tests/directives/Attributes.test.js` is marked `it.fails` for it.
