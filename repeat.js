
((module) => {
	'use strict';

	var repeat = module.exports = (fn) => {

		var result = {};

		result.while = (check) => ({
			call(...args) {
				var result = new repeat.Result();
				while(check(...args)) {
					result.push(fn(...args));
				}
				return result;
			}
		});

		result.until = (check) =>
			result.while((...args) => !check(...args));

		result.for = (count) =>
			result.while(() => count--);

		return result;

	};

	repeat.Result = class extends Array {};

})(module);
