/* cSpell: disable; */

/* Programación de algoritmos básicos
Un algoritmo es una serie de instrucciones paso a paso que describen cómo hacer algo.

Para escribir un algoritmo eficaz, ayuda el dividir un problema en partes más pequeñas y pensar 
cuidadosamente cómo resolver cada parte con código.

En este curso, aprenderás los fundamentos del pensamiento algorítmico mediante la escritura de 
algoritmos que hacen de todo, desde la conversión de temperaturas hasta el manejo de arreglos 2D 
complejos. */

/* Convierte Celsius a Fahrenheit
La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por 
9 / 5, más 32.

Se te da una variable celsius que representa una temperatura en Celsius.Utiliza la variable 
fahrenheit ya definida y asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius 
dada.Utiliza la fórmula mencionada anteriormente para ayudarte a convertir la temperatura Celsius a
Fahrenheit. */

function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

console.log(convertCtoF(-30));//- 22
console.log(convertCtoF(-10));//14
console.log(convertCtoF(0));//32
console.log(convertCtoF(20));//68
console.log(convertCtoF(30));//86

/* Invierte una cadena
Invertir la cadena proporcionada y devolver la cadena invertida.

Por ejemplo, "hello" debe convertirse "olleh". */

function reverseString(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseString("hello"));//olleh.
console.log(reverseString("Howdy"));//ydwoH.
console.log(reverseString("Greetings from Earth"));//htraE morf sgniteerG.

/* Factoriza un número
Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra n, un factorial es el producto de todos los 
enteros positivos menores o iguales a n.

Los factoriales suelen representarse con la abreviatura n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Sólo se proporcionarán a la función los enteros mayores o iguales a cero. */

function factorialize(num) {
    let factorialNum = num;
    if (num <= 0) {
        return 1;
    } else {
        return factorialNum *= factorialize(num - 1);
    }
}

console.log(factorialize(5));//120.
console.log(factorialize(10));//3628800.
console.log(factorialize(20));//2432902008176640000.
console.log(factorialize(0));//1.

/* Encuentra la palabra más larga en una cadena
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número. */

function findLongestWordLength(str) {
    const regexStr = /\W+/g;
    const splitStr = str.split(regexStr);
    let lengthStr = 0;
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > lengthStr) {
            lengthStr = splitStr[i].length;
        }
    }
    return lengthStr;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));//6
console.log(findLongestWordLength("May the force be with you"));//5
console.log(findLongestWordLength("Google do a barrel roll"));//6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
//8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
//19

/* Devuelve los números mayores en los arreglos
Devuelve un arreglo que consista en el mayor número de cada sub - arreglo proporcionado.Por 
simplicidad, el arreglo dado contendrá exactamente 4 sub - arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada 
miembro del arreglo con la sintaxis arr[i]. */

function largestOfFour(arr) {
    let newArr = [];
    let count = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        count = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > count) {
                count = arr[i][j]
            }
        }
        newArr.push(count);
    }
    return newArr;
}

console.log(largestOfFour(
    [
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
    ]
));
//[5,27,39,1001]
console.log(largestOfFour(
    [
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
    ]
));
//[27, 5, 39, 1001]
console.log(largestOfFour(
    [
        [4, 9, 1, 3],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000000, 1001, 857, 1]
    ]
));
//[9, 35, 97, 1000000]
console.log(largestOfFour(
    [
        [17, 23, 25, 12],
        [25, 7, 34, 48],
        [4, -10, 18, 21],
        [-72, -3, -17, -10]
    ]
));
//[25, 48, 21, -3]

/* Confirma el final
Evalúa si una cadena(primer argumento, str) termina con la cadena de destino dada(segundo argumento 
target).

Este desafío puede resolverse con el método.endsWith(), que fue introducido en ES2015.Pero para el 
propósito de este desafío, nos gustaría que usaras uno de los métodos de subcadena de JavaScript en 
su lugar. */

function confirmEnding(str, target) {
    let regexStr1 = new RegExp(target + '$', 'g');
    return regexStr1.test(str);
}

console.log(confirmEnding("Congratulation", "on"));//true
console.log(confirmEnding("Connor", "n"));//false
console.log(confirmEnding(`Walking on water and developing software from a specification are easy 
if both are frozen`, "specification"));//false
console.log(confirmEnding("He has to give me a new name", "name"));//true
console.log(confirmEnding("Open sesame", "same"));//true
console.log(confirmEnding("Open sesame", "sage"));//false
console.log(confirmEnding("Open sesame", "game"));//false
console.log(confirmEnding(`If you want to save our world, you must hurry. We dont know how much 
longer we can withstand the nothing`, "mountain"));//false
console.log(confirmEnding("Abstraction", "action"));//true

/* Repite una cadena repite una cadena
Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). 
Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método 
incorporado .repeat(). */

function repeatStringNumTimes(str, num) {
    let repeatedStr = "";
    if (num <= 0) {
        return "";
    } else {
        while (num > 0) {
            repeatedStr += str;
            num--;
        }
    }
    return repeatedStr;
}

console.log(repeatStringNumTimes("*", 3));//***
console.log(repeatStringNumTimes("abc", 3));//abcabcabc.
console.log(repeatStringNumTimes("abc", 4));//abcabcabcabc
console.log(repeatStringNumTimes("abc", 1));//abc
console.log(repeatStringNumTimes("*", 8));//********
console.log(repeatStringNumTimes("abc", -2));//""
console.log(repeatStringNumTimes("abc", 0));//""

/* Recorta una cadena
Recorta una cadena(primer argumento) si es más larga que la longitud máxima proporcionada(segundo 
argumento).Devuelve la cadena recortada con un ... al final. */

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));//A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));// Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket",
    `A-tisket a-tasket A green and yellow basket`.length));
//A - tisket a - tasket A green and yellow basket
console.log(truncateString("A-tisket a-tasket A green and yellow basket",
    `A-tisket a-tasket A green and yellow basket`.length + 2));
//A - tisket a - tasket A green and yellow basket
console.log(truncateString("A-", 1));// A...
console.log(truncateString("Absolutely Longer", 2));// Ab...

/* Buscadores guardianes
Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de 
verdad".Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true.
Si ningún elemento pasa la prueba.la función debería devolver undefined. */

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
}

console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }));//8
console.log(findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; }));//undefined

/* Boo who(Booleano Quién)
Comprueba si el valor está clasificado como booleano primitivo.Devuelve true o false.

Booleanos primitivos son true y false. */

function booWho(bool) {
    return typeof bool === "boolean";
}

console.log(booWho(null));
console.log(booWho(true));//true
console.log(booWho(false));//true
console.log(booWho([1, 2, 3]));//false
console.log(booWho([].slice));//false
console.log(booWho({ "a": 1 }));//false
console.log(booWho(1));//false
console.log(booWho(NaN));//false
console.log(booWho("a"));//false
console.log(booWho("true"));//false
console.log(booWho("false"));//false

/* Haz que la primera letra de una palabra este en mayúscula
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas.Asegúrate de 
que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of. 
*/
function titleCase(str) {
    const regexStr2 = /(^|\s)\S/g;
    /* 
    1) Buscar todos los caracteres que no sean espacios en blanco (\S)
    2) Al comienzo de la cadena (^) o (|) después de cualquier carácter de espacio en blanco (\s) 
    */
    return str
        .toLowerCase()
        .replace(regexStr2, firtsLetter => firtsLetter.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));//I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));//Short And Stout.
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//Here Is My Handle Here Is My Spout

/* Cortar y rebanar
Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante.Los arreglos de entrada deben permanecer iguales luego de que se 
ejecute la función. */

function frankenSplice(arr1, arr2, n) {
    let newArr = [...arr2];
    for (let i = 0; i < arr1.length; i++) {
        newArr.splice(n, 0, arr1[i]);
        n++;
    }
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));//[4, 1, 2, 3, 5, 6].
console.log(frankenSplice([1, 2, 3], [4, 5], 1));//[4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ["a", "b"], 1));//["a", 1, 2, "b"].
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
//["head", "shoulders", "claw", "tentacle", "knees", "toes"].
console.log(frankenSplice([1, 2, 3, 4], [], 0));//[1, 2, 3, 4].

/* Rebote falsy
Elimina todos los valores falsos de un arreglo.Devuelve un nuevo arreglo; no alteres el arreglo 
original.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano. */

function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));//[7, "ate", 9].
console.log(bouncer(["a", "b", "c"]));//["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""]));//[].
console.log(bouncer([null, NaN, 1, 2, undefined]));//[1, 2].

/* Dónde pertenezco
Devuelve el índice mas bajo en el que un valor(segundo argumento) debe ser insertado en un arreglo
(primer argumento) una vez que éste haya sido ordenado.El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1, 2, 3, 4], 1.5) debe devolver 1 por que este valor es más grande que 1
(índice 0), pero menor que 2(índice 1).

De esta forma, getIndexToIns([20, 3, 5], 19) debe devolver 2 porque una vez ordenado el arreglo, 
éste se verá así[3, 5, 20] y 19 es menor que 20(índice 2) y mayor que 5(índice 1). */

function getIndexToIns(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));//3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));//2.
console.log(getIndexToIns([40, 60], 50));//1.
console.log(getIndexToIns([3, 10, 5], 3));//0.
console.log(getIndexToIns([5, 3, 20, 3], 5));//2.
console.log(getIndexToIns([2, 20, 10], 19));//2.
console.log(getIndexToIns([2, 5, 10], 15));//3.
console.log(getIndexToIns([], 1));//0.

/* Mutaciones
Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las 
letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena 
están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes 
en Alien. */

//let regexStr1 = new RegExp(target + '$', 'g');

function mutation(arr) {
    const test = arr[0];
    const target = arr[1];
    const pattern = new RegExp('^[' + test + ']+$', "i");
    return pattern.test(target);
}

console.log(mutation(["hello", "hey"]));//false.
console.log(mutation(["hello", "Hello"]));//true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));//true.
console.log(mutation(["Mary", "Army"]));//true.
console.log(mutation(["Mary", "Aarmy"]));//true.
console.log(mutation(["Alien", "line"]));//true.
console.log(mutation(["floor", "for"]));//true.
console.log(mutation(["hello", "neo"]));//false.
console.log(mutation(["voodoo", "no"]));//false.
console.log(mutation(["ate", "date"]));//false.
console.log(mutation(["Tiger", "Zebra"]));//false.
console.log(mutation(["Noel", "Ole"]));//true.

/* Monito Trocitos
Escribe una función que divida un arreglo(primer argumento) en grupos de la longitud size(segundo 
argumento) y los devuelva como un arreglo bidimensional. */

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let startIndex = 0;
    let endIndex = size;
    const newArrGroup = arr.length / size;
    for (let i = 0; i < newArrGroup; i++) {
        newArr[i] = arr.slice(startIndex, endIndex);
        startIndex += size;
        endIndex += size;
    }
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//[["a", "b"], ["c", "d"]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
//[[0, 1, 2], [3, 4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
//[[0, 1], [2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
//[[0, 1, 2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
//[[0, 1, 2], [3, 4, 5], [6]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
//[[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
//[[0, 1], [2, 3], [4, 5], [6, 7], [8]].
