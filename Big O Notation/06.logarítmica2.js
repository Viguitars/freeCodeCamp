// Logarítmica: O(log n)

function logNFunc(n) {
	let newN = n;
	while (newN > 1) {
		newN = Math.floor(newN / 2);
	}
	return newN;
}

console.log(logNFunc(8));
