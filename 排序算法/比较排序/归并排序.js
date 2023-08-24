/**
 * 
 * @param {Array<number>} arrA 
 * @param {Array<number>} arrB 
 */
const mergeArray = (arrA, arrB) => {
  const lenA = arrA.length, lenB = arrB.length
  const mergeArr = []
  let i = 0, j = 0
  while (i < lenA && j < lenB) {
    if (arrA[i] > arrB[j]) {
      mergeArr.push(arrB[j])
      j++
    } else {
      mergeArr.push(arrA[i])
      i++
    }
  }
  return mergeArr
}

const mergeSort = (arr) => {
  if (arr.length === 1) return
  const mid = arr.length / 2 | 0
  const leftArr = arr.slice(0,mid)
  const rightArr = arr.slice(mid)
  return mergeArray(mergeSort(leftArr),mergeSort(rightArr))
}


console.log(mergeSort([0,7,6,5,3,2,1,4]))


const merge = (arr, result, start, end) => {
	if (start >= end) return
	const mid = Math.floor((start + end) / 2)
	merge(arr, result, start, mid)
	merge(arr, result, mid+1, end)
	let i = start,j = mid + 1,k = start
	while (i <= mid && j <= end) {
		if (arr[i] > arr[j]) {
			result[k] = arr[j]
			j++
		} else {
			result[k] = arr[i]
			i++
		}
		k++
	} 

	while (i <= mid) {
		result[k] = arr[i]
		i++
	} 
	while (j <= end) {
		result[k] = arr[j]
		j++
	} 

}

const mergeSort1 = (array) => {
	const result = []
	merge(array,result,0, array.length-1)
	return array
}



console.log(mergeSort1([1,3,5,2,4,6]))