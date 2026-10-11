# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Only what reaches a consumer of the package belongs here: the public api, the published
files, runtime dependencies, the supported environment. Build and test work stays out.
This file carries the effect of a change, and its reason where a consumer needs it to decide.

Versions up to 1.7.20 predate this file — the git history is the record for those.

## [Unreleased]

### Changed

- The runtime dependencies are declared with caret ranges instead of `latest`:
  `@default-js/defaultjs-expression-language` `^3.0.2`, `@default-js/defaultjs-common-utils`
  `^1.0.0`, `@default-js/defaultjs-extdom` `^2.0.0`. A new major release of a dependency no longer
  reaches an install unannounced. An install that resolved version 2 of the expression language
  gets version 3.

### Fixed

- `index.js` loads as an ES module without a bundler. `src/Context.js` imported an export
  `src/Renderer.js` does not have, which the browser rejects with a `SyntaxError`.
