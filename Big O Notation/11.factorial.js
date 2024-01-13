// Factorial: O(n!)

function f(n) {
	if (n === 0) {
		console.log('***************');
		return;
	}
	for (let i = 0; i < n; i += 1) {
		f(n - 1);
	}
}

f(3);
