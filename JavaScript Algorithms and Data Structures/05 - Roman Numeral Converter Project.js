/* cSpell: disable; */

/* Conversor de números romanos
Convierte el número proporcionado en un número romano.

Números romanos	                    Números arábigos
        M                               1000
        CM                              900
        D                               500
        CD                              400
        C                               100
        XC                              90
        L                               50
        XL                              40
        X                               10
        IX                              9
        V                               5
        IV                              4
        I                               1
Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas. */

class NumeralConverter {
  constructor(number) {
    this.number = number;
    this.result = "";
  }
  processNumeral(symbol, symbolValue) {
    while (this.number >= symbolValue) {
      this.result += symbol;
      this.number -= symbolValue;
    }
  }
}

function convertToRoman(num) {
  let converter = new NumeralConverter(num);
  converter.processNumeral("M", 1000);
  converter.processNumeral("CM", 900);
  converter.processNumeral("D", 500);
  converter.processNumeral("CD", 400);
  converter.processNumeral("C", 100);
  converter.processNumeral("XC", 90);
  converter.processNumeral("L", 50);
  converter.processNumeral("XL", 40);
  converter.processNumeral("X", 10);
  converter.processNumeral("IX", 9);
  converter.processNumeral("V", 5);
  converter.processNumeral("IV", 4);
  converter.processNumeral("I", 1);
  return converter.result;
}

console.log(convertToRoman(36));
console.log(convertToRoman(2)); //debe devolver la cadena II
console.log(convertToRoman(3)); //debe devolver la cadena III
console.log(convertToRoman(4)); //debe devolver la cadena IV
console.log(convertToRoman(5)); //debe devolver la cadena V
console.log(convertToRoman(9)); //debe devolver la cadena IX
console.log(convertToRoman(12)); //debe devolver la cadena XII
console.log(convertToRoman(16)); //debe devolver la cadena XVI
console.log(convertToRoman(29)); //debe devolver la cadena XXIX
console.log(convertToRoman(44)); //debe devolver la cadena XLIV
console.log(convertToRoman(45)); //debe devolver la cadena XLV
console.log(convertToRoman(68)); //debe devolver la cadena LXVIII
console.log(convertToRoman(83)); //debe devolver la cadena LXXXIII
console.log(convertToRoman(97)); //debe devolver la cadena XCVII
console.log(convertToRoman(99)); //debe devolver la cadena XCIX
console.log(convertToRoman(400)); //debe devolver la cadena CD
console.log(convertToRoman(500)); //debe devolver la cadena D
console.log(convertToRoman(501)); //debe devolver la cadena DI
console.log(convertToRoman(649)); //debe devolver la cadena DCXLIX
console.log(convertToRoman(798)); //debe devolver la cadena DCCXCVIII
console.log(convertToRoman(891)); //debe devolver la cadena DCCCXCI
console.log(convertToRoman(1000)); //debe devolver la cadena M
console.log(convertToRoman(1004)); //debe devolver la cadena MIV
console.log(convertToRoman(1006)); //debe devolver la cadena MVI
console.log(convertToRoman(1023)); //debe devolver la cadena MXXIII
console.log(convertToRoman(2014)); //debe devolver la cadena MMXIV
console.log(convertToRoman(3999)); //debe devolver la cadena MMMCMXCIX
