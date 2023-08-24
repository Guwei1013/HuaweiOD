/**
 * 合并两个有序区域
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} mid
 * @param {number} end
 */
const merge = (arr, start, mid, end) => {
  if (start >= end) {
    return;
  }
  const newArr = Array.from({ length: end - start + 1 }).fill(0);
  let l = start,r = mid + 1;

  for (let i=0; i<newArr.length; i++) {
    if (l <= mid && r <= end) {
      // 保证稳定性
      if (arr[l] > arr[r]) {
        newArr[i] = arr[r++]
      } else {
        newArr[i] = arr[l++]
      }
    } else if (l > mid) {
      newArr[i] = arr[r++]
    } else {
      newArr[i] = arr[l++]
    }
  }

  for (let i=0; i<newArr.length; i++) {
    arr[start+i] = newArr[i]
  }
}

const mergeSort = (arr) => {
  const len = arr.length;

  for (let size = 1; size < len; size*=2) {
    for (let i = 0; i<len; i+=size*2) {
      const start = i;
      const mid = start + size - 1;
      const end = Math.min(i + size * 2 - 1, len - 1);
      merge(arr, start, mid, end)
    }
  }
}

const arr = [0,9,1,8,2,7,3,6,4,5]

mergeSort(arr)
console.log(arr)

