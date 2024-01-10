// Constante: O(1)
// Lineal o Primer Orden: O(n)

function linearFunc(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		console.log(1000 * 100000);
	}
}

function linearFunc1(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		console.log(1000 * 100000);
		const something = (200000000 * 200000000) / 2;
		console.log(something);
	}
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
linearFunc(arr);
linearFunc1(arr);

// Cuadrática o Segundo Orden: O(n²)
function square(n) {
	for (let i = 0; i < n; i += 1) {
		for (let j = 0; j < n; j += 1) {
			console.log(i, j);
		}
	}
}

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

// Logarítmica: O(log n)
function logFunc(n) {
	if (n === 0) {
		return 'Done';
	}
	const newN = Math.floor(n / 2);
	return logFunc(newN);
}

function logN(n) {
	let newN = n;
	while (newN > 1) {
		newN = Math.floor(newN / 2);
	}
	return newN;
}

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

const end = arr.length - 1;

square(4);
cube(4);
console.log(logFunc(8));
console.log(logN(8));
console.log(binarySearch(arr, 0, end, 3));

/* 
Órdenes usuales para funciones:
notación			nombre
O(1)				orden constante (función acotada)
O(log log n)		orden sub logarítmica
O(log n)			orden logarítmica
O(√n)				orden sub lineal
O(n)				orden lineal o de primer orden
O(n·log n)			orden lineal logarítmica
O(n2)				orden cuadrática o de segundo orden
O(n3)				orden cúbica o de tercer orden, ...
O(nc)				orden potencial fija (o polinomial)
O(cn), n > 1		orden exponencial
O(n!)				orden factorial
O(nn)				orden potencial exponencial 
*/
