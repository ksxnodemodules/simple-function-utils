
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

	bind.method = (fn) =>
		({method(...args) {return fn(this, ...args)}}).method;

	bind.method.chainable = (fn) =>
		bind.method((self, ...args) => (fn(self, ...args), self));

	bind.method.selfend = (fn) =>
		bind.method((self, ...args) => fn(...args, self));

})(module);
