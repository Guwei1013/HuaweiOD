/*
    货币单位换算
    时间限制：1s 空间限制：256MB 限定语言：不限

    题目描述：
    记账本上记录了若干条多国货币金额，需要转换成人民币分（fen），汇总后输出。
    每行记录一条金额，金额带有货币单位，格式为数字+单位，可能是单独元，或者单独分，或者元与分的组合。
    要求将这些货币全部换算成人民币分（fen）后进行汇总，汇总结果仅保留整数，小数部分舍弃。
    元和分的换算关系都是1:100，如下：

    1CNY=100fen（1元=100分）
    1HKD=100cents（1港元=100港分）
    1JPY=100sen（1日元=100仙）
    1EUR=100eurocents（1欧元=100欧分）
    1GBP=100pence（1英镑=100便士）

    即100CNY=1825JPY=123HKD=14EUR=12GBP

    输入描述：
    第一行输入为N，N表示记录数。0<N<100
    之后N行，每行表示一条货币记录，且该行只会是一种货币。
    输出描述：
    将每行货币转换成人民币分（fen）后汇总求和，只保留整数部分。
    输出格式只有整数数字，不带小数，不带单位。
    补充说明：
    输出格式只有数字，不带单位

    示例1
    输入：
    1
    100CNY

    输出：
    10000

    说明：
    100CNY转换后是10000fen，所以输出结果为10000

    示例2
    输入：
    1
    3000fen

    输出：
    3000

    说明：
    3000fen，结果就是3000

    示例3
    输入：
    1

    123HKD

    输出：
    10000

    说明：
    HKD与CNY的汇率关系是123:100，所以换算后，输出结果为10000

    示例4
    输入：
    2

    20CNY53fen
    53HKD87cents

    输出：
    6432

    说明：
    20元53分+53港元87港分，换算成人民币分后汇总，为6432
*/

function isLikeArray(arr1, arr2) {
    const set = new Set(arr1.concat(arr2));
    if (arr1.length + arr2.length >= set.size + 2) {
      return Array.from;
    }
    return [];
  }
  /*
      1CNY=100fen（1元=100分）
      1HKD=100cents（1港元=100港分）
      1JPY=100sen（1日元=100仙）
      1EUR=100eurocents（1欧元=100欧分）
      1GBP=100pence（1英镑=100便士）
  */
  function func(list) {
    let sum = 0;
    const reg = /(CNY|fen|HKD|cents|JPY|sen|EUR|eurocents|GBP|pence)(?!$)/g;
    list = list.map((val) => val.replace(reg, (match) => match + " ").split(" "));
  
    const map = {
      CNY: (val) => val * 100,
      fen: (val) => val,
      HKD: (val) => (val * 10000) / 123,
      cents: (val) => (val * 100) / 123,
      JPY: (val) => (val * 10000) / 1825,
      sen: (val) => (val * 100) / 1825,
      EUR: (val) => (val * 10000) / 14,
      eurocents: (val) => (val * 100) / 14,
      GBP: (val) => (val * 10000) / 12,
      pence: (val) => (val * 100) / 12,
    };
  
    for (const money of list) {
      for (const val of money) {
        const num = parseInt(val.replace(/[^\d]/g, "")),
          unit = val.replace(/\d/g, "");
        sum += map[unit](num);
      }
    }
  
    return Math.floor(sum);
  }
  
  console.log(func(["100CNY"]));
  console.log(func(["300fen"]));
  console.log(func(["123HKD"]));
  console.log(func(["20CNY53fen", "53HKD87cents"]));
  