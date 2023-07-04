const nSum = (arr, index, n, target) => {
	const result = []
	const length = arr.length
	if (n < 2) {
		return result
	}
	if (n === 2) {
		let left = index, right = length - 1
		while (left < right) {
			const sum = arr[left] + arr[right]
			if (sum < target) {
				left++
			} else if (sum > target) {
				right--
			} else {
				result.push([arr[left], arr[right]])
				left++
				right--
				// 排除相同的数字
				while (arr[left] === arr[left-1]) {
					left++
				}
				while (arr[right] === arr[right+1]) {
					right--
				}
			}
		}
	} else {
		for (let i=index; i< length; i++) {
			const resArr = nSum(arr, i + 1, n - 1, target-arr[i])
			for (const data of resArr) {
				data.push(arr[i])
				result.push(data)
			}

			while (arr[i] === arr[i+1]) {
				i++
			}
		}
	}
	return result
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	nums.sort((a,b) => a-b)
	return nSum(nums, 0, 4, target)
};


console.log(fourSum([2,2,2,2],8))