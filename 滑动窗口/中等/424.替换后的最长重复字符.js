/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0, right = 1, n = k, res = k + 1, max = 1
  const alphabet = new Array(26).fill(0),code = 'A'.codePointAt()
  alphabet[s[0].codePointAt() - code]++

  while(right < s.length) {
    const index = s[right].codePointAt() - code
    alphabet[index]++
    max = Math.max(max, alphabet[index])
    right++;

    if(right - left > max + n) {
      alphabet[s[left].codePointAt() - code]--;
      left++;
    }

    res = Math.max(res, right - left)
  }

  return res
};