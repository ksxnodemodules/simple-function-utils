
((module) => {
	'use strict';

	var bind = module.exports = (fn, begin, end) =>
		bind.begin(bind.end(fn, ...end), ...begin);

	bind.begin = (fn, ...args) =>
		(...rest) => fn(...args, ...rest);

	bind.end = (fn, ...args) =>
		(...rest) => fn(...rest, ...args);

	bind.middle = (fn, begin, end, ...middle) =>
		(...args) => fn(...[...args.slice(0, begin), ...middle, ...(end ? args.slice(-end) : [])]);

	bind.pack = (fn) =>
		(...args) => fn(args);

	bind.unpack = (fn) =>
		(...args) => fn(...args.reduce((out, args) => [...out, ...args], []));

})(module);
