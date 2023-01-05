/* cSpell: disable; */

/* Validador de números telefónicos
Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.

El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el 
formato de un número estadounidense válido.Los siguientes ejemplos son de formatos válidos para 
números estadounidenses(consulte las pruebas a continuación para otras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

Para este desafío se te presentará una cadena como 800 - 692 - 7753 o 8oo - six427676; laskdjf.Tu 
trabajo es validar o rechazar el número de teléfono estadounidense basado en cualquier combinación 
de los formatos proporcionados arriba.El código de área es obligatorio.Si el código de país es 
proporcionado, debes confirmar que el código de país es 1. Devuelve true si la cadena es un número 
de teléfono estadounidense valido; de lo contrario devuelve false. */

const RGX1 = /^(1\s?)?\d{3}-\d{3}-\d{4}$/;
const RGX2 = /^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$/;
const RGX3 = /^(1\s?)?\d{3}\s?\d{3}\s?\d{4}$/;

const REGEXES = [RGX1, RGX2, RGX3];

function telephoneCheck(str) {
  for (let regex of REGEXES) {
    if (regex.test(str)) {
      return true;
    }
  }
  return false;
}

console.log(telephoneCheck("1 555-555-5555")); //true.
console.log(telephoneCheck("1 (555) 555-5555")); //true.
console.log(telephoneCheck("5555555555")); //true.
console.log(telephoneCheck("555-555-5555")); //true.
console.log(telephoneCheck("(555)555-5555")); //true.
console.log(telephoneCheck("1(555)555-5555")); //true.
console.log(telephoneCheck("555-5555")); //false.
console.log(telephoneCheck("5555555")); //false.
console.log(telephoneCheck("1 555)555-5555")); //false.
console.log(telephoneCheck("1 555 555 5555")); //true.
console.log(telephoneCheck("1 456 789 4444")); //true.
console.log(telephoneCheck("123**&!!asdf#")); //false.
console.log(telephoneCheck("55555555")); //false.
console.log(telephoneCheck("(6054756961)")); //false.
console.log(telephoneCheck("2 (757) 622-7382")); //false.
console.log(telephoneCheck("0 (757) 622-7382")); //false.
console.log(telephoneCheck("-1 (757) 622-7382")); //false.
console.log(telephoneCheck("2 757 622-7382")); //false.
console.log(telephoneCheck("10 (757) 622-7382")); //false.
console.log(telephoneCheck("27576227382")); //false.
console.log(telephoneCheck("(275)76227382")); //false.
console.log(telephoneCheck("2(757)6227382")); //false.
console.log(telephoneCheck("2(757)622-7382")); //false.
console.log(telephoneCheck("555)-555-5555")); //false.
console.log(telephoneCheck("(555-555-5555")); //false.
console.log(telephoneCheck("(555)5(55?)-5555")); //false.
console.log(telephoneCheck("55 55-55-555-5")); //false.
console.log(telephoneCheck("11 555-555-5555")); //false.
