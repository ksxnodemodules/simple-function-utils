
((module) => {
	'use strict';

	var ternary = module.exports = (is, iftrue, iffalse, ...args) =>
		(is() ? iftrue : iffalse)(...args);

	ternary.if = (is, act, val, ...args) =>
		ternary(is, act, () => val, ...args);

	ternary.unless = (is, act, val, ...args) =>
		ternary(is, () => val, act, ...args);

	ternary.ternary = (is, valiftrue, valiffalse) =>
		ternary(is, () => valiftrue, () => valiffalse);

	ternary.correct = (val, iswrong, getright, ...args) =>
		ternary(() => iswrong(val()), getright, val, ...args);

})(module);
