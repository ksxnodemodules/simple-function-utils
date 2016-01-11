
((module) => {
	'use strict';

	module.exports = {
		chainFunction: require('./chain-function.js'),
		transform: require('./transform.js'),
		ternary: require('./ternary.js'),
		tryCatch: require('./try-catch.js')
	};

})(module);
