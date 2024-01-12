// Logarítmica: O(log n)

function logNFunc(n) {
	if (n === 0) {
		return 'Done';
	}
	const newN = Math.floor(n / 2);
	return logNFunc(newN);
}

console.log(logNFunc(8));
