const selectSort = (array) => {
	const N = array.length 
	for (let i=0; i<N; i++) {
		let min = i
		for (let j=i+1; j<N; j++) {
			if (array[min] > array[j]) {
				min = j
			}
		}
		let temp = array[i]
		array[i] = array[min] 
		array[min] = temp
	}
	
	console.log(array)
}
selectSort([5,4,3,6,7, 2,1])