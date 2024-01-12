// Logarítmica: O(log n)
// Binary Search

function binarySearch(arr, start, end, target) {
	console.log(arr.slice(start, end));

	if (start > end) {
		return false;
	}
	const midIndex = Math.floor((start + end) / 2);
	if (arr[midIndex] === target) {
		return true;
	}
	if (arr[midIndex] > target) {
		return binarySearch(arr, start, midIndex - 1, target);
	}
	return binarySearch(arr, midIndex + 1, end, target);
}

const arr = [];

for (let i = 1; i <= 1024; i += 1) {
	arr.push(i);
}

const end = arr.length - 1;

console.log(binarySearch(arr, 0, end, 3));
