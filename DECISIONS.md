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
`test/setup.js` import them through different paths and have to share one instance of each module.
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
