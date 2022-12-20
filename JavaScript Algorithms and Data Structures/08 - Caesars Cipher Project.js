/* cSpell: disable */

/* Cifrado César
Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por 
desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por 
una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 
lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena 
decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, 
puntuación, por ejemplo), pero si transmítelos. */

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function rot13(str) {
    let decodedStr = '';
    for (let i = 0; i < str.length; i++) {
        let alphabetIndex = alphabet.indexOf(str[i]);
        if (alphabetIndex >= 0 && alphabetIndex <= 12) {
            decodedStr += alphabet[alphabetIndex + 13];
        }
        else if (alphabetIndex >= 13 && alphabetIndex <= 26) {
            decodedStr += alphabet[alphabetIndex - 13];
        }
        else {
            decodedStr += str[i];
        }
    }
    return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));//FREE CODE CAMP
console.log(rot13("SERR CVMMN!"));//FREE PIZZA!
console.log(rot13("SERR YBIR?"));//FREE LOVE ?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
//THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
