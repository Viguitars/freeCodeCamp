// Common Mistakes

// O(a+b)
function twoInputsAdd(a, b) {
	for (let i = 0; i < a; i += 1) {
		// do something
	}
	for (let i = 0; i < b; i += 1) {
		// do something
	}
}

// O(a*b)
function twoInputsMult(a, b) {
	for (let i = 0; i < a; i += 1) {
		for (let j = 0; j < b; j += 1) {
			// do something
		}
	}
}
