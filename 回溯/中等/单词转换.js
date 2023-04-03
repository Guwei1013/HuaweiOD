/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return [];
  }
  function compare(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        diff++;
        if (diff >= 2) {
          return false;
        }
      }
    }
    return true;
  }

  const queue = [],
    map = new Map(),
    visited = new Array(wordList.length).fill(false);
  const result = [];
  let flag = true;
  queue.push(beginWord);

  while (queue.length) {
    const val = queue.shift();
    if (val === endWord) {
      flag = false;
      break;
    }

    for (let i = 0; i < wordList.length; i++) {
      if (!visited[i] && compare(val, wordList[i])) {
        visited[i] = true;
        map.set(wordList[i], val);
        queue.push(wordList[i]);
      }
    }
  }

  if (flag) {
    return result;
  }

  let key = endWord,
    value = map.get(key);
  while (key !== beginWord) {
    result.push(key);
    key = value;
    value = map.get(value);
  }
  result.push(beginWord);
  result.reverse();

  return result;
};

/**
 * 回溯算法的实现
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const result = [];
  if (!wordList.includes(endWord)) return result;

  const visited = new Array(wordList.length).fill(false);
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] === beginWord) {
      visited[i] = true;
    }
  }

  function compare(str1, str2) {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        diff++;
        if (diff > 1) {
          return false;
        }
      }
    }
    return true;
  }

  function backtrack(beginWord, endWord, path, wordList, visited) {
    if (beginWord === endWord) {
      result.push(path.concat());
    }

    for (let i = 0; i < wordList.length; i++) {
      if (!visited[i] && compare(beginWord, wordList[i])) {
        visited[i] = true;
        path.push(wordList[i]);
        backtrack(wordList[i], endWord, path, wordList, visited);
        path.pop();
      }
    }
  }

  backtrack(beginWord, endWord, [beginWord], wordList, visited);

  return result.length ? result[result.length - 1] : result;
};
