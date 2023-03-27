/*
    求最大数字
    知识点单调栈

    时间限制：1s 空间限制：256MB 限定语言：不限

    题目描述：
    给定一个由纯数字组成以字符串表示的数值，现要求字符串中的每个数字最多只能出现2次，超过的需要进行删除；删除某个重复的数字后，其它数字相对位置保持不变。
    如"34533"，数字3重复超过2次，需要删除其中一个3，删除第一个3后获得最大数值"4533"
    请返回经过删除操作后的最大的数值，以字符串表示。

    输入描述：
    第一行为一个纯数字组成的字符串，长度范围：[1,100000]

    输出描述：
    输出经过删除操作后的最大的数值

    示例1
    输入：
    34533

    输出：
    4533

    示例2
    输入：
    5445795045

    输出：
    5479504
*/

function func(strs) {
    const set = new Set();
    const map = {};
    let result = "";
    /*
          这个题从前往后遍历，如果数字数量达到3，则看前面两个数字，先看第一个，如果这个数字后面的数字比他大，就删这个，否则看第二个，如果第二个后面的数字比他大，就删第二个，否则删刚遇到的这个
      */
    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
      set.add(i);
      if (str in map) {
        if (map[str].size === 2) {
          for (const val of map[str]) {
            if (strs[val] < strs[val + 1]) {
              map[str].delete(val);
              set.delete(val);
              break;
            }
          }
          if (map[str].size === 2) set.delete(i);
          else map[str].add(i);
        } else {
          map[str].add(i);
        }
      } else {
        map[str] = new Set([i]);
      }
    }
    for (const index of set) {
      result += strs[index];
    }
    return result;
  }
  // console.log(func('34533'))
  console.log(func("5445795045"));
  