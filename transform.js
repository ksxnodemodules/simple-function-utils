
((module) => {
	'use strict';

	var chainFunction = require('./chain-function.js');

	var compose = module.exports = (frontend, ...backend) => {
		backend = chainFunction(...backend);
		return (...args) =>
			frontend(...backend(...args));
	}

	compose.serial = (fn, ...fnlist) =>
		fnlist.length ? compose(fn, compose.serial(...fnlist)) : fn;

	compose.serial.tree = (...fntree) =>
		compose.serial(
			...fntree.map(
				(fntree) =>
					typeof fntree === 'function' ? fntree : compose.serial.tree(...fntree)
			)
		);

})(module);
