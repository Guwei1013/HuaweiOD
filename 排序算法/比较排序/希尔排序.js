const shellSort = (array) => {
	const N = array.length;
	let h = 1;
	while (h < N / 3) {
		h = 3 * h + 1;
	}

	while (h >= 1) {
		for (i = h; i < N; i++) {
			let value = array[i];
			for (j = i; j > 0 && array[j - h] > value; j -= h) {
				array[j] = array[j - h];
			}
			array[j] = value;
		}
		h = Math.floor(h / 3);
	}

	console.log(array);
};

shellSort([0, 9, 2, 3, 5, 4, 1]);
