const selectSort = (array) => {
	const length = array.length 
	for (let i=0; i<length; i++) {
		let minIndex = i
		for (let j=i+1; j<length; j++) {
			if (array[minIndex] > array[j]) {
				minIndex = j
			}
		}
		let temp = array[i]
		array[i] = array[minIndex] 
		array[minIndex] = temp
	}
	console.log(array)
}
selectSort([5,4,3,6,7, 2,1])