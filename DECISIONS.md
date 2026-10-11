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

## 2026-10-11 — What is the reference for the package's behaviour?

**Decision:** `README.md`. It describes how a consumer uses each feature, and the code is
implemented the way it describes. There is no separate specification. Frank's decision.

**Reasoning:** The README is where a consumer learns how a feature is used; that description is
what the implementation has to meet.

**Alternatives:** An internal `SPECIFICATION.md` beside the README, as
`@default-js/defaultjs-expression-language` keeps one.

**Consequences:** Behaviour the README does not describe has no reference to be checked against.
