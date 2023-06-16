/**
 * 冒泡排序
 * 从左到右，相邻元素两两比较，一趟比较完毕，保证最大元素冒泡到最后面
 * @param {Array<number>} array 
 */
const bubleSort = (array) => {
	const length = array.length
	let num = 0
	for (let i=1; i<length; i++) {
		for (let j=0; j<length-i; j++) {
			if (array[j] > array[j+1]) {
				let temp = array[j]
				array[j] = array[j+1]
				array[j+1] = temp
			}
			num++
		}
	}
	console.log(num, array)
}
/* 
	冒泡算法最差需要走 length - 1 趟，
	每一趟走完能够保证一个元素在后有序排列，
	因此每趟需要比较 length - n 个数字
	时间 O(n^2)，空间 O(1)
*/ 
bubleSort([
  20, 19, 18, 17, 16, 15, 14,
  13, 12, 11, 10,  9,  8,  7,
  6,  5,  4,  3,  2,  1
])
// bubleSort([1,2,3,4,5,6,7,8,9])

/* 
	💡优化一: 如果在一趟的所有两两比较过程中，
	没有出现过交换，说明整个数组是有序的
*/
const bubleSort2 = (array) => {
	const length = array.length
	let num = 0
	for (let i=1; i<length; i++) {
		let isSorted = true
		for (let j=0; j<length-i; j++) {
			if (array[j] > array[j+1]) {
				isSorted = false
				let temp = array[j]
				array[j] = array[j+1]
				array[j+1] = temp
			}
			num++
		}
		if (isSorted) {
			break
		}
	}
	console.log(num, array)
}

bubleSort2([
	13, 12, 11, 10,  9,  8,  7,
  20, 19, 18, 17, 16, 15, 14,
  6,  5,  4,  3,  2,  1
])
// bubleSort2([1,2,3,4,5,6,7,8,9,10])


/* 
	💡优化二: 记录每一趟最后一次交换的坐标，
	后续没交换说明后续是有序的，下一趟就不需要在比较这些元素
*/
const bubleSort3 = (array) => {
	const length = array.length
	let num = 0, k = length - 1,index = 0
	for (let i=1; i<length; i++) {
		let isSorted = true
		for (let j=0; j<k; j++) {
			if (array[j] > array[j+1]) {
				isSorted = false
				let temp = array[j]
				array[j] = array[j+1]
				array[j+1] = temp
				index = j
			}
			num++
		}
		if (isSorted) {
			break
		}
		k = index
	}
	console.log(num, array)
}

bubleSort3([
	13, 12, 11, 10,  9,  8,  7,
  20, 19, 18, 17, 16, 15, 14,
  6,  5,  4,  3,  2,  1
])


const bubleSort4 = (array) => {
	const length = array.length
	let left = 0, right = length - 1, index = left, num = 0
	while (left < right) {
		let isSorted = true 
		for (let i = left; i<right; i++) {
			num++
			if (array[i] > array[i+1]) {
				let temp = array[i]
				array[i] = array[i+1]
				array[i+1] = temp
				isSorted = false
				index = i
			}
		}
		if (isSorted) {
			break
		}
		right = index
		isSorted = true
		for (let j = index; j > left; j--) {
			num++
			if (array[j] < array[j-1]) {
				let temp = array[j]
				array[j] = array[j-1]
				array[j-1] = temp
				index = j
				isSorted = false
			}
		}
		if (isSorted) {
			break
		}
		left = index
	}
	console.log(num,array)
}


bubleSort4([
  13, 12, 11, 10,  9,  8,  7,
	20, 19, 18, 17, 16, 15, 14,
  6,  5,  4,  3,  2,  1
])