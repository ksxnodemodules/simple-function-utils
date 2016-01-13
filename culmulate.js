
((module) => {
	'use strict';

	var culmulate = module.exports = (fn, left, right, ...rest) =>
		fn(rest.length ? culmulate(fn, right, ...rest) : right);

	culmulate.of = (fn) =>
		(...operand) => culmulate(fn, ...operand);

	culmulate.summary = culmulate.of((a, b) => a + b);

	culmulate.product = culmulate.of((a, b) => a * b);

})(module);
