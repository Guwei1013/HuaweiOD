/**
 * 合并两个有序区域
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} end
 */
const merge = (arr, start = 0, end= arr.length - 1) => {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2)
  merge(arr, start, mid)
  merge(arr, mid+1, end)

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
  merge(arr, 0, arr.length-1)
}

const arr = [0,9,1,8,2,7,3,6,4,5]

mergeSort(arr)
console.log(arr)