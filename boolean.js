
((module) => {
	'use strict';

	var mkserial = (fn) =>
		fn.serial = (first, second, ...rest) =>
			fn(first, rest.length ? fn.serial(second, ...rest) : second);


	var equal = (first, second) =>
		(...args) => Object.is(first(...args), second(...args));

	var boolean = module.exports = (fn) =>
		(...args) => Boolean(fn(...args));

	boolean.not = (fn) =>
		(...args) => !fn(...args);

	boolean.and = (first, second) =>
		(...args) => first(...args) && second(...args);

	mkserial(boolean.and);

	boolean.or = (first, second) =>
		(...args) => first(...args) || second(...args);

	mkserial(boolean.or);

	boolean.xnor = (first, second) =>
		equal(boolean(first), boolean(second));

	boolean.xor = (...args) =>
		boolean.not(boolean.xnor(...args));

})(module);
