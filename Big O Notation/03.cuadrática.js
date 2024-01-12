// Cuadrática o Segundo Orden: O(n²)

function square(n) {
	for (let i = 0; i < n; i += 1) {
		for (let j = 0; j < n; j += 1) {
			console.log(i, j);
		}
	}
}

square(4);
