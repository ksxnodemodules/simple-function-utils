
((module) => {
	'use strict';

	var sfu = require('simple-function-utils');
	var out = module.exports = {};

	out.message = 'This test is incomplete';

	[
		() => {
			var mname = 'sfu.boolean';
			var mkArg = (object, pname) =>
				() => object[pname];
			var testBinary = (pname) => {
				
			};
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
