/**
 * @param {string} num
 * @return {boolean}
 */

var isAdditiveNumber = function (num) {
  let flag = false;

  /**
   * 判断两数之和与第三数的关系
   * @param {string} a 第一个数
   * @param {string} b 第二个数
   * @param {string} c 第三个数
   * @returns { -1|0|1 } -1 a+b < c，0 a+b = c，1 a+b > c
   */
  function isSum(a, b, c) {
    //
    if (a.length > c.length || b.length > c.length) {
      return 1;
    }
    const len = Math.max(a.length, b.length);
    (a = a.padStart(len, "0")), (b = b.padStart(len, "0"));
    let flag = 0,
      str = "";
    for (let i = len - 1; i >= 0; i--) {
      const val = +a[i] + +b[i] + flag;
      if (val >= 10) {
        str = val - 10 + str;
        flag = 1;
      } else {
        str = val + str;
        flag = 0;
      }
    }
    if (flag) {
      str = "1" + str;
    }
    if (str.length > c.length) return 1;
    if (str.length < c.length) return -1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] > c[i]) {
        return 1;
      } else if (c[i] > str[i]) {
        return -1;
      }
    }
    return 0;
  }

  function backtrack(index, path) {
    if (index === num.length && path.length >= 3) {
      flag = true;
      return;
    }
    if (flag) return;

    for (let i = index; i < num.length; i++) {
      const val = num.slice(index, i + 1);
      if (val.startsWith("0") && val !== "0") break;
      path.push(val);
      if (path.length >= 3) {
        const select = isSum(
          path[path.length - 3],
          path[path.length - 2],
          path[path.length - 1]
        );
        if (select === -1) {
          path.pop();
          break;
        } else if (select === 0) {
          backtrack(i + 1, path);
        }
      } else {
        backtrack(i + 1, path);
      }
      path.pop();
    }
  }
  backtrack(0, []);
  return flag;
};
