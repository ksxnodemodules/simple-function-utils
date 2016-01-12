
((module) => {
	'use strict';

	module.exports = {
		bind: require('./bind.js'),
		chainFunction: require('./chain-function.js'),
		transform: require('./transform.js'),
		ternary: require('./ternary.js'),
		tryCatch: require('./try-catch.js')
	};

})(module);
