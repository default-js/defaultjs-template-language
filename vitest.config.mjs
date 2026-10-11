import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

const FIXTURES = { "/data/": resolve("test/data"), "/templates/": resolve("test/templates") };
const CONTENT_TYPES = { ".json": "application/json", ".html": "text/html" };

/**
 * Serves the fixtures the tests fetch, test/data as /data/ and test/templates as /templates/, as
 * they are on disk: through vite an html file would get its client script injected.
 *
 * @returns {import("vite").Plugin}
 */
const fixtures = () => ({
	name: "jstl-test-fixtures",
	configureServer: (aServer) => {
		aServer.middlewares.use(async (aRequest, aResponse, next) => {
			const path = decodeURIComponent(new URL(aRequest.url, "http://localhost").pathname);
			const prefix = Object.keys(FIXTURES).find((aPrefix) => path.startsWith(aPrefix));
			if (!prefix) return next();
			const file = resolve(FIXTURES[prefix], path.slice(prefix.length));
			if (!file.startsWith(FIXTURES[prefix] + sep)) return next();
			try {
				const content = await readFile(file);
				aResponse.setHeader("Content-Type", CONTENT_TYPES[extname(file)] || "application/octet-stream");
				aResponse.end(content);
			} catch (e) {
				next();
			}
		});
	}
});

/**
 * Vitest runs the suite in real browsers, one instance per engine, because the package renders
 * into the DOM of the browser it runs in.
 */
export default defineConfig({
	plugins: [fixtures()],
	// the @default-js packages are served as they are, not pre-bundled: src and test/setup.js
	// import them through different paths and have to share one instance of each module
	optimizeDeps: {
		exclude: ["@default-js/defaultjs-common-utils", "@default-js/defaultjs-expression-language", "@default-js/defaultjs-extdom"]
	},
	test: {
		// not globals: true - expressions in a template are resolved against global names as
		// well, and vitest's describe, it, test and expect would be found there
		globals: false,
		// test/index.js imports every test file; the files are not discovered
		include: ["test/index.js"],
		browser: {
			enabled: true,
			provider: playwright(),
			instances: [{ browser: "chromium" }, { browser: "firefox" }, { browser: "webkit" }],
			headless: true,
			// do not drop png files into the test tree on failure
			screenshotFailures: false
		}
	}
});
