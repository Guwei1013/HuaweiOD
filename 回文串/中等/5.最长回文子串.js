/**
 * @param {string} s
 * @return {string}
 */

const getString = (s) => {
	let str = "#";
	const length = s.length;
	for (let i = 0; i < length; i++) {
		str += s[i];
		str += "#";
	}
	return str;
};

var longestPalindrome = function (s) {
	const str = getString(s);
	const length = str.length;
	const P = new Array(length).fill(0);
	let left = 0,
		center = 0,
		right = 0,
		maxLength = 0;
	for (let i = 0; i < length; i++) {
		if (i < right) {
			P[i] = Math.min(right - i, P[2 * center - i]);
		}
		let l = i - P[i] - 1,
			r = i + P[i] + 1;
		while (l >= 0 && r < length && str[l] === str[r]) {
			P[i]++;
			l--;
			r++;
		}
		if (i + P[i] > right) {
			center = i;
			right = i + P[i];
		}

		if (P[i] > maxLength) {
			maxLength = P[i];
			left = (i - P[i]) / 2;
		}
	}
	return s.slice(left, left + maxLength);
};
