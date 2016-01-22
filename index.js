
((module) => {
	'use strict';

	module.exports = {
		bind: require('./bind.js'),
		boolean: require('./boolean.js'),
		compose: require('./compose.js'),
		culmulate: require('./culmulate.js'),
		chainFunction: require('./chain-function.js'),
		functionizeClass: require('./functionize-class.js'),
		repeat: require('./repeat.js'),
		ternary: require('./ternary.js'),
		tryCatch: require('./try-catch.js')
	};

})(module);
