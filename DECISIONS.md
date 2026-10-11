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
