
((module, undefined) => {
	'use strict';

	var tryCatch = module.exports = (callback, onerror, onsuccess, ...args) => {

		var result;

		try {
			result = callback(...args);
		} catch (error) {
			return typeof onerror === 'function' ? onerror(error, args) : undefined;
		}

		return typeof onsuccess === 'function' ? onsuccess(result, args) : undefined;

	};

	tryCatch.of = (callback, onerror, onsuccess) => {

		if (typeof callback !== 'function') {
			throw new TypeError(`Parameter 'callback' must be a function.`);
		}

		return (...args) =>
			tryCatch(callback, onerror, onsuccess, ...args);

	};

	tryCatch.of.setTimeout = (callback, timeout) => {
		setTimeout((param) => tryCatch(callback, result.onerror, result.onsuccess, param), timeout);
		var result = new tryCatch.of.setTimeout.Return();
		return result;
	};

	tryCatch.of.setTimeout.Return = class {

		constructor() {
			var res = this;
			res.then = (handle) => (res.onsuccess = handle, res);
			res.catch = (handle) => (res.onerror = handle, res);
		}

		onsuccess() {}

		onerror(error) {
			throw error;
		}

	};

})(module);
