
((module) => {
	'use strict';

	var chainFunction = require('./chain-function.js');

	var transform = module.exports = (frontend, ...backend) => {
		backend = chainFunction(...backend);
		return (...args) =>
			frontend(...backend(...args));
	}

})(module);
