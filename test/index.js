
((module) => {
	'use strict';

	var sfu = require('simple-function-utils');
	var out = module.exports = {};

	out.message = 'This test is incomplete';

	[
		() => {
			var mname = 'sfu.boolean';
			var ProductIterable = require('x-iterable/product-iterable');
			var testBinary = (pname) => {
				var sub = result[`${mname}.${pname}`] = {};
				var mkfn = sfu.boolean[pname];
				ProductIterable.pow([false, true], 2).forEach(subtest(sub, mkfn));
			};
			var testSerial = (pname) => {
				var sub = result[`${mname}.${pname}.serial`] = {};
				var mkfn = sfu.boolean[pname].serial;
				ProductIterable.pow([0, 1], 4).forEach(subtest(sub, mkfn));
			};
			var mkargs = (array) =>
				array.map((x) => () => x);
			var subtest = (sub, mkfn) =>
				(array) => sub[JSON.stringify(array)] = mkfn(...mkargs(array))();
			var result = {};
			['and', 'or', 'xnor', 'xor'].forEach(testBinary);
			['and', 'or'].forEach(testSerial);
			return new TestResult(mname, result);
		}
	].forEach((test) => {
		var result = test();
		out[result.name] = result.value;
	});

	function TestResult(name, value) {
		this.name = name;
		this.value = value;
	}

})(module);
