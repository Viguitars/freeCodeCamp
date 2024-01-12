// Lineal-Logarítmica: O(n log n)
function nLogNFunc(n) {
	const y = n;
	let currentN = n;
	while (currentN > 1) {
		currentN = Math.floor(currentN / 2);
		for (let i = 1; i <= y; i += 1) {
			console.log(i);
		}
	}
}

nLogNFunc(4);
