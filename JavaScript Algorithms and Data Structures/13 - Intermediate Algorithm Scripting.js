/* cSpell: disable; */

/* Programación de algoritmos intermedios
Ahora que conoces los conceptos básicos del pensamiento algorítmico, junto con la OOP y la 
programación funcional, prueba tus habilidades con los desafíos de programación de algoritmos 
intermedios. */

/* Suma todos los números en un rango
Te pasaremos un arreglo de dos números.Devuelve la suma de estos dos números más la suma de todos 
los números entre ellos.El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4, 1]) > debe devolver 10 porque la suma de todos los números entre 1 y 4
(ambos incluidos) es 10. */

function sumAll(arr) {
    let sum = 0;
    const [small, big] = arr.sort((a, b) => a - b);
    console.log(arr);
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll([1, 4]));//10.
console.log(sumAll([4, 1]));//10.
console.log(sumAll([5, 10]));//45.
console.log(sumAll([10, 5]));//45.

/* Diferencia entre dos arreglos
Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de 
los dos arreglos dados, pero no en ambos.En otras palabras, devuelve la diferencia simétrica de los 
dos arreglos.

** Nota:** Puedes devolver el arreglo con sus elementos en cualquier orden. */

function diffArray(arr1, arr2) {
    const diffArr = [];
    const bothArr = arr1.concat(arr2);
    for (let element of bothArr) {

        const isInArr1 = arr1.indexOf(element) !== -1;
        const isInArr2 = arr2.indexOf(element) !== -1;

        if (!(isInArr1 && isInArr2)) {
            diffArr.push(element);
        }

    }
    return diffArr;
}


console.log(diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// ["pink wool"].
console.log(diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// ["diorite", "pink wool"].
console.log(diffArray(
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"]));
// [].
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));// [4].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));// ["piglet", 4].
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
// ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
// [1, "calf", 3, "piglet", 7, "filly"].

/* Busca y destruye
Se proporcionará un arreglo inicial(el primer argumento en la función destroyer), seguido de uno o 
más argumentos.Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos 
argumentos.

Nota: Tienes que utilizar el objeto arguments. */

function destroyer(arr) {
    const [values, ...targets] = Object.values(arguments);
    return values.filter(value => !targets.includes(value));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));//[1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));//[1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));//[1].
console.log(destroyer([2, 3, 2, 3], 2, 3));//[].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));//["hamburger"].
console.log(destroyer(
    [
        "possum",
        "trollo",
        12,
        "safari",
        "hotdog",
        92,
        65,
        "grandma",
        "bugati",
        "trojan",
        "yacht"
    ], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
//[12, 92, 65].