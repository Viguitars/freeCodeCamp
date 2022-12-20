/* cSpell: disable */

/* Comprobador de palíndromos
Devuelve true si la cadena proporcionada es un palíndromo.De lo contrario, devuelve false.

Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia 
atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

Nota: Tendrás que eliminar todos los caracteres no alfanuméricos(puntuación, espacios y símbolos) y 
convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.

Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.

También pasaremos cadenas con símbolos especiales, como 2A3 * 3a2, 2A3 3a2 y 2_A3 * 3#A2. */

function cleanUpNonAlphanumericStr(str) {
    return str.replace(/[\W_]/g, "");
}

function convertToUppercaseStr(str) {
    return str.toUpperCase();
}

function reverseStr(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;

}

function palindrome(str) {

    const cleanUpStr = cleanUpNonAlphanumericStr(str);

    const uppercaseStr = convertToUppercaseStr(cleanUpStr);

    const turnStr = reverseStr(uppercaseStr);

    return uppercaseStr === turnStr;
}


console.log(palindrome("eye")); //debe devolver true.
console.log(palindrome("eye")); //debe devolver true.
console.log(palindrome("_eye")); //debe devolver true.
console.log(palindrome("race car")); //debe devolver true.
console.log(palindrome("not a palindrome")); //debe devolver false.
console.log(palindrome("A man, a plan, a canal. Panama")); //debe devolver true.
console.log(palindrome("never odd or even")); //debe devolver true.
console.log(palindrome("nope")); //debe devolver false.
console.log(palindrome("almostomla")); //debe devolver false.
console.log(palindrome("My age is 0, 0 si ega ym.")); //debe devolver true.
console.log(palindrome("1 eye for of 1 eye.")); //debe devolver false.
console.log(palindrome("0_0 (: /-\ :) 0-0")); //debe devolver true.
console.log(palindrome("five|\_/|four")); //debe devolver false.
