/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const sStack = []
  const tStack = []

  for (let i=0; i<s.length; i++) {
      const str = s[i]
      if (str === '#') {
          sStack.pop()
      } else {
          sStack.push(str)
      }
  }

  for(let i=0; i<t.length; i++) {
      const str = t[i]
      if (str === '#') {
          tStack.pop()
      } else {
          tStack.push(str)
      }
  }

  return sStack.join(' ') === tStack.join(' ')
};