/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const code = "a".codePointAt() - 1;
  let cur = 0;

  for (let i = 0; i < s.length; i++) {
    cur = cur ^ (s[i].codePointAt() - code);
  }
  for (let i = 0; i < t.length; i++) {
    cur = cur ^ (t[i].codePointAt() - code);
  }

  return String.fromCodePoint(cur + code);
};
