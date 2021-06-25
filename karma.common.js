const path = require('path');

module.exports = {
	// base path that will be used to resolve all patterns (eg. files,
	// exclude)
	basePath : "",
	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks : [ "jasmine" ],
	plugins : [
		"karma-webpack",
		"karma-jasmine",
		"karma-coverage",
		"karma-html2js-preprocessor",
		"karma-sourcemap-loader",
		"karma-firefox-launcher",
		"karma-chrome-launcher",
		"karma-safari-launcher"
	],
	// list of files / patterns to load in the browser
	files : [
		//"src/**/*.js",
		"test/index.js",
		"test/sites/**/*.html",
		{pattern: "test/data/**/*", included: false, served: true, watched: false, nocache: false},
		{pattern: "test/templates/**/*", included: false, served: true, watched: true, nocache: false}	
	],
	proxies: {
		"/data/": "/base/test/data/",
		"/templates/": "/base/test/templates/"
	},
	// list of files / patterns to exclude
	exclude : [
		"node_modules/*"
	],
	// available preprocessors:
	// https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors : {
		"src/**/*.js" : [ "webpack", "coverage"],
		"test/index.js" : [ "webpack", "sourcemap"],
		"test/sites/**/*.html" : [ "html2js" ]
	},
	// test results reporter to use
	// possible values: "dots", "progress"
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters : ["progress", "coverage"],
	coverageReporter : {
		dir : 'coverage/',
		reporters : [
			{ type: 'html', subdir: 'report-html' },
			{ type: 'lcov', subdir: 'report-lcov' },
			{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
			{ type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
			{ type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
			{ type: 'text', subdir: '.', file: 'text.txt' },
			{ type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
		]
	},
	port : 9876,
	colors : true,
	autoWatch : true,
	client : {
		clearContext : true,
		//useIframe : false,
		runInParent : false,
		captureConsole: true		
	},
	singleRun : false,
	concurrency : Infinity,
	browserDisconnectTimeout: 60000,
	browserNoActivityTimeout: 60000
};
