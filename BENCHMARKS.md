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
| 1.7.20 | `011a2fa` | baseline: the sources of 1.7.20 with the import in `src/Context.js` fixed; expression language 3.0.2 | 2026-10-11 |
| 2.0.0 | `5df2d54` + signature of `execute` | the development of 2.0.0 since the baseline: the commits up to `5df2d54`; uncommitted, the signature of `DirectiveElement.execute` | 2026-10-14 |
| 2.0.0 | `5df2d54` + custom tags executed | `renderNode` looks every element of a template up in the custom element registry and executes a custom tag; the children of an element are rendered with the mode `append` | 2026-10-14 |

### Cases 1–3

| State | Environment | Case 1 | Case 2 | Case 3 |
|---|---|---|---|---|
| `011a2fa` | Chromium 156.0.8078.4, Windows 11 | 1200 | 2399 | 278 |
| `011a2fa` | Firefox 157.0, Windows 11 | 1911 | 13973 | 1421 |
| `011a2fa` | WebKit 27.2, Windows 11 | 1253 | 2854 | 293 |
| `5df2d54` + signature of `execute` | Chromium 156.0.8078.4, Windows 11 | 1124 | 2150 | 245 |
| `5df2d54` + signature of `execute` | Firefox 157.0, Windows 11 | 1765 | 12568 | 1261 |
| `5df2d54` + signature of `execute` | WebKit 27.2, Windows 11 | 1219 | 2536 | 281 |
| `5df2d54` + custom tags executed | Chromium 156.0.8078.4, Windows 11 | 1124 | 2198 | 247 |
| `5df2d54` + custom tags executed | Firefox 157.0, Windows 11 | 1756 | 12760 | 1284 |
| `5df2d54` + custom tags executed | WebKit 27.2, Windows 11 | 1163 | 2452 | 250 |

### `if`

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| `011a2fa` | Chromium 156.0.8078.4, Windows 11 | 0.241 | 3.52 | 55.8 | 0.206 | 2.08 | 19.9 |
| `011a2fa` | Firefox 157.0, Windows 11 | 1.45 | 15.9 | 139 | 1.19 | 13.6 | 137 |
| `011a2fa` | WebKit 27.2, Windows 11 | 0.236 | 3.07 | 39.6 | 0.237 | 2.16 | 21.9 |
| `5df2d54` + signature of `execute` | Chromium 156.0.8078.4, Windows 11 | 0.199 | 2.94 | 49.7 | 0.185 | 1.84 | 18.2 |
| `5df2d54` + signature of `execute` | Firefox 157.0, Windows 11 | 1.30 | 14.6 | 130 | 1.08 | 12.2 | 122 |
| `5df2d54` + signature of `execute` | WebKit 27.2, Windows 11 | 0.222 | 2.81 | 37.7 | 0.204 | 2.00 | 20.6 |
| `5df2d54` + custom tags executed | Chromium 156.0.8078.4, Windows 11 | 0.205 | 3.11 | 50.7 | 0.190 | 1.81 | 18.6 |
| `5df2d54` + custom tags executed | Firefox 157.0, Windows 11 | 1.34 | 14.4 | 128 | 1.08 | 12.7 | 126 |
| `5df2d54` + custom tags executed | WebKit 27.2, Windows 11 | 0.206 | 2.70 | 36.1 | 0.201 | 2.01 | 19.7 |

### `choose`

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| `011a2fa` | Chromium 156.0.8078.4, Windows 11 | 0.222 | 4.31 | 124 | 0.399 | 3.84 | 39.3 |
| `011a2fa` | Firefox 157.0, Windows 11 | 1.22 | 15.3 | 236 | 2.35 | 23.3 | 231 |
| `011a2fa` | WebKit 27.2, Windows 11 | 0.258 | 4.66 | 93.5 | 0.574 | 4.68 | 47.7 |
| `5df2d54` + signature of `execute` | Chromium 156.0.8078.4, Windows 11 | 0.192 | 3.88 | 116 | 0.351 | 3.55 | 35.5 |
| `5df2d54` + signature of `execute` | Firefox 157.0, Windows 11 | 1.09 | 14.1 | 218 | 2.09 | 20.9 | 210 |
| `5df2d54` + signature of `execute` | WebKit 27.2, Windows 11 | 0.242 | 4.30 | 91.3 | 0.468 | 4.27 | 42.3 |
| `5df2d54` + custom tags executed | Chromium 156.0.8078.4, Windows 11 | 0.191 | 3.84 | 115 | 0.355 | 3.48 | 34.9 |
| `5df2d54` + custom tags executed | Firefox 157.0, Windows 11 | 1.14 | 14.3 | 222 | 2.17 | 20.9 | 213 |
| `5df2d54` + custom tags executed | WebKit 27.2, Windows 11 | 0.238 | 4.37 | 85.4 | 0.473 | 4.17 | 40.3 |

### Attributes

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| `011a2fa` | Chromium 156.0.8078.4, Windows 11 | 0.153 | 2.50 | 44.1 | 0.118 | 1.14 | 11.4 |
| `011a2fa` | Firefox 157.0, Windows 11 | 1.01 | 11.4 | 117 | 0.712 | 6.64 | 66.9 |
| `011a2fa` | WebKit 27.2, Windows 11 | 0.188 | 2.31 | 34.2 | 0.149 | 1.40 | 13.5 |
| `5df2d54` + signature of `execute` | Chromium 156.0.8078.4, Windows 11 | 0.138 | 2.25 | 41.2 | 0.109 | 1.05 | 10.5 |
| `5df2d54` + signature of `execute` | Firefox 157.0, Windows 11 | 0.891 | 10.3 | 108 | 0.639 | 6.07 | 59.7 |
| `5df2d54` + signature of `execute` | WebKit 27.2, Windows 11 | 0.159 | 2.17 | 32.2 | 0.132 | 1.28 | 12.5 |
| `5df2d54` + custom tags executed | Chromium 156.0.8078.4, Windows 11 | 0.137 | 2.26 | 40.8 | 0.112 | 1.07 | 10.6 |
| `5df2d54` + custom tags executed | Firefox 157.0, Windows 11 | 0.914 | 10.6 | 110 | 0.654 | 6.18 | 61.6 |
| `5df2d54` + custom tags executed | WebKit 27.2, Windows 11 | 0.152 | 2.11 | 31.7 | 0.132 | 1.25 | 12.7 |

### Events

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| `011a2fa` | Chromium 156.0.8078.4, Windows 11 | 0.131 | 1.82 | 26.7 | 0.106 | 1.05 | 9.91 |
| `011a2fa` | Firefox 157.0, Windows 11 | 0.903 | 9.71 | 81.2 | 0.676 | 6.64 | 62.6 |
| `011a2fa` | WebKit 27.2, Windows 11 | 0.142 | 1.83 | 22.0 | 0.123 | 1.14 | 11.3 |
| `5df2d54` + signature of `execute` | Chromium 156.0.8078.4, Windows 11 | 0.118 | 1.65 | 23.8 | 0.0932 | 0.883 | 8.77 |
| `5df2d54` + signature of `execute` | Firefox 157.0, Windows 11 | 0.803 | 8.79 | 76.1 | 0.608 | 5.95 | 56.9 |
| `5df2d54` + signature of `execute` | WebKit 27.2, Windows 11 | 0.132 | 1.68 | 21.1 | 0.110 | 1.02 | 10.5 |
| `5df2d54` + custom tags executed | Chromium 156.0.8078.4, Windows 11 | 0.120 | 1.65 | 23.8 | 0.0954 | 0.915 | 8.96 |
| `5df2d54` + custom tags executed | Firefox 157.0, Windows 11 | 0.806 | 9.02 | 77.8 | 0.663 | 6.31 | 58.6 |
| `5df2d54` + custom tags executed | WebKit 27.2, Windows 11 | 0.128 | 1.65 | 20.6 | 0.109 | 1.03 | 10.2 |

### `include`

| State | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| `011a2fa` | Chromium 156.0.8078.4, Windows 11 | 0.402 | 4.95 | 44.7 | 0.415 | 3.99 | 40.4 |
| `011a2fa` | Firefox 157.0, Windows 11 | 3.12 | 32.5 | 207 | 3.26 | 32.9 | 299 |
| `011a2fa` | WebKit 27.2, Windows 11 | 0.451 | 5.36 | 48.1 | 0.452 | 4.27 | 43.8 |
| `5df2d54` + signature of `execute` | Chromium 156.0.8078.4, Windows 11 | 0.360 | 4.33 | 41.3 | 0.364 | 3.59 | 36.3 |
| `5df2d54` + signature of `execute` | Firefox 157.0, Windows 11 | 2.77 | 28.4 | 184 | 2.97 | 28.9 | 271 |
| `5df2d54` + signature of `execute` | WebKit 27.2, Windows 11 | 0.414 | 4.58 | 44.0 | 0.406 | 3.86 | 39.2 |
| `5df2d54` + custom tags executed | Chromium 156.0.8078.4, Windows 11 | 0.364 | 4.28 | 41.6 | 0.361 | 3.57 | 36.3 |
| `5df2d54` + custom tags executed | Firefox 157.0, Windows 11 | 2.84 | 29.7 | 191 | 2.98 | 28.9 | 275 |
| `5df2d54` + custom tags executed | WebKit 27.2, Windows 11 | 0.401 | 4.49 | 42.0 | 0.384 | 3.82 | 37.8 |

### `foreach`

| State | Environment | Items 10 | Items 100 | Items 1000 |
|---|---|---|---|---|
| `011a2fa` | Chromium 156.0.8078.4, Windows 11 | 0.222 | 2.06 | 20.6 |
| `011a2fa` | Firefox 157.0, Windows 11 | 1.66 | 16.5 | 151 |
| `011a2fa` | WebKit 27.2, Windows 11 | 0.228 | 1.94 | 18.7 |
| `5df2d54` + signature of `execute` | Chromium 156.0.8078.4, Windows 11 | 0.202 | 1.82 | 18.4 |
| `5df2d54` + signature of `execute` | Firefox 157.0, Windows 11 | 1.52 | 13.9 | 141 |
| `5df2d54` + signature of `execute` | WebKit 27.2, Windows 11 | 0.196 | 1.71 | 16.9 |
| `5df2d54` + custom tags executed | Chromium 156.0.8078.4, Windows 11 | 0.208 | 1.92 | 19.1 |
| `5df2d54` + custom tags executed | Firefox 157.0, Windows 11 | 1.51 | 14.0 | 137 |
| `5df2d54` + custom tags executed | WebKit 27.2, Windows 11 | 0.191 | 1.68 | 16.8 |

### `repeat`

| State | Environment | Items 10 | Items 100 | Items 1000 |
|---|---|---|---|---|
| `011a2fa` | Chromium 156.0.8078.4, Windows 11 | 0.217 | 1.95 | 19.3 |
| `011a2fa` | Firefox 157.0, Windows 11 | 1.54 | 14.2 | 138 |
| `011a2fa` | WebKit 27.2, Windows 11 | 0.219 | 1.93 | 18.2 |
| `5df2d54` + signature of `execute` | Chromium 156.0.8078.4, Windows 11 | 0.191 | 1.69 | 16.9 |
| `5df2d54` + signature of `execute` | Firefox 157.0, Windows 11 | 1.41 | 12.5 | 124 |
| `5df2d54` + signature of `execute` | WebKit 27.2, Windows 11 | 0.194 | 1.68 | 16.1 |
| `5df2d54` + custom tags executed | Chromium 156.0.8078.4, Windows 11 | 0.196 | 1.76 | 17.8 |
| `5df2d54` + custom tags executed | Firefox 157.0, Windows 11 | 1.43 | 12.7 | 123 |
| `5df2d54` + custom tags executed | WebKit 27.2, Windows 11 | 0.194 | 1.64 | 16.1 |

## Expression language and executer compared

Measured 2026-10-11 on `011a2fa` by the method above, in a copy outside the repository in which only
the expression language and its executer differ — the executer set through
`ExpressionResolver.defaultExecuter` in a setup file. A is what the sources rendered with under
version 2 of the expression language, D is the baseline under "Results".

| Variant | Expression language | Executer |
|---|---|---|
| A | 2.0.4 | `with-scoped-executer`, the default of 2.x |
| B | 2.0.4 | `context-deconstruction-executer` |
| C | 3.0.2 | `with-scoped-executer` |
| D | 3.0.2 | `context-deconstruction-executer`, the default of 3.x |

Deviations from the method: with 2.0.4, case 3 never finished in Firefox when it ran after case 2
in the same page, so A and B ran it in Firefox in an invocation of its own. In Firefox, C, events
at a depth of 500, two of three runs caught a single pause of 2.6 s (`rme` 189 %): the median of
302 ms stands for a typical iteration of 49 ms (`p50`).

### Ratios

Geometric mean of the ratio of two variants over the cases; deep takes the depths 100 and 500 and
case 1, all takes all 39 cases. Above 1, the first variant is slower.

| Ratio | Compares | Environment | Deep | All |
|---|---|---|---|---|
| B / A | executer, under 2.0.4 | Chromium 156.0.8078.4, Windows 11 | 1.68 | 1.30 |
| B / A | executer, under 2.0.4 | Firefox 157.0, Windows 11 | 1.65 | 1.20 |
| B / A | executer, under 2.0.4 | WebKit 27.2, Windows 11 | 1.92 | 1.41 |
| D / C | executer, under 3.0.2 | Chromium 156.0.8078.4, Windows 11 | 2.15 | 1.63 |
| D / C | executer, under 3.0.2 | Firefox 157.0, Windows 11 | 1.25 | 1.23 |
| D / C | executer, under 3.0.2 | WebKit 27.2, Windows 11 | 1.93 | 1.65 |
| C / A | version, with `with-scoped-executer` | Chromium 156.0.8078.4, Windows 11 | 0.76 | 0.75 |
| C / A | version, with `with-scoped-executer` | Firefox 157.0, Windows 11 | 0.90 | 0.81 |
| C / A | version, with `with-scoped-executer` | WebKit 27.2, Windows 11 | 0.74 | 0.75 |
| D / B | version, with `context-deconstruction-executer` | Chromium 156.0.8078.4, Windows 11 | 0.97 | 0.94 |
| D / B | version, with `context-deconstruction-executer` | Firefox 157.0, Windows 11 | 0.68 | 0.83 |
| D / B | version, with `context-deconstruction-executer` | WebKit 27.2, Windows 11 | 0.74 | 0.88 |
| D / A | default of 3.x against default of 2.x | Chromium 156.0.8078.4, Windows 11 | 1.63 | 1.23 |
| D / A | default of 3.x against default of 2.x | Firefox 157.0, Windows 11 | 1.13 | 1.00 |
| D / A | default of 3.x against default of 2.x | WebKit 27.2, Windows 11 | 1.42 | 1.24 |

### Cases 1–3, by variant

| Variant | Environment | Case 1 | Case 2 | Case 3 |
|---|---|---|---|---|
| A | Chromium 156.0.8078.4, Windows 11 | 464 | 2197 | 250 |
| A | Firefox 157.0, Windows 11 | 1606 | 16892 | 1821 |
| A | WebKit 27.2, Windows 11 | 650 | 2403 | 253 |
| B | Chromium 156.0.8078.4, Windows 11 | 1280 | 2874 | 291 |
| B | Firefox 157.0, Windows 11 | 5169 | 20987 | 1921 |
| B | WebKit 27.2, Windows 11 | 1878 | 3429 | 325 |
| C | Chromium 156.0.8078.4, Windows 11 | 321 | 1702 | 192 |
| C | Firefox 157.0, Windows 11 | 948 | 11127 | 1149 |
| C | WebKit 27.2, Windows 11 | 363 | 1584 | 168 |
| D | Chromium 156.0.8078.4, Windows 11 | 1200 | 2399 | 278 |
| D | Firefox 157.0, Windows 11 | 1911 | 13973 | 1421 |
| D | WebKit 27.2, Windows 11 | 1253 | 2854 | 293 |

### `if`, by variant

| Variant | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| A | Chromium 156.0.8078.4, Windows 11 | 0.203 | 2.45 | 22.7 | 0.191 | 1.95 | 18.8 |
| A | Firefox 157.0, Windows 11 | 1.52 | 16.4 | 105 | 1.33 | 15.8 | 147 |
| A | WebKit 27.2, Windows 11 | 0.197 | 2.40 | 23.4 | 0.198 | 1.88 | 19.2 |
| B | Chromium 156.0.8078.4, Windows 11 | 0.255 | 3.73 | 49.9 | 0.230 | 2.34 | 22.3 |
| B | Firefox 157.0, Windows 11 | 1.68 | 22.3 | 223 | 1.43 | 15.8 | 158 |
| B | WebKit 27.2, Windows 11 | 0.263 | 4.05 | 63.7 | 0.254 | 2.43 | 24.0 |
| C | Chromium 156.0.8078.4, Windows 11 | 0.142 | 1.79 | 16.9 | 0.141 | 1.37 | 13.7 |
| C | Firefox 157.0, Windows 11 | 1.20 | 11.9 | 78.5 | 0.978 | 11.1 | 112 |
| C | WebKit 27.2, Windows 11 | 0.146 | 1.69 | 16.1 | 0.148 | 1.39 | 14.1 |
| D | Chromium 156.0.8078.4, Windows 11 | 0.241 | 3.52 | 55.8 | 0.206 | 2.08 | 19.9 |
| D | Firefox 157.0, Windows 11 | 1.45 | 15.9 | 139 | 1.19 | 13.6 | 137 |
| D | WebKit 27.2, Windows 11 | 0.236 | 3.07 | 39.6 | 0.237 | 2.16 | 21.9 |

### `choose`, by variant

| Variant | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| A | Chromium 156.0.8078.4, Windows 11 | 0.195 | 3.40 | 95.2 | 0.373 | 3.60 | 35.6 |
| A | Firefox 157.0, Windows 11 | 1.27 | 16.1 | 193 | 2.51 | 24.6 | 247 |
| A | WebKit 27.2, Windows 11 | 0.215 | 3.78 | 73.9 | 0.440 | 3.98 | 38.7 |
| B | Chromium 156.0.8078.4, Windows 11 | 0.226 | 4.54 | 119 | 0.421 | 4.12 | 41.4 |
| B | Firefox 157.0, Windows 11 | 1.38 | 19.9 | 299 | 2.65 | 26.1 | 268 |
| B | WebKit 27.2, Windows 11 | 0.275 | 5.51 | 107 | 0.545 | 4.94 | 49.7 |
| C | Chromium 156.0.8078.4, Windows 11 | 0.148 | 2.83 | 89.1 | 0.276 | 2.83 | 26.8 |
| C | Firefox 157.0, Windows 11 | 0.990 | 12.1 | 177 | 1.94 | 19.0 | 194 |
| C | WebKit 27.2, Windows 11 | 0.166 | 3.21 | 66.9 | 0.351 | 2.98 | 31.0 |
| D | Chromium 156.0.8078.4, Windows 11 | 0.222 | 4.31 | 124 | 0.399 | 3.84 | 39.3 |
| D | Firefox 157.0, Windows 11 | 1.22 | 15.3 | 236 | 2.35 | 23.3 | 231 |
| D | WebKit 27.2, Windows 11 | 0.258 | 4.66 | 93.5 | 0.574 | 4.68 | 47.7 |

### Attributes, by variant

| Variant | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| A | Chromium 156.0.8078.4, Windows 11 | 0.133 | 1.82 | 18.2 | 0.102 | 0.972 | 9.58 |
| A | Firefox 157.0, Windows 11 | 1.12 | 12.0 | 78.4 | 0.842 | 8.20 | 77.5 |
| A | WebKit 27.2, Windows 11 | 0.145 | 1.75 | 19.2 | 0.123 | 1.17 | 11.5 |
| B | Chromium 156.0.8078.4, Windows 11 | 0.175 | 3.13 | 43.6 | 0.137 | 1.33 | 13.3 |
| B | Firefox 157.0, Windows 11 | 1.23 | 18.0 | 194 | 0.893 | 8.69 | 88.2 |
| B | WebKit 27.2, Windows 11 | 0.204 | 3.50 | 52.1 | 0.165 | 1.59 | 16.0 |
| C | Chromium 156.0.8078.4, Windows 11 | 0.091 | 1.15 | 13.0 | 0.068 | 0.635 | 6.36 |
| C | Firefox 157.0, Windows 11 | 0.791 | 8.35 | 58.2 | 0.560 | 5.24 | 52.7 |
| C | WebKit 27.2, Windows 11 | 0.105 | 1.20 | 12.9 | 0.082 | 0.789 | 7.64 |
| D | Chromium 156.0.8078.4, Windows 11 | 0.153 | 2.50 | 44.1 | 0.118 | 1.14 | 11.4 |
| D | Firefox 157.0, Windows 11 | 1.01 | 11.4 | 117 | 0.712 | 6.64 | 66.9 |
| D | WebKit 27.2, Windows 11 | 0.188 | 2.31 | 34.2 | 0.149 | 1.40 | 13.5 |

### Events, by variant

| Variant | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| A | Chromium 156.0.8078.4, Windows 11 | 0.125 | 1.43 | 12.6 | 0.090 | 0.861 | 8.56 |
| A | Firefox 157.0, Windows 11 | 0.926 | 9.89 | 64.1 | 0.741 | 6.90 | 71.6 |
| A | WebKit 27.2, Windows 11 | 0.127 | 1.47 | 14.0 | 0.102 | 0.974 | 9.80 |
| B | Chromium 156.0.8078.4, Windows 11 | 0.142 | 2.04 | 25.1 | 0.107 | 1.05 | 10.3 |
| B | Firefox 157.0, Windows 11 | 1.02 | 12.6 | 125 | 0.807 | 7.28 | 71.6 |
| B | WebKit 27.2, Windows 11 | 0.158 | 2.44 | 34.6 | 0.130 | 1.21 | 12.0 |
| C | Chromium 156.0.8078.4, Windows 11 | 0.093 | 1.09 | 9.65 | 0.070 | 0.659 | 6.50 |
| C | Firefox 157.0, Windows 11 | 0.752 | 7.94 | 302 | 0.596 | 5.16 | 52.3 |
| C | WebKit 27.2, Windows 11 | 0.097 | 1.12 | 10.3 | 0.077 | 0.729 | 7.26 |
| D | Chromium 156.0.8078.4, Windows 11 | 0.131 | 1.82 | 26.7 | 0.106 | 1.05 | 9.91 |
| D | Firefox 157.0, Windows 11 | 0.903 | 9.71 | 81.2 | 0.676 | 6.64 | 62.6 |
| D | WebKit 27.2, Windows 11 | 0.142 | 1.83 | 22.0 | 0.123 | 1.14 | 11.3 |

### `include`, by variant

| Variant | Environment | Depth 10 | Depth 100 | Depth 500 | Siblings 10 | Siblings 100 | Siblings 1000 |
|---|---|---|---|---|---|---|---|
| A | Chromium 156.0.8078.4, Windows 11 | 0.400 | 4.37 | 31.9 | 0.407 | 3.91 | 39.6 |
| A | Firefox 157.0, Windows 11 | 2.99 | 31.0 | 182 | 2.57 | 30.0 | 295 |
| A | WebKit 27.2, Windows 11 | 0.397 | 4.37 | 37.0 | 0.414 | 3.82 | 39.4 |
| B | Chromium 156.0.8078.4, Windows 11 | 0.422 | 4.96 | 45.5 | 0.417 | 4.10 | 41.0 |
| B | Firefox 157.0, Windows 11 | 3.08 | 34.1 | 244 | 2.63 | 30.8 | 310 |
| B | WebKit 27.2, Windows 11 | 0.462 | 5.70 | 59.6 | 0.430 | 4.21 | 45.1 |
| C | Chromium 156.0.8078.4, Windows 11 | 0.324 | 3.49 | 25.0 | 0.318 | 3.18 | 31.4 |
| C | Firefox 157.0, Windows 11 | 2.74 | 26.7 | 155 | 2.37 | 26.9 | 261 |
| C | WebKit 27.2, Windows 11 | 0.336 | 3.72 | 28.5 | 0.330 | 3.18 | 33.4 |
| D | Chromium 156.0.8078.4, Windows 11 | 0.402 | 4.95 | 44.7 | 0.415 | 3.99 | 40.4 |
| D | Firefox 157.0, Windows 11 | 3.12 | 32.5 | 207 | 3.26 | 32.9 | 299 |
| D | WebKit 27.2, Windows 11 | 0.451 | 5.36 | 48.1 | 0.452 | 4.27 | 43.8 |

### `foreach`, by variant

| Variant | Environment | Items 10 | Items 100 | Items 1000 |
|---|---|---|---|---|
| A | Chromium 156.0.8078.4, Windows 11 | 0.209 | 1.99 | 19.8 |
| A | Firefox 157.0, Windows 11 | 1.68 | 15.6 | 149 |
| A | WebKit 27.2, Windows 11 | 0.190 | 1.70 | 16.7 |
| B | Chromium 156.0.8078.4, Windows 11 | 0.235 | 2.25 | 21.6 |
| B | Firefox 157.0, Windows 11 | 1.72 | 15.6 | 157 |
| B | WebKit 27.2, Windows 11 | 0.235 | 1.96 | 18.9 |
| C | Chromium 156.0.8078.4, Windows 11 | 0.165 | 1.54 | 15.5 |
| C | Firefox 157.0, Windows 11 | 1.39 | 12.9 | 126 |
| C | WebKit 27.2, Windows 11 | 0.149 | 1.35 | 13.1 |
| D | Chromium 156.0.8078.4, Windows 11 | 0.222 | 2.06 | 20.6 |
| D | Firefox 157.0, Windows 11 | 1.66 | 16.5 | 151 |
| D | WebKit 27.2, Windows 11 | 0.228 | 1.94 | 18.7 |

### `repeat`, by variant

| Variant | Environment | Items 10 | Items 100 | Items 1000 |
|---|---|---|---|---|
| A | Chromium 156.0.8078.4, Windows 11 | 0.197 | 1.76 | 17.6 |
| A | Firefox 157.0, Windows 11 | 1.55 | 13.9 | 136 |
| A | WebKit 27.2, Windows 11 | 0.186 | 1.61 | 15.9 |
| B | Chromium 156.0.8078.4, Windows 11 | 0.222 | 1.98 | 20.1 |
| B | Firefox 157.0, Windows 11 | 1.65 | 14.2 | 139 |
| B | WebKit 27.2, Windows 11 | 0.231 | 1.92 | 18.4 |
| C | Chromium 156.0.8078.4, Windows 11 | 0.159 | 1.41 | 14.0 |
| C | Firefox 157.0, Windows 11 | 1.30 | 11.6 | 114 |
| C | WebKit 27.2, Windows 11 | 0.148 | 1.28 | 12.5 |
| D | Chromium 156.0.8078.4, Windows 11 | 0.217 | 1.95 | 19.3 |
| D | Firefox 157.0, Windows 11 | 1.54 | 14.2 | 138 |
| D | WebKit 27.2, Windows 11 | 0.219 | 1.93 | 18.2 |
