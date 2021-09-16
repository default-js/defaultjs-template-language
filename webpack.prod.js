const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const project = require("./package.json");
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	optimization: {
		minimize: true,
		usedExports: false,
	},
	devtool: "source-map",
	output: {
		filename: "[name]-" + project.buildname + ".min.js",
		path: path.resolve(__dirname, "dist"),
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
					},
				],
			},
		]),
	],
});
