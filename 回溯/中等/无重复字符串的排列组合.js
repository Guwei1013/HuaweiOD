/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const result = [];
  const used = new Array(S.length).fill(false);

  function dfs(path, used, option) {
    if (path.length === option.length) {
      result.push(path);
    }
  
    for (let i = 0; i < option.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      dfs(path + option[i], used, option);
      used[i] = false;
    }
  }

  dfs("", used, S);

  return result;
};
