import { resolve } from "node:path";
import ReplaceInFileWebpackPlugin from "replace-in-file-webpack-plugin";
import project from "./package.json" with { type: "json" };
import entries from "./entries.config.json" with { type: "json" };

/**
 * The dev server of `npm run dev`, serving WebContent/ and the bundles.
 *
 * @type {import("webpack-dev-server").Configuration}
 */
const DEV_SERVER = {
	open: true,
	port: 3000,
	allowedHosts: "all",
	client: {
		overlay: true,
		progress: true,
		reconnect: true,
	},
	devMiddleware: {
		index: true,
		writeToDisk: false,
	},
	static: ["./WebContent"],
	watchFiles: { paths: ["src/**/*", "./WebContent/**/*"] }
};

/**
 * Bundles the entries of entries.config.json into dist/, minified in production mode, one
 * configuration per entry: the `module` bundle is an ES module exporting what its entry exports,
 * every other bundle a script. A single configuration cannot build both, since the ES module
 * output drops the function a script's bundle is wrapped in.
 *
 * @param {object} anEnv
 * @param {{ mode?: string, target?: string }} anArgv
 * @returns {import("webpack").Configuration[]}
 */
export default (anEnv, anArgv) => {
	const devMode = anArgv.mode != "production";
	const target = anArgv.target ? anArgv.target : "dist";

	return Object.entries(entries).map(([aName, anEntry], anIndex) => {
		const esModule = aName == "module";
		const filename = devMode ? `${aName}-${project.buildname}.js` : `${aName}-${project.buildname}.min.js`;

		return {
			name: aName,
			entry: { [aName]: anEntry },
			target: "web",
			mode: devMode ? "development" : "production",
			experiments: {
				outputModule: esModule,
			},
			optimization: {
				minimize: !devMode,
				usedExports: false,
			},
			devtool: devMode ? "inline-source-map" : "source-map",
			output: {
				filename,
				path: resolve(import.meta.dirname, target),
				...(esModule ? { library: { type: "module" } } : {}),
			},
			plugins: [
				// the configurations are built in parallel, so each one rewrites its own bundle only
				new ReplaceInFileWebpackPlugin([
					{
						dir: "dist",
						files: [filename],
						rules: [
							{
								search: /\$\{version\}/gi,
								replace: project.version,
							}
						]
					}
				])
			],
			// webpack-cli starts a dev server for every configuration carrying the option, and each
			// one serves the bundles of all configurations, so only the first one carries it
			...(anIndex == 0 ? { devServer: DEV_SERVER } : {})
		};
	});
};
