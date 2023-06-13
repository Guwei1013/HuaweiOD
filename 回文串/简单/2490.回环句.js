/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
	const n = sentence.length;
	if (sentence[0] !== sentence[n - 1]) return false;
	for (let i = 1; i < n; i++) {
		if (sentence[i] === " ") {
			if (sentence[i - 1] !== sentence[i + 1]) {
				return false;
			}
		}
	}
	return true;
};
