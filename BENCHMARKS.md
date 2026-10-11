# Benchmarks

How the rendering performance of `@default-js/defaultjs-template-language` is measured, and the
running record of the results, ordered by package version and development state, so the trend can
be drawn as a graph. Whether a change is worth the performance it costs is the maintainer's
decision; this record is what it is based on.

## What exists

`test/tests/performance/index.js` holds three Jasmine cases. Each builds a template of nested
`<div>` elements carrying three expressions, one of them a function returning a `Promise`, renders
it once and logs the time, taken with `Date.now()`, to the console:

| Case | Depth | Elements per level |
|---|---|---|
| 1 | 5000 | 1 |
| 2 | 10 | 3 |
| 3 | 1 | 10000 |

Only case 1 asserts, on the number of rendered elements. `test/tests/index.js` does not import the
file, so `npm test` does not run it, and no npm script does.

`test/sites/performance/` and `test/templates/performance/` hold templates no test reads.

## Results

One row per measurement, oldest first — by package version, then by development state — so that
each case column reads as one series of the graph.

- **Version** — `version` from `package.json`.
- **State** — the commit the measurement ran on; with uncommitted changes, `<commit> + <what is changed>`.
- **Change** — what changed since the row before, above all which function was added — the
  reason a curve bends.
- **Date** — `YYYY-MM-DD`.
- **Environment** — browser and its version, operating system.
- **Case 1–3** — rendering time in ms, the cases as listed above.

| Version | State | Change | Date | Environment | Case 1 (ms) | Case 2 (ms) | Case 3 (ms) |
|---|---|---|---|---|---|---|---|
