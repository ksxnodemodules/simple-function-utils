
((module) => {
	'use strict';

	var chainFunction = module.exports = (fn, ...fnlist) => {
		if (!fnlist.length) {
			return (...args) => [fn(...args)];
		}
		var rest = chainFunction(...fnlist);
		return (...args) =>
			new chainFunction.Return(fn(...args), ...rest(...args));
	}

	chainFunction.Return = class extends Array {};

})(module);
