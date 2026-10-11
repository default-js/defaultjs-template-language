# AGENTS.md

## Project

`@default-js/defaultjs-template-language`, alias `jstl`, is a library for rendering dynamic user interfaces and content. It separates logic from design: the design is an HTML template with declarative directives and `${…}` expressions, the logic and the data come from JavaScript.

The expressions are evaluated by `@default-js/defaultjs-expression-language`. What an expression can do, and how that is configured, is defined there, not here.

What sets the library apart:

- **Async/await throughout** — data, templates and expressions may be asynchronous, in every directive and at every level of the API.
- **Event binding** — event handlers are bound in the template, declared beside the markup they belong to.
- **Extensible** — custom directives and elements extend the template language; the built-in ones are built the same way.

It runs without a build step, loaded as a script or imported as an ES module, and alongside other frameworks. `README.md` documents what it offers in detail.

## Working agreement

**Language** — conversation happens in German. Everything written down is English: code, comments, JSDoc, commit messages, documentation, and this file.

**Answers** — short, at the level of a senior engineer. No recap of what was just read, no listing of options not taken, no praise for the question. The diff carries the detail.

**Evidence over agreement** — disagreement needs a reason grounded in code, a measurement, or a specification. Agreement without checking is just as wrong as objection without grounds; manufactured dissent costs more time than assent does. Raise objections *before* the work, not as hindsight. Once a decision is made after an objection was heard, implement it and let it rest.

**Verified, not asserted** — never report something as working without having run it. Never quote versions, options, or API behaviour from memory when a source exists in the repo or in the dependency tree; read it.

**Uncertainty** — three distinct cases:
- *Facts about the code* — never guess, look. Nothing is claimed about a file that has not been read.
- *Intent, where different readings lead to materially different work* — ask, bundled before the work starts, not drop by drop.
- *Routine judgement* (naming, ordering, where a test belongs) — decide, and state the assumption in the handover.

**Test gate** — nothing counts as done before `npm test` has run green. Failing tests are reported with their output rather than talked around; skipped steps are named.

**Tests come first** — a change in behaviour starts with a test, and that test is run and seen
failing before any source file is touched. Failing for the right reason: a defect is reproduced
first, so the test proves the defect exists and later proves it gone. A test written after the
fix passes on the broken version often enough to be worthless, and nobody finds out. Where the
two states genuinely cannot be told apart from the outside, write that limitation into the test
file instead of implying a proof that is not there.

**README first** — `README.md` is the reference for what the package does (`DECISIONS.md`,
2026-10-11), so a change in behaviour starts there. It defines *what* is built; *Tests come first*
governs building it. The plan carries the new wording of
`README.md`, the maintainer approves it with the plan, and then the order is README, test, code — all in
the same diff, so that no commit has a README describing what the code does not do. Where the code
deviates from `README.md`, that is a defect: the code is fixed and the README stays. Behaviour
`README.md` does not describe is not documented along the way; it gets its own `BACKLOG.md` entry.

**Performance is the maintainer's call** — a change that can affect rendering speed is measured
before the handover and gets its row in `BENCHMARKS.md`; whether the cost is acceptable is the
maintainer's decision.

**No unrequested extras** — no drive-by refactorings, no new dependencies, no additional tooling (formatter, linter, CI, types) without asking. The requested scope is the scope.

**Report findings, and write them down** — a defect noticed along the way goes into `BACKLOG.md` in the same turn it is reported: not at handover, and not into the diff. A session can end without a handover, and anything living only in the conversation is lost when it does.

**Changes reach the changelog in the same turn** — anything a consumer of the package
notices (public api, published files, runtime dependencies, supported environment) gets its
entry under `## [Unreleased]` in `CHANGELOG.md` together with the diff, never assembled at
release time from memory. Same reason as the backlog rule: a session ends without warning.
Build and test work is not consumer-visible and stays out.

**No commits, no pushes** — git is available for reading, diffs, and stashes — a stash may set the current state aside, for instance to run a test against the unchanged code — but `git commit` and `git push` are the maintainer's to run. Work happens on the branch that is checked out; no switching or creating branches. When work reaches the main branch, by commit or pull request, the working branch is kept, never deleted.

## Workflow

Sessions end whenever a topic is finished, often without warning. The files under *Records* are the only state that survives; the conversation does not.

0. **Orient** — read `BACKLOG.md` from disk at the start of every session, before anything else; nothing is injected automatically. Read `DECISIONS.md` before proposing anything about architecture or the public API. If `plans/` exists, read the plan it contains before touching whatever it covers. The question *what do we do next?* is answered from `BACKLOG.md` and this file alone: the backlog is the authoritative status, so no test run, no build and no code search is needed to work it out.
1. **Clarify** — check the request, ask the open questions of intent in one batch before starting.
2. **Plan** — for anything touching more than one file or changing dependencies: goal, affected files, risk, intended verification, and for a change in behaviour the new wording of `README.md`. Wait for approval. An approved plan that is not implemented straight away becomes a `BACKLOG.md` entry carrying the agreed scope. Small, locally contained changes go straight in.
3. **Implement** — the agreed scope, nothing beside it.
4. **Verify** — `npm test`; if the build is affected, also `npm run build` plus a diff of `dist/` against the previous state. Show the result instead of summarizing it.
5. **Hand over** — what changed, what was deliberately left alone, what is still open. The maintainer commits.

## Records

Split by shape: independent items go in the backlog, settled questions get written down with their reasoning, and an undertaking whose steps depend on each other gets its own plan. None of these records ships with the package, and no published file refers to one — by name, by date or by section number.

- `BACKLOG.md` — every open task: findings, open decisions, agreed work, ideas. Each entry has an ID, a status and a kind; the file's own header defines the format. Entries are deleted once done; git history is the archive.
- `CHANGELOG.md` — what changed for consumers, per released version, newest first. Keep a Changelog format. Written while the change is made, released by moving `## [Unreleased]` to a version heading.
- `DECISIONS.md` — architecture and API decisions with their reasoning. Anything that constrains later work, or that would otherwise be argued a second time, gets an entry. It answers *why*; `README.md` answers *what*.
- `TESTING.md` — the rules a test case follows: where it belongs, what it may assert, and what each part of the suite is for. Read it before writing or moving a test.
- `ARCHITECTURE.md` — how the package is built: the components, how a template is rendered, the scopes of the expressions.
- `DISTRIBUTION.md` — the entry points, the bundles under `dist/`, and what the package publishes.
- `BENCHMARKS.md` — how performance is measured, and the running record of the results, ordered by package version and development state.
- `plans/` — one file per ordered undertaking, named after it. A plan is a living document: update a stage's status the moment it goes green, along with what was actually installed and any deviation from the intent. When the undertaking is finished the plan is **deleted** — durable outcomes move into `DECISIONS.md` first, git history keeps the rest. A finished plan left lying around gets read as instructions. With nothing running, `plans/` does not exist.

`README.md` is the user documentation and ships with the package. It describes how a consumer uses each feature, and that description is the reference for the behaviour: the code is implemented the way `README.md` describes it.

The repository root holds permanent records only; anything temporary lives in `plans/`.

## Commands

| | |
|---|---|
| `npm test` | Vitest in browser mode, one run in headless Chromium, Firefox and WebKit through Playwright — the test gate |
| `npm run test:live` | Vitest in watch mode, in visible browsers |
| `npm run build:dev` / `build:prod` | webpack bundles into `dist/` |
| `npm run build` | `test`, then both builds |
| `npm run dev` | webpack dev server on port 3000, serving `WebContent/` |

## Conventions

- **Separation of concerns.** A component does its own job and carries no rule on behalf of
  another one: a check lives with the part that needs it. Where two parts need the same
  constant, it is provided centrally rather than duplicated.
- **Published files state facts.** The sources, `README.md` and `CHANGELOG.md` describe the code as
  it is: no `TODO`, nothing about what may change, goes in a later version, or is still to be
  measured or checked. That is a `BACKLOG.md` entry and stands nowhere else. Nor does a published
  file name an internal record or a file the package does not ship, a test file included.
- **A function more than one component uses moves into the shared helper module**, `src/Utils.js`
  — one module collecting all such helpers, not a module per function, and not an import of one
  component from another.
- Indent with **tabs** — spaces only in markdown, where nesting is column-based syntax.
- Files are utf-8 with LF endings, a final newline, and no trailing whitespace.
- ESM imports **always carry the `.js` extension** — the sources run untranspiled in the browser.
- Parameter names take an `a`/`an` prefix: `aTemplate`, `anElement`, `aContext`.
- **Private fields.** A field is a private `#` field whenever its data is not public, may only be
  read from outside — then through a getter — or follows rules when it changes. Beyond that,
  whether a field is private depends on the field and its use.
- **JSDoc on everything.** It is what the type declarations are generated from
  (`DECISIONS.md`, 2026-10-11), so it keeps to what `tsc` reads: function types in arrow syntax,
  `(aTemplate: string) => *`, never the Closure form `function(string): *`, which `tsc` reads as
  `Function`; no `@readonly` on a getter; no `@typedef` on the class it names.
- `.editorconfig` and `.gitattributes` carry the rules above in machine-readable form. They
  advise editors and agents; nothing enforces them, because no formatter and no linter is
  configured. Beyond what they cover, follow the style of the surrounding file.
