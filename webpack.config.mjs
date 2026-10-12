import { resolve } from "node:path";
import ReplaceInFileWebpackPlugin from "replace-in-file-webpack-plugin";
import project from "./package.json" with { type: "json" };
import entries from "./entries.config.json" with { type: "json" };

/**
 * Bundles the entries of entries.config.json into dist/, minified in production mode.
 *
 * @param {object} anEnv
 * @param {{ mode?: string, target?: string }} anArgv
 * @returns {import("webpack").Configuration}
 */
export default (anEnv, anArgv) => {
	const devMode = anArgv.mode != "production";
	const target = anArgv.target ? anArgv.target : "dist";

	return {
		entry: entries,
		target: "web",
		mode: devMode ? "development" : "production",
		optimization: {
			minimize: !devMode,
			usedExports: false,
		},
		devtool: devMode ? "inline-source-map" : "source-map",
		output: {
			filename: devMode ? `[name]-${project.buildname}.js` : `[name]-${project.buildname}.min.js`,
			path: resolve(import.meta.dirname, target),
		},
		plugins: [
			new ReplaceInFileWebpackPlugin([
				{
					dir: "dist",
					test: [/\.js$/],
					rules: [
						{
							search: /\$\{version\}/gi,
							replace: project.version,
						}
					]
				}
			])
		],
		devServer: {
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
		}
	};
};
