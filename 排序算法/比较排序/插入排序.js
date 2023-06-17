const insertSort = (array) => {
	const N = array.length
	let i,j
	for (i=1; i<N; i++) {
		let value = array[i]
		for (j=i; j>0 && array[j-1]>value; j--) {
			array[j] = array[j-1]
		}
		array[j] = value
	}
	console.log(array)
}

insertSort([0,9,2,3,5,4,1])