
((module) => {
	'use strict';

	var chainFunction = require('./chain-function.js');

	var transform = module.exports = (frontend, ...backend) => {
		backend = chainFunction(...backend);
		return (...args) =>
			frontend(...backend(...args));
	}

	transform.serial = (fn, ...fnlist) =>
		fnlist.length ? transform(fn, transform.serial(...fnlist)) : fn;

	transform.serial.tree = (...fntree) =>
		transform.serial(
			...fntree.map(
				(fntree) =>
					typeof fntree === 'function' ? fntree : transform.serial.tree(...fntree)
			)
		);

})(module);
