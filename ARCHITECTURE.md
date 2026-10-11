# Architecture

How `@default-js/defaultjs-template-language` is built. What it does is in `README.md`, why it is
built this way in `DECISIONS.md`, how it is packaged in `DISTRIBUTION.md`.

## Components

- **`index.js`** — the public API: `Template`, `Renderer`, `toAsyncTemplateLoader`.
- **`src/Template.js`** — `Template` wraps an `HTMLTemplateElement`. `Template.load` takes a
  `Template`, an HTML string, a `URL` (fetched), or a `Node`, `NodeList`, `HTMLCollection` or
  `HTMLTemplateElement`, and caches the result under a hash of the alias, the source, the URL or
  the element's selector. `Template.loadNodeTemplate` finds the template of a node: a child
  `<template>`, else the `template` attribute, read as a selector or a URL.
  `toAsyncTemplateLoader` loads a template lazily, once.
- **`src/Renderer.js`** — `Renderer` renders a template into a container, in the mode `replace`
  (the default), `append` or `prepend`, optionally relative to a `target`. `Renderer.build` and
  the static `Renderer.render` are shortcuts for one renderer.
- **`src/Context.js`** — the state of rendering one node: its template, the rendered `content`, the
  container, the resolver, and two flags — `stop` ends the directives of this node, `ignore` skips
  its children and its callbacks. Contexts form a tree; `ready()` resolves once a context and all
  of its sub-contexts are done, `finished(callback)` registers a callback at the root.
- **`src/Directive.js`** — the base class of a directive and its registry. A directive has a
  `name`, a `phase` and a `rank` between `Directive.MIN_RANK` (0) and `Directive.MAX_RANK`
  (100000); `Directive.define({ directive })` registers an instance and keeps the registry sorted
  by phase, then rank.
- **`src/directives/`** — the built-in directives, one module each; each registers itself on
  import, and `src/directives/index.js` imports them all.
- **`src/Element.js`** — the base class of a custom element that renders itself instead of running
  the directives. **`src/elements/`** holds the built-in one, `jstl-replace`.
- **`src/Utils.js`** — helpers shared by more than one component.

Importing `src/Renderer.js` — and with it either entry point — imports
`@default-js/defaultjs-extdom` and registers every built-in directive and element.

## Rendering

For every node of a template, the renderer creates a `Context` and

1. lets the node execute itself if it is an instance of the class in `src/Element.js`; otherwise
   runs every registered directive in order, until one sets `stop`;
2. renders the node's children into its `content` the same way, unless `ignore` is set;
3. replaces a `<jstl>` element by its children.

The rendered nodes are then added to the container according to the mode.

## Directives

The phases, in order: `init`, `data`, `template`, `content`, `finish`.

| Phase | Rank | Name | Module |
|---|---|---|---|
| `init` | 0 | `initial` | `Initial.js` |
| `init` | 1000 | `if` | `If.js` |
| `data` | 1000 | `data` | `Data.js` |
| `template` | 0 | `include` | `Include.js` |
| `template` | 1 | `choose` | `Choose.js` |
| `template` | 2 | `foreach` | `Foreach.js` |
| `template` | 3 | `jstl-repeat` | `Repeat.js` |
| `content` | 0 | `attribute` | `Attributes.js` |
| `content` | 1 | `text` | `Text.js` |
| `content` | 1 | `attach-element` | `AttachElement.js` |
| `finish` | 100000 | `on-finished` | `OnFinished.js` |

Directives of equal phase and rank run in the order they were registered.

## Scopes

Expressions are resolved by an `ExpressionResolver` of `@default-js/defaultjs-expression-language`.
The resolvers form a chain, each named after its scope (`SCOPES` in `src/Renderer.js`):

| Scope | Created | Context |
|---|---|---|
| `application` | once, shared by every renderer | none |
| `data` | per `Renderer` | the `data` passed to the constructor |
| `render` | per call of `render` | the `data` passed to `render` |
| `node` | per template node | none |
| `container` | per node with children, for its children | none |

Directives add resolvers of their own to the chain: `jstl-data` (`Data.js`, `OnFinished.js`) and
`jstl-foreach` (`Foreach.js`).
