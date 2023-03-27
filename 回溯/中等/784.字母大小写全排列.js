/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const result = [];
  const reg = /[a-z]/i;
  function backtrack(index, path) {
    if (index === s.length) {
      result.push(path);
      return;
    }

    if (reg.test(s[index])) {
      /* 字母转大小写 */
      backtrack(index + 1, path + s[index].toUpperCase());
      backtrack(index + 1, path + s[index].toLowerCase());
    } else {
      backtrack(index + 1, path + s[index]);
    }
  }
  backtrack(0, "");
  return result;
};
