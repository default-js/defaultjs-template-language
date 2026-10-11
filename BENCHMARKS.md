# Benchmarks

How the rendering performance of `@default-js/defaultjs-template-language` is measured, and the
running record of the results, ordered by package version and development state, so the trend can
be drawn as a graph.

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

No measurement recorded yet. The format of the record is an open decision in `BACKLOG.md`.
