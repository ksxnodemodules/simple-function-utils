
((module) => {
	'use strict';

	var mkserial = (func, stop) => {
		func.serial = (...fnlist) => (...args) => {
			for (let fn of fnlist) {
				let result = fn(...args);
				if (stop(result)) {
					return result;
				}
			}
		}
	};

	var equal = (first, second) =>
		(...args) => Object.is(first(...args), second(...args));

	var boolean = module.exports = (fn) =>
		(...args) => Boolean(fn(...args));

	boolean.not = (fn) =>
		(...args) => !fn(...args);

	boolean.and = (first, second) =>
		(...args) => first(...args) && second(...args);

	mkserial(boolean.and, (x) => !x);

	boolean.or = (first, second) =>
		(...args) => first(...args) || second(...args);

	mkserial(boolean.or, (x) => x);

	boolean.xnor = (first, second) =>
		equal(boolean(first), boolean(second));

	boolean.xor = (...args) =>
		boolean.not(boolean.xnor(...args));

})(module);
