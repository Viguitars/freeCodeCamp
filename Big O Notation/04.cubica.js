// Cubica o Tercer Orden: O(n³)

function cube(n) {
	for (let i = 0; i < n; i += 1) {
		for (let j = 0; j < n; j += 1) {
			for (let k = 0; k < n; k += 1) {
				console.log(i, j, k);
			}
		}
	}
}

cube(4);
