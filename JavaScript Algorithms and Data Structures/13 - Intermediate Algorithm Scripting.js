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
  for (let i = small; i <= big; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4])); //10.
console.log(sumAll([4, 1])); //10.
console.log(sumAll([5, 10])); //45.
console.log(sumAll([10, 5])); //45.

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

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
// ["pink wool"].
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
// ["diorite", "pink wool"].
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"]
  )
);
// [].
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // ["piglet", 4].
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
  return values.filter((value) => !targets.includes(value));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //[1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); //[1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //[1].
console.log(destroyer([2, 3, 2, 3], 2, 3)); //[].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); //["hamburger"].
console.log(
  destroyer(
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
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan"
  )
);
//[12, 92, 65].

/* Donde estás
Crea una función que busque a través de un arreglo de objetos(primer argumento) y devuelva un 
arreglo de todos los objetos que tengan pares de nombre y valor coincidentes(segundo argumento).
Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección 
si se va a incluir en el arreglo devuelto.

Por ejemplo, si el primer argumento es[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", 
last: null }, { first: "Tybalt", last: "Capulet" }], y el segundo argumento es { last: "Capulet" }, 
entonces debes devolver el tercer objeto del arreglo(el primer argumento), porque contiene el 
nombre y su valor, el cual fue pasado como segundo argumento. */

function whatIsInAName(collection, source) {
  let arr = [];
  for (let obj of collection) {
    let matching = true;
    for (let prop in source) {
      if (obj[prop] !== source[prop]) {
        matching = false;
      }
    }
    if (matching) {
      arr.push(obj);
    }
  }
  return arr;
}

console.log(
  whatIsInAName(
    [
      {
        first: "Romeo",
        last: "Montague",
      },
      {
        first: "Mercutio",
        last: null,
      },
      {
        first: "Tybalt",
        last: "Capulet",
      },
    ],
    {
      last: "Capulet",
    }
  )
);
//[{ first: "Tybalt", last: "Capulet" }].
console.log(
  whatIsInAName(
    [
      {
        apple: 1,
      },
      {
        apple: 1,
      },
      {
        apple: 1,
        bat: 2,
      },
    ],
    {
      apple: 1,
    }
  )
);
//[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
console.log(
  whatIsInAName(
    [
      {
        apple: 1,
        bat: 2,
      },
      {
        bat: 2,
      },
      {
        apple: 1,
        bat: 2,
        cookie: 2,
      },
    ],
    {
      apple: 1,
      bat: 2,
    }
  )
);
//[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
console.log(
  whatIsInAName(
    [
      {
        apple: 1,
        bat: 2,
      },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
    ],
    { apple: 1, cookie: 2 }
  )
);
//[{ "apple": 1, "bat": 2, "cookie": 2 }].
console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ],
    { apple: 1, bat: 2 }
  )
);
//[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
//[]
console.log(
  whatIsInAName([{ a: 1, b: 2, c: 3, d: 9999 }], { a: 1, b: 9999, c: 3 })
);
//[]

/* Spinal case
Convierte una cadena a spinal case. Spinal case significa 
todas-las-palabras-en-minúscula-unidas-por-guiones. */

function spinalCase(str) {
  return str
    .split(/\W|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap")); //this-is-spinal-tap.
console.log(spinalCase("thisIsSpinalTap")); //this-is-spinal-tap.
console.log(spinalCase("The_Andy_Griffith_Show")); //the-andy-griffith-show.
console.log(spinalCase("Teletubbies say Eh-oh")); //teletubbies-say-eh-oh.
console.log(spinalCase("AllThe-small Things")); //all-the-small-things

/* Pig Latin (Latin de los cerdos)
Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las 
siguientes:

- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, 
muévela al final de la palabra, y añade "ay" a ella.

- Si una palabra comienza con una vocal, solo añade way al final.

Traduce la cadena proporcionada a Pig Latin. Las cadenas de entrada están garantizadas como palabras en inglés en minúsculas. */

function translatePigLatin(str) {
  const vowelPattern = /^[aeiou]/;
  const isAVowel = vowelPattern.test(str);

  if (isAVowel) {
    return `${str}way`;
  } else {
    return str.replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
}

console.log(translatePigLatin("california")); //aliforniacay.
console.log(translatePigLatin("paragraphs")); //aragraphspay.
console.log(translatePigLatin("glove")); //oveglay.
console.log(translatePigLatin("algorithm")); //algorithmway.
console.log(translatePigLatin("eight")); //eightway.
console.log(translatePigLatin("schwartz")); //artzschway.
console.log(translatePigLatin("rhythm")); //rhythmay.

/* Busca y reemplaza
Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la 
nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés 
reemplazando. Por ejemplo, si quieres reemplazar la palabra Book por la palabra dog, debe ser 
reemplazada como Dog */

function myReplace(str, before, after) {
  // Comprobar capitalizacion de before y modificar after
  const isInUppercase = /^[A-Z]/.test(before);

  if (isInUppercase) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }

  // Reemplazar before por after

  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

console.log(myReplace("Let us go to the store", "store", "mall"));
//Let us go to the mall.
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
//He is Sitting on the couch.
console.log(myReplace("I think we should look up there", "up", "Down"));
//I think we should look down there.
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
//This has a spelling error.
console.log(myReplace("His name is Tom", "Tom", "john"));
//His name is John.
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);

/* Emparejamiento de ADN
El par de hebras del ADN esta formado por pares de nucleobases. Los pares de base son representados 
por los caracteres AT y CG, que forman bloques de doble hélix ADN.

A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que coincida con los 
pares de base faltantes para la hebra de ADN proporcionada. Para cada carácter de la cadena 
proporcionada, encuentra el carácter de par base. Devuelve los resultados como un arreglo 2d.

Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo 
encapsulado. */

function pairElement(str) {
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        newStr[i] = ["A", "T"];
        break;
      case "T":
        newStr[i] = ["T", "A"];
        break;
      case "C":
        newStr[i] = ["C", "G"];
        break;
      case "G":
        newStr[i] = ["G", "C"];
        break;

      default:
        newStr[i] = str;

        break;
    }
  }
  return newStr;
}

console.log(pairElement("GCG"));
//[["G", "C"], ["C","G"], ["G", "C"]].
console.log(pairElement("ATCGA"));
//[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG"));
//[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA"));
//[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

/* Letras faltantes
Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined. */

function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(str[0]);
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[index]) {
      newStr += alphabet[index];
      return newStr;
    }
    index++;
  }
  return undefined;
}

console.log(fearNotLetter("abce")); //d.
console.log(fearNotLetter("abcdefghjklmno")); //i.
console.log(fearNotLetter("stvwx")); //u.
console.log(fearNotLetter("bcdf")); //e.
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //undefined

/* Unión ordenada
Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos 
manteniendo el orden original de los arreglos proporcionados.

En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden 
original, pero sin duplicados en el arreglo final.

Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe 
ordenarse según el orden numérico.

Revisa las pruebas de afirmación para ver ejemplos. */

function uniteUnique(arr) {
  const args = [...arguments];
  const newArr = [];
  for (let i = 0; i < args.length; i++) {
    const element = args[i];
    for (let j = 0; j < element.length; j++) {
      if (newArr.indexOf(element[j]) < 0) {
        newArr.push(element[j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// [1, 2, 3, 5, 4, 6, 7, 8].
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
// [1, 3, 2, 5, 4, 6].
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
// [1, 3, 2, 5, 4].

/* Convierte entidades HTML
Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su 
correspondiente entidad HTML. */

const charactersToConvert = `&<>"'`;
const HTMLEntityArray = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
const charactersToSearch = new RegExp("[" + charactersToConvert + "]");

function convertHTML(str) {
  return str
    .split("")
    .map((character) =>
      charactersToSearch.test(character)
        ? character.replace(
            character,
            HTMLEntityArray[charactersToConvert.indexOf(character)]
          )
        : character
    )
    .join("");
}

console.log(convertHTML("Dolce & Gabbana")); //Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")); //Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")); //Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')); //Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Schindler's List")); //Schindler&apos;s List */
console.log(convertHTML("<>")); //&lt;&gt;
console.log(convertHTML("abc")); //abc

/* Suma todos los números impares de Fibonacci
Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son 
menores o iguales a num.

Los dos primeros números en la secuencia de Fibonacci son 1 y 1. Cada número adicional en la 
secuencia es la suma de los dos números anteriores. Los seis primeros números de la secuencia de 
Fibonacci son 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de Fibonacci menores o 
iguales a 10 son 1, 1, 3 y 5. */

function fib(num) {
  let arr = [1, 1];
  for (let i = 2; i < num + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

function sumFibs(num) {
  return fib(num)
    .filter((element) => (element % 2 !== 0) & (element <= num))
    .reduce((sum, element) => sum + element, 0);
}

console.log(sumFibs(1)); //2
console.log(sumFibs(1000)); //1785
console.log(sumFibs(4000000)); //4613732
console.log(sumFibs(4)); //5
console.log(sumFibs(75024)); //60696
console.log(sumFibs(75025)); //135721

/* Suma todos los números primos
Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por 
ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo 
ya que es divisible entre 1, 2 y 4.

Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o 
iguales a num. */

function primeNumbers(num) {
  let arr = [];
  if (num > 1) {
    for (let i = 2; i <= num; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
          count++;
        }
      }
      if (count === 2) {
        arr.push(i);
      }
    }
    return arr;
  }
}
console.log(primeNumbers(10)); //[2, 3, 5, 7]

function sumPrimes(num) {
  return primeNumbers(num).reduce((acc, cur) => acc + cur, 0);
}

console.log(sumPrimes(10)); //17.
console.log(sumPrimes(977)); //73156.

/* Mínimo común múltiplo
Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse 
equitativamente por ambos, así como por todos los números consecutivos del rango entre estos 
parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es 
dividido por todos los números entre 1 y 3. La respuesta sería 6. */

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}
console.log(smallestCommons([1, 5])); //60.
console.log(smallestCommons([5, 1])); //60.
console.log(smallestCommons([2, 10])); //2520.
console.log(smallestCommons([1, 13])); //360360.
console.log(smallestCommons([23, 18])); //6056820.

/* Déjalo caer
Dado el arreglo arr, itera y elimina cada elemento comenzando desde el primer elemento (el índice 
0) hasta que la función func devuelva true cuando el elemento iterado se pasa a través de él.

Luego devuelve el resto del arreglo una vez que se cumpla la condición, de lo contrario, arr debe 
devolverse como un arreglo vacío. */

function dropElements(arr, func) {
  while (!func(arr[0]) && arr.length > 0) {
    arr.shift();
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
); //[3, 4].
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
); //[1, 0, 1].
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
); //[1, 2, 3].
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
); //[].
console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
); //[7, 4].
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
); //[3, 9, 2].

/* Aplanadora
Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidación. */

function steamrollArray(arr) {
  let flattenedArray = [];
  arr.map((item) => {
    if (!Array.isArray(item)) {
      flattenedArray.push(item);
    } else {
      flattenedArray.push(...steamrollArray(item));
    }
  });
  return flattenedArray;
}

console.log(steamrollArray([[["a"]], [["b"]]])); //["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])); //[1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); //[1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); //[1, {}, 3, 4]

/* Agentes binarios
Devuelve una frase traducida al inglés de una cadena binaria pasada.

La cadena binaria estará separada por espacios. */

function binaryAgent(str) {
  return str
    .split(" ")
    .map((item) => item.replace(/\d+/, String.fromCharCode(parseInt(item, 2))))
    .join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
); //Aren't bonfires fun!?
console.log(
  binaryAgent(
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
  )
); //I love FreeCodeCamp!

/* Todo sea verdad
Comprueba si el predicado (segundo argumento) es truthy en todos los elementos de una colección 
(primer argumento).

En otras palabras, se te da una colección de arreglos de objetos. El predicado pre será una 
propiedad del objeto y debe devolver true si su valor es truthy. De lo contrario, devuelve false.

En JavaScript, los valores truthy son valores que se traducen en true cuando se evalúan en un 
contexto booleano.

Recuerda, puedes acceder a las propiedades del objeto mediante la notación de puntos o la notación 
de corchetes []. */

function truthCheck(collection, pre) {
  return collection.every((item) => Boolean(item[pre]));
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
); //false.
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
); //true.
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role"
  )
); //false.
console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
    ],
    "number"
  )
); //true.
console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "caught"
  )
); //false.
console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "number"
  )
); //false.
console.log(
  truthCheck(
    [
      { name: "Quincy", username: "QuincyLarson" },
      { name: "Naomi", username: "nhcarrigan" },
      { name: "Camperbot" },
    ],
    "username"
  )
); //false.
console.log(
  truthCheck(
    [
      { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
      { name: "Code Radio", users: [{ name: "Camperbot" }] },
      { name: "", users: [] },
    ],
    "users"
  )
); //true.
console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "data"
  )
); //true.
console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "id"
  )
); //false

/* Argumentos opcionales
Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve 
una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.

Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) devuelve 5.

Si cualquiera de los dos argumentos no es un número válido, devuelve undefined. */

function addTogether() {
  const [num1, num2] = arguments;
  if (typeof num1 !== "number") {
    return undefined;
  }
  if (arguments.length === 1) {
    return (num2) => addTogether(num1, num2);
  }
  if (typeof num2 !== "number") {
    return undefined;
  }
  return num1 + num2;
}

console.log(addTogether(2, 3)); //5.
console.log(addTogether(23, 30)); //53.
console.log(addTogether(5)(7)); //12.
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); //undefined.
console.log(addTogether(2, "3")); //undefined.
console.log(addTogether(2)([3])); //undefined.
console.log(addTogether("2", 3)); //undefined.
console.log(addTogether(5, undefined)); //undefined */

/* Crea una persona
Completa el constructor de objetos con los siguientes métodos:

getFirstName();
getLastName();
getFullName();
setFirstName(first);
setLastName(last);
setFullName(firstAndLast);

Ejecuta las pruebas para ver el resultado esperado para cada método. Los métodos que toman un 
argumento deben aceptar sólo un argumento y tiene que ser una cadena. Estos métodos deben ser el 
único medio disponible para interactuar con el objeto. */

const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };
  this.getFullName = function () {
    return fullName;
  };
  this.setFirstName = function (first) {
    fullName = `${first} ${fullName.split(" ")[1]}`;
  };
  this.setLastName = function (last) {
    fullName = `${fullName.split(" ")[0]} ${last}`;
  };
  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());

console.log(Object.keys(bob).length); //6.
console.log(bob instanceof Person); //true.
console.log(bob.firstName); //undefined.
console.log(bob.lastName); //undefined.
console.log(bob.getFirstName()); //Bob.
console.log(bob.getLastName()); //Ross.
console.log(bob.getFullName()); //Bob Ross.

bob.setFirstName("Haskell");
console.log(bob.getFullName()); //Haskell Ross.

bob.setLastName("Curry");
console.log(bob.getFullName()); //Haskell Curry.

bob.setFullName("Haskell Curry");
console.log(bob.getFullName()); //Haskell Curry
console.log(bob.getFirstName()); //Haskell
console.log(bob.getLastName()); //Curry

/* Mapea el Debris
De acuerdo con la Tercera Ley de Kepler, el período orbital  T  de dos puntos se orbitan mutuamente 
en una órbita circular o elíptica es:

T=2π√a3/μ
 
- a es el eje semi-mayor de la órbita
- μ=GM  es el parámetro gravitatorio estándar
- G es la constante gravitatoria,
- M es la masa del cuerpo más masivo.

Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos 
orbitales (en segundos).

El arreglo contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

El radio de la tierra es de, 6367.4447 kilómetros y el valor GM de la tierra es de, 398600.4418 
km3s-2. */

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];
  const getOrbPeriod = function (obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return { name: obj.name, orbitalPeriod: orbPeriod };
  };
  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
//[{name: "sputnik", orbitalPeriod: 86400}].
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
/* [
  { name: "iss", orbitalPeriod: 5557 },
  { name: "hubble", orbitalPeriod: 5734 },
  { name: "moon", orbitalPeriod: 2377399 },
]; */
