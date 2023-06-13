const isPalindrome = (s, l, r) => {
	for (; l < r; l++, r--) {
		if (s[l] !== s[r]) {
			return false;
		}
	}
	return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	let l = 0,
		r = s.length - 1;
	while (l < r) {
		if (s[l] !== s[r]) {
			return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
		} else {
			l--;
			r--;
		}
	}
	return true;
};
