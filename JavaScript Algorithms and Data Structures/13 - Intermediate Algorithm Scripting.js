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
