
((module) => {
	'use strict';

	var chainFunction = require('./chain-function.js');

	var compose = module.exports = (frontend, ...backend) =>
		compose.mkargs(frontend, chainFunction(...backend));

	compose.serial = (fn, ...fnlist) =>
		fnlist.length ? compose(fn, compose.serial(...fnlist)) : fn;

	compose.serial.tree = (...fntree) =>
		compose.serial(
			...fntree.map(
				(fntree) =>
					typeof fntree === 'function' ? fntree : compose.serial.tree(...fntree)
			)
		);

	compose.mkargs = (frontend, backend) =>
		(...args) => frontend(...backend(...args));

	compose.mkargs.serial = (fn, ...fnlist) =>
		fnlist.length ? compose.mkargs(fn, compose.mkargs.serial(...fnlist)) : fn;

	compose.mkargs.each = (fn, process) =>
		compose.mkargs(fn, (...args) => args.map(process));

	compose.mkargs.reverse = (fn) =>
		compose.mkargs(fn, REVERSE_ARGUMENTS);

	const REVERSE_ARGUMENTS = (...args) => args.reverse();

})(module);
