# Benchmarks

How the rendering performance of `@default-js/defaultjs-template-language` is measured, and the
running record of the results, ordered by package version and development state, so the trend can
be drawn as a graph. Whether a change is worth the performance it costs is the maintainer's
decision; this record is what it is based on.

## How it is measured

`npm run bench` runs `test/bench/*.bench.js` through Vitest's benchmark API, in Chromium, Firefox
and WebKit through Playwright — one engine after the other and, within an engine, one file after
the other, so that no two measurements share the machine. `npm test` never runs them.

Every case renders its template once and checks the result — the number of elements, and what the
directive has to produce — before it is measured; a wrong result fails the case instead of being
timed. Then the template is rendered into a fresh container attached to the document, the
container created before and removed after each iteration, outside the timing: at least 10 timed
iterations after 2 for warmup, and at least 1000 ms. Each case writes its result to
`target/bench/<engine>/<id>.json`.

The value recorded is `latency.mean` in ms, the median of three runs of `npm run bench`.

The HTML parser caps nesting at 512 levels in Chromium and Firefox and at 511 in WebKit, and
attaches deeper elements as siblings (measured 2026-10-11). No template written as HTML is deeper,
and the nested cases stop at a depth of 500.

## Cases

### Cases 1–3: expressions in plain elements

`test/bench/Render.bench.js`. A template of `<div>` elements, each carrying three expressions, one of
them a function returning a `Promise`:

| Case | Written as | Elements |
|---|---|---|
| 1 | 5000 levels, one element each | 5000 — the parser nests 512 of them |
| 2 | 10 levels, three elements per element of the level above | 88572 |
| 3 | one level of 10000 elements | 10000 |

### Directives

`test/bench/Directives.bench.js`. Each directive is measured nested — every level carries the
directive and holds the next one — at a depth of 10, 100 and 500 elements, and side by side, as
10, 100 and 1000 siblings:

| Group | Level | Elements per level | Depth per level |
|---|---|---|---|
| `if` | `<div jstl-if="${flag}">`, true | 1 | 1 |
| `choose` | `<div jstl-choose>` with a false and a true `jstl-when` and a `jstl-otherwise`; the next level inside the true case | 2 | 2 |
| attributes | `<div attr="${value}" ?cond="${flag}" cond="cond">` | 1 | 1 |
| events | `<div @click="${handler}">` — binding the handler, not dispatching | 1 | 1 |
| `include` | `<div>` holding `<div jstl-include>` of `test/templates/bench/include.tpl.html`, one `<span>`, from the template cache; the next level beside it | 3 | 1 |

A depth of 500 is 250 levels of `choose`.

### Loops

`test/bench/Directives.bench.js`. `jstl-foreach` and `jstl-repeat` over 10, 100 and 1000 items,
one element per item.

## Results

Oldest first — by package version, then by development state — so that each column reads as one
series of the graph. A state is listed once under "States"; each case group has a table of its own,
one row per state and engine.

- **Version** — `version` from `package.json`.
- **State** — the commit the measurement ran on; with uncommitted changes, `<commit> + <what is changed>`.
- **Change** — what changed since the state before, above all which function was added — the
  reason a curve bends.
- **Date** — `YYYY-MM-DD`.
- **Environment** — browser and its version, operating system.
- The values — rendering time in ms.

### States

| Version | State | Change | Date |
|---|---|---|---|

### Cases 1–3

| State | Environment | Case 1 | Case 2 | Case 3 |
|---|---|---|---|---|

### `if`

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|

### `choose`

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|

### Attributes

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|

### Events

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|

### `include`

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|

### `foreach`

| State | Environment | Items 10 | Items 100 | Items 1000 |
|---|---|---|---|---|

### `repeat`

| State | Environment | Items 10 | Items 100 | Items 1000 |
|---|---|---|---|---|
