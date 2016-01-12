
((module) => {
	'use strict';

	var bind = module.exports = (type, ...args) =>
		bind[type ? 'begin' : 'end'](...args);

	bind.begin = (fn, ...args) =>
		(...rest) => fn(...args, ...rest);

	bind.end = (fn, ...args) =>
		(...rest) => fn(...rest, ...args);

	bind.pack = (fn) =>
		(...args) => fn(args);

	bind.unpack = (fn) =>
		(...args) => fn(...args.reduce((out, args) => [...out, ...args], []));

})(module);
