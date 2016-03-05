
((module) => {
	'use strict';

	var cumulate = module.exports = (fn, left, right, ...rest) =>
		fn(left, rest.length ? cumulate(fn, right, ...rest) : right);

	cumulate.of = (fn) =>
		(...operand) => cumulate(fn, ...operand);

	cumulate.summary = cumulate.of((a, b) => a + b);

	cumulate.product = cumulate.of((a, b) => a * b);

})(module);
