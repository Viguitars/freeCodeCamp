/* ES6
ECMAScript, o ES, es una versión estandarizada de JavaScript.Debido a que todos los principales 
navegadores siguen esta especificación, los términos ECMAScript y JavaScript son intercambiables.

La mayoría del JavaScript que has aprendido hasta este punto estaba en ES5(ECMAScript 5), el cual 
fue finalizado en 2009. Aunque puedes seguir escribiendo programas en ES5, JavaScript está 
evolucionando siempre, y cada año se lanzan nuevas funcionalidades.

ES6, lanzado en 2015, agrego muchas nuevas y potentes características al lenguaje.En este curso, 
aprenderás estas nuevas características, incluyendo let y const, funciones flecha, clases, 
promesas, y módulos. */

/* Compara el alcance de las palabras clave "var" y "let"
Si no estás familiarizado con let, verifica este desafío sobre la diferencia entre let y var.

Cuando declaras una variable con la palabra clave var, esta es declarada globalmente o localmente sí 
es declarada dentro de una función.

La palabra clave let se comporta de forma similar, pero con algunas características adicionales. 
Cuanto declaras una variable con la palabra clave let dentro de un bloque, una declaración o 
expresión.Su alcance está limitado a ese bloque, declaración o expresión.

Por ejemplo:

var numArray = [];
for (var i2 = 0; i < 3; i++) {
    numArray.push(i);
}

console.log(numArray);
console.log(i);

Aquí la consola mostrará los valores[0, 1, 2] y 3.

Con la palabra clave var, i es declarada globalmente.Así, cuando i++es ejecutado, la variable global 
es actualizada.Este código es similar al siguiente:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);

Aquí la consola mostrará los valores[0, 1, 2] y 3.

Este comportamiento causará problemas si creas una función y la almacenas para su uso posterior 
dentro de un bucle for que usa la variable i.Esto se debe a que la función almacenada siempre se 
referirá al valor de la variable global i actualizada.

var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo());

Aquí la consola mostrará el valor 3.

Como puedes ver, printNumTwo() imprime 3 y no 2. Esto es porque el valor asignado a i fue 
actualizado y la función printNumTwo() devuelve el global de i y no el valor que tenía i cuando la 
función fue creada en el bucle for.La palabra clave let no sigue este comportamiento:

    let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo());
console.log(i);

Aquí la consola mostrará el valor 2 y el error que i is not defined.

i no está definida, porque no ha sido declarada en el ámbito global.Solo ha sido declarada dentro de 
la sentencia de bucle for.printNumTwo() devolvió el valor correcto, porque tres variables diferentes 
de i con valores únicos(0, 1 y 2) fueron creadas por la palabra clave let dentro de la sentencia del 
bucle.

Corrige el código para que la variable i, declarada en la sentencia if sea una variable separada de 
la variable i, declarada en la primera línea de la función.Asegúrate de no utilizar la palabra clave 
var en ninguna parte de tu código.

Este ejercicio está diseñado para ilustrar la diferencia entre como las palabras claves var y let 
asignan ámbito a la variable declarada.Cuando programas una función similar a la que es usada en 
este ejercicio, es a menudo mejor usar diferentes nombres de variables para evitar confusión. */

function checkScope() {
    let i = 'function scope';
    if (false) {
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

console.log(checkScope());//debe devolver la cadena function scope

/* Muta un arreglo declarado con const
Si no estás familiarizada con const, verifica este desafío sobre la palabra clave const.

La declaración const tiene muchos casos de uso, en el JavaScript moderno.

Algunos desarrolladores prefieren asignar todas sus variables utilizando const por defecto, a menos 
que sepan que necesitarán reasignar el valor.Solo en ese caso, utilizan let.

Sin embargo, es importante comprender que los objetos (incluyendo arreglos y funciones), asignados a 
una variable usando const siguen siendo mutables.Usar la declaración const solo previene la 
reasignación del identificador de una variable. */

const s = [5, 6, 7];
//s = [1, 2, 3];
s[2] = 45;
console.log(s);

/* s = [1, 2, 3] resultará en un error.Después de comentar esa línea, el console.log mostrará el 
valor[5, 6, 45].

Como puedes ver, puedes mutar el objeto[5, 6, 7] en sí mismo y la variable s seguirá apuntado al 
arreglo alterado[5, 6, 45].Como todos los arreglos, los elementos del arreglo en s son mutables, 
pero debido a que se utilizó const, no puedes utilizar el identificador de la variable s para 
apuntar a un arreglo diferente usando el operador de asignación.

Un arreglo es declarado como const s = [5, 7, 2].Cambia el arreglo a [2, 5, 7] utilizando varias 
asignaciones de elementos. */

const s1 = [5, 7, 2];
function editInPlace() {
    // Cambia solo el código debajo de esta línea

    // Usar s = [2, 5, 7] sería inválido
    s1[0] = 2;
    s1[1] = 5;
    s1[2] = 7;
    return s1;

    // Cambia solo el código encima de esta línea
}

console.log(editInPlace());//s debe ser igual a [2, 5, 7].

/* Prevenir la mutación del objeto
Como se vio en el desafío anterior, la declaración const por sí sola no protege la información de la 
mutación.Para asegurar que tu información no cambie, JavaScript provee una función Object.freeze 
para prevenir la mutación de datos.

Cualquier intento de cambiar el objeto será rechazado, lanzando un error si el script se ejecuta en 
modo estricto (strict mode). */

let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

/* Las asignaciones obj.review y obj.newProp provocarán errores, porque nuestro editor se ejecuta en 
modo estricto por defecto, y la consola mostrará el valor {name: "FreeCodeCamp", review: "Awesome"}.

En este desafío vas a utilizar Object.freeze para prevenir el cambio de constantes matemáticas. 
Necesitas congelar el objeto MATH_CONSTANTS para que nadie pueda alterar el valor de PI, añadir o 
borrar propiedades. */

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Cambia solo el código debajo de esta línea
    Object.freeze(MATH_CONSTANTS);
    // Cambia solo el código encima de esta línea
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI);//PI debe ser igual a 3.14.

/* Usa funciones flecha para escribir funciones anónimas de manera breve
En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una 
función como argumento a otra función.En su lugar, creamos funciones inline(en línea). No 
necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.

Para lograr esto, por lo general se usa la siguiente sintaxis: */

const myFunc1 = function () {
    const myVar = "value";
    return myVar;
}
console.log(myFunc1());

/* ES6 nos proporciona el azúcar sintáctico, para no tener que escribir funciones anónimas de este 
modo. En su lugar, puedes usar la sintaxis de función flecha: */

const myFunc2 = () => {
    const myVar = "value";
    return myVar;
}
console.log(myFunc2());

/* Cuando la función no posee cuerpo y sólo tiene un valor de retorno, la sintaxis de "función de 
flecha", te permite omitir la palabra clave return, así como los corchetes que rodean el código. 
Esto ayuda a simplificar las funciones más pequeñas en sentencias de una sola línea: */

const myFunc3 = () => "value";
console.log(myFunc3());

/* Este código todavía devolverá la cadena value por defecto.

Reescribe la función asignada a la variable magic, la cual devuelve una new Date(), utilizando la 
sintaxis de función flecha.Además, asegúrate de que nada esté definido usando la palabra clave var. 

var magic = function () {
    return new Date();
};*/

const magic = () => new Date();

/* Escribe funciones flecha con parámetros
Al igual que una función regular, puedes pasar argumentos a una función flecha. */

const doubler1 = (item) => item * 2;
console.log(doubler1(4));

/* doubler(4) devolvería el valor 8.

Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser 
omitidos. */

const doubler2 = item => item * 2;
console.log(doubler2(4));

//Es posible pasar más de un argumento a una función flecha.

const multiplier = (item, multi) => item * multi;
console.log(multiplier(4, 2));

/* multiplier(4, 2) devolverá el valor 8.

Reescribe la función myConcat que añade el contenido de arr2 a arr1 para que la función use la 
sintaxis de función flecha. 

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

/* Establece parámetros por defecto para tus funciones
Para ayudarnos a crear funciones más flexibles, ES6 introduce parámetros por defecto para funciones.

Echa un vistazo, al siguiente código: */

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

/* La consola mostrará las cadenas Hello John y Hello Anonymous.

El parámetro por defecto entra en juego cuando el argumento no es especificado(es indefinido).Como 
puedes ver en el ejemplo anterior, el parámetro name recibirá su valor por defecto Anonymous cuando 
no proveas un valor para el parámetro.Puede agregar valores por defecto para tantos parámetros como 
desees.

Modifica la función increment agregando parámetros por defecto para que sume 1 a number si value no 
se especifica. */

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); //debe ser 7.
console.log(increment(5)); //debe ser 6.

/* Utiliza el parámetro rest con parámetros de función
Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro rest para los parámetros 
de función.Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos. 
Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la 
función.

Echa un vistazo a este código: */

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

/* La consola mostrará las cadenas You have passed 3 arguments.y You have passed 4 arguments..

El parámetro rest elimina la necesidad de comprobar el arreglo args y nos permite aplicar map(), 
filter() y reduce() en el arreglo de parámetros.

Modifica la función sum usando el parámetro rest de tal manera que la función sum sea capaz de 
recibir cualquier número de argumentos y devolver su suma. */

const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(0, 1, 2)); //debe ser 3
console.log(sum(1, 2, 3, 4)); //debe ser 10
console.log(sum(5)); //debe ser 5
console.log(sum()); //debe ser 0

/* Utiliza el operador de propagación para evaluar los arreglos en el lugar
ES6 introduce el operador de propagación, que nos permite expandir arreglos y otras expresiones en 
lugares donde se esperan múltiples parámetros o elementos.

El siguiente código ES5 usa apply() para calcular el valor máximo en un arreglo: */

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus);

/* maximus tendrá un valor de 89.

Tuvimos que usar Math.max.apply(null, arr) porque Math.max(arr) devuelve NaN.Math.max() espera 
argumentos separados por comas, pero no un arreglo.El operador de propagación hace que esta sintaxis 
sea más fácil de leer y mantener. */

const arr1 = [6, 89, 3, 454];
const maximus2 = Math.max(...arr1);
console.log(maximus2);

/* maximus tendría un valor de 89.

...arr devuelve un arreglo desempacado.En otras palabras, propaga el arreglo.Sin embargo, el
operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo
literal.El siguiente código no funcionará:

const spreaded = ...arr;

Copia todo el contenido de arr1 en otro arreglo arr2 usando el operador de propagación. */

const arr2 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr3;

arr3 = [...arr2];  // Cambia esta línea

console.log(arr3);

/* Usa sintaxis de desestructuración para extraer valores de objetos
La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar los 
valores directamente desde un objeto.

Considera el siguiente código ES5: */

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
console.log(name);
console.log(age);

/* name tendría una cadena con valor John Doe, y age tendría el número 34.

Aquí hay una sentencia de asignación equivalente usando la sintaxis de desestructuración de ES6: */

//const { name, age } = user;
console.log(name);
console.log(age);

/* De nuevo, name tendrá una cadena con valor John Doe, y age tendrá el número 34.

Aquí, las variables name y age serán creadas y se asignarán los valores respectivos a partir del 
objeto user. Puedes observar que esto es mucho más limpio.

Puedes extraer tantos o pocos valores del objeto como desees.

Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben 
seguir asignando las variables today y tomorrow con los valores de today y tomorrow del objeto 
HIGH_TEMPERATURES. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Cambia solo el código debajo de esta línea

/* const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow; */
const { today, tomorrow } = HIGH_TEMPERATURES;

// Cambia solo el código encima de esta línea

console.log(today);
console.log(tomorrow);

/* Usa sintaxis de desestructuración para asignar variables desde objetos
La desestructuración te permite asignar un nuevo nombre de variable al extraer valores.Puedes hacer 
esto al poner el nuevo nombre después de dos puntos al asignar el valor.

Usando el mismo objeto del ejemplo anterior: */

//const user = { name: 'John Doe', age: 34 };
console.log(user);

//Así es como puedes dar nuevos nombres de variables en la asignación:

const { name: userName, age: userAge } = user;
console.log(user);
console.log(userName);
console.log(userAge);

/* Puedes leerlo como "obtén el valor de user.name y asígnalo a una nueva variable llamada userName" 
y así sucesivamente.El valor de userName sería la cadena John Doe, y el valor de userAge sería el 
número 34.

Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente.Todavía deben 
seguir asignando las variables highToday y highTomorrow con los valores de today y tomorrow del 
objeto HIGH_TEMPERATURES. */

/* const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
}; */

// Cambia solo el código debajo de esta línea

/* const highToday = HIGH_TEMPERATURES1.today;
const highTomorrow = HIGH_TEMPERATURES1.tomorrow; */
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Cambia solo el código encima de esta línea

console.log(highToday);
console.log(highTomorrow);

/* Usa sintaxis de desestructuración para asignar variables desde objetos anidados
Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los valores 
desde objetos anidados.

Usando un objeto similar a los ejemplos anteriores: */

const user1 = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

/* Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el 
mismo nombre: */

const { johnDoe: { age1, email } } = user1;

/* Y así es como se puede asignar los valores de las propiedades de un objeto a variables con 
diferentes nombres: */

const { johnDoe: { age: userAge1, email: userEmail } } = user1;

/* Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben 
seguir asignando las variables lowToday y highToday con los valores de today.low y today.high del 
objeto LOCAL_FORECAST. */

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Cambia solo el código debajo de esta línea

/* const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high; */
const { today: { low: lowToday, high: highToday1 }, } = LOCAL_FORECAST

// Cambia solo el código encima de esta línea
console.log(lowToday);
console.log(highToday1);

/* Usa sintaxis de desestructuración para asignar variables desde arreglos
ES6 hace que desestructurar arreglos sea tan fácil como desestructurar objetos.

Una diferencia clave entre el operador de propagación y la desestructuración de arreglos es que el 
operador de propagación desempaca todos los contenidos de un arreglo en una lista separada por comas. 
En consecuencia, no puedes elegir qué elementos deseas asignar como variables.

Desestructurar un arreglo nos permite hacer exactamente eso: */

const [a1, b1] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1);

/* La consola mostrará los valores de a y b como 1, 2.

A la variable a se le asigna el primer valor del arreglo, y a b se le asigna el segundo valor del 
arreglo.También podemos acceder al valor en cualquier índice de un arreglo con la desestructuración 
usando comas para alcanzar el índice deseado: */

const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

/* La consola mostrará los valores de a, b, y c como 1, 2, 5.

Utiliza la sintaxis de desestructuración para intercambiar los valores de a y b para que a reciba el 
valor almacenado en b, y b reciba el valor almacenado en a. */

let a2 = 8, b2 = 6;
// Cambia solo el código debajo de esta línea
[a2, b2] = [b2, a2];

console.log(a2); //a debe ser 6, después del intercambio.
console.log(b2); //b debe ser 8, después del intercambio.

/* Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un 
arreglo
En algunas situaciones que implican la desestructuración de arreglos, tal vez queramos recolectar el 
resto de elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra a continuación: */

const [a3, b3, ...arr4] = [1, 2, 3, 4, 5, 7];
console.log(a3, b3);
console.log(arr4);

/* La consola mostrará los valores 1, 2 y[3, 4, 5, 7].

Las variables a y b toman el primer y segundo valor del arreglo.Después de eso, debido a la 
presencia del parámetro rest, arr obtiene el resto de los valores en forma de un arreglo. El 
elemento rest sólo funciona correctamente como la última variable en la lista.Por ejemplo, no puedes 
usar el parámetro rest para capturar un sub - arreglo que deje fuera el último elemento del arreglo 
original.

Utiliza una asignación de desestructuración con el parámetro rest para emular el comportamiento de 
Array.prototype.slice().removeFirstTwo() debe devolver un sub - arreglo del arreglo original list 
sin los dos primeros elementos. */

function removeFirstTwo(list) {
    // Cambia solo el código debajo de esta línea
    const [a, b, ...shorterList] = list; // Cambia esta línea (primer solución)
    //const [,, ...shorterList] = list; // Cambia esta línea (segunda solución)

    // Cambia solo el código encima de esta línea
    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);

console.log(removeFirstTwo([1, 2, 3, 4, 5])); //debe devolver [3, 4, 5]

/* Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función
En algunos casos, se puede desestructurar el objeto en un propio argumento de función.

Considera el siguiente código: */

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}

/* Esto desestructura efectivamente el objeto enviado a la función.Esto también se puede hacer en el 
lugar: */

const profileUpdate1 = ({ name, age, nationality, location }) => {

}
/* Cuando profileData es pasado a la función anterior, los valores son desestructurados desde el 
parámetro de función para su uso dentro de la función.

Utiliza la sintaxis de desestructuración dentro del argumento de la función half para enviar solo 
max y min dentro de la función. */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Cambia solo el código debajo de esta línea
//const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({ max, min }) => (max + min) / 2.0;

// Cambia solo el código encima de esta línea

console.log(half(stats)); //debe ser 28.015

/* Crea cadenas usando plantillas literales
Una nueva característica de ES6 es la plantilla literal.Este es un tipo especial de cadena que 
facilita la creación de cadenas complejas.

Las plantillas literales te permiten crear cadenas multilínea y usar características de 
interpolación, para crearlas.

Fíjese en el código debajo: */

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting1 = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting1);

/* La consola mostrará las cadenas Hello, my name is Zodiac Hasbro! y I am 56 years old..

Muchas cosas han ocurrido allí.En primer lugar, el ejemplo utiliza backticks(`), no comillas (' o "),
para envolver la cadena. En segundo lugar, observe que la cadena es multi-línea tanto en el código 
como cuando se imprime en pantalla. Esto guarda la inserción \n dentro de las cadenas. La sintaxis 
${variable} utilizada anteriormente es un marcador de posición. Básicamente, ya no tendrás que 
utilizar concatenación con el operador +. Para añadir variables a las cadenas, basta con colocar la 
variable en una plantilla de cadena y envolverla con ${y}. Del mismo modo, puedes incluir otras 
expresiones en tu literal de cadena, por ejemplo ${a + b}. Esta nueva forma de crear cadenas te da 
mayor flexibilidad para crear cadenas robustas.

Usa la sintaxis de plantilla literal con comillas invertidas para crear un arreglo de cadenas de 
elemento lista (li). El texto de cada elemento de lista debe ser uno de los elementos del arreglo de 
la propiedad failure en el objeto result y tener un atributo class con el valor text-warning. La 
función makeList debe devolver el arreglo de cadenas de elemento lista.

Utiliza un método de iteración (cualquier tipo de bucle) para obtener el resultado deseado (mostrado 
a continuación).

[
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
]

*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Cambia solo el código debajo de esta línea
    const failureItems = [];
    for (let i = 0; i < result.failure.length; i++) {
        failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`);
    }
    // Cambia solo el código encima de esta línea

    return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);

/* Escribe declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto
ES6 añade un buen soporte para definir fácilmente objetos literales.

Considera el siguiente código: */

const getMousePosition1 = (x, y) => ({
    x: x,
    y: y
});

/* getMousePosition es una función simple que devuelve un objeto que contiene dos propiedades. ES6 
proporciona el azúcar sintáctico para eliminar la redundancia de tener que escribir x: x. Puedes 
simplemente escribir x una vez, y se convertirá en x: x(o algo equivalente) de la nada. Aquí está la 
misma función de arriba reescrita para usar esta nueva sintaxis: */

const getMousePosition2 = (x, y) => ({ x, y });

/* Utiliza la abreviatura de propiedad de objeto con objetos literales para crear y devolver un 
objeto con las propiedades name, age y gender. */

const createPerson = (name, age, gender) => ({
    // Cambia solo el código debajo de esta línea
    name,
    age,
    gender
});
// Cambia solo el código encima de esta línea

console.log(createPerson("Zodiac Hasbro", 56, "male"));
//debe devolver { name: "Zodiac Hasbro", age: 56, gender: "male" }.

/* Escribe funciones breves y declarativas con ES6
Al definir funciones dentro de objetos en ES5, tenemos que utilizar la palabra clave function de la 
siguiente manera: */

const person1 = {
    name: "Taylor",
    sayHello: function () {
        return `Hello! My name is ${this.name}.`;
    }
};

console.log(person1);

/* Con ES6, puedes eliminar la palabra clave function y los dos puntos al definir funciones en 
objetos.Aquí hay un ejemplo de esta sintaxis: */

const person2 = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};

console.log(person2);

/* Refactoriza la función setGear dentro del objeto bicycle para que utilice la sintaxis abreviada 
descrita arriba.
 */

// Cambia solo el código debajo de esta línea
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Cambia solo el código encima de esta línea
bicycle.setGear(3);
console.log(bicycle.gear);

/* Usa sintaxis de clases para definir una función constructora
ES6 proporciona una nueva sintaxis para crear objetos, usando la palabra clave class.

Debemos notar que la sintaxis class es sólo sintaxis, y no una implementación completa basada en 
clases de un paradigma orientado a objetos, a diferencia de lenguajes como Java, Python, Ruby, etc.

En ES5, se puede crear un objeto definiendo una función constructor y usando la palabra clave new 
para instanciar el objeto.

En ES6, una declaración class tiene un método constructor que se invoca con la palabra clave new. Si 
el método constructor no se define explícitamente, entonces se define implícitamente sin argumentos. 
*/

// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}

// Implicit constructor 
class Rocket {
    launch() {
        console.log("To the moon!");
    }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();

/* Debe tenerse en cuenta que la palabra clave class declara una nueva función, a la cual se añade 
un constructor.Este constructor se invoca cuando new es llamado para crear un nuevo objeto.

    Nota: UpperCamelCase debe ser utilizado por convención para nombres de clase en ES6, como 
    SpaceShuttle fue usado arriba.

El método constructor es un método especial para crear e inicializar un objeto creado con una clase. 
Aprenderás más sobre ello en la sección de Programación Orientada a Objetos de la Certificación en 
Algoritmos de JavaScript y Estructuras de Datos.

Usa la palabra clave class y escribe un constructor para crear la clase Vegetable.

La clase Vegetable te permite crear un objeto vegetal con una propiedad name que es pasada al 
constructor. */

// Cambia solo el código debajo de esta línea
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
// Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'

/* Utiliza getters(accesores) y setters(mutadores) para controlar el acceso a un objeto
Puedes obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

Estas operaciones clásicamente se llaman getters y setters.

Las funciones getter están destinadas a simplemente devolver(get) el valor de la variable privada de 
un objeto al usuario sin que el usuario acceda directamente a la variable privada.

Las funciones setter están destinadas a modificar(set) el valor de la variable privada de un objeto 
basado en el valor pasado a la función setter.Este cambio podría implicar cálculos, o incluso 
sobrescribir completamente el valor anterior. */

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

/* La consola mostrará las cadenas anonymous y newAuthor.

Ten en cuenta la sintaxis usada para invocar el getter y el setter. Ni siquiera se ven como 
funciones.Los getter y los setter son importantes porque ocultan los detalles internos de la 
implementación.

    Nota: Es convención preceder el nombre de una variable privada con un guion bajo(_).Sin embargo, 
    la práctica en sí misma no hace una variable privada.

Utiliza la palabra clave class para crear una clase Thermostat.El constructor acepta una temperatura 
Fahrenheit.

En la clase, crea un getter para obtener la temperatura en Celsius y un setter para ajustar la 
temperatura en Celsius.

Recuerda que C = 5 / 9 * (F - 32) y F = C * 9.0 / 5 + 32 donde F es el valor de la temperatura en 
Fahrenheit y C es el valor de la misma temperatura en Celsius.

    Nota: Cuando implementes esto, rastrearás la temperatura dentro de la clase en una escala, ya 
    sea Fahrenheit o Celsius.

Este es el poder de un getter y un setter.Estás creando una API para otro usuario, que puede obtener 
el resultado correcto independientemente de cuál estés rastreando.

En otras palabras, estás abstrayendo los detalles de la implementación del usuario. */

// Cambia solo el código debajo de esta línea
class Thermostat {
    constructor(tempFahrenheit) {
        this._tempFahrenheit = tempFahrenheit;
    }
    //getter
    get temperature() {
        return 5 / 9 * (this._tempFahrenheit - 32);
    }
    //setter
    set temperature(tempCelsius) {
        this._tempFahrenheit = tempCelsius * 9.0 / 5 + 32;
    }
}
// Cambia solo el código encima de esta línea

const thermos = new Thermostat(76); // Ajuste en escala Fahrenheit
let temp = thermos.temperature; // 24.44 en Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius
console.log(temp);

/* Crea un módulo para scripts
En sus inicios, JavaScript comenzó desempeñando un pequeño rol, cuando la web estaba mayormente 
hecha en HTML.Hoy Javascript se ha vuelto gigante y algunos sitios web están casi completamente 
construidos con JavaScript.Con la finalidad de hacer JavaScript más modular, limpio y mantenible, 
ES6 introdujo una manera de compartir código fácilmente entre archivos JavaScript.Esto implica 
exportar partes de un archivo para usar en uno o más archivos, e importar las partes que necesitas 
donde las necesites.Para aprovechar esta funcionalidad, necesitas crear un script en tu documento 
HTML con un type de module.A continuación, te presentamos un ejemplo:

<script type="module" src="filename.js"></script>

Un script que utilice este module ahora podrá utilizar las características import y export, sobre 
las que aprenderás en los próximos desafíos.

Agrega un script de tipo module al documento HTML y asígnale el archivo fuente index.js 

<script type="module" src="index.js"></script>
*/

/* Utiliza la exportación para compartir un bloque de código
Imagina un archivo llamado math_functions.js que contiene varias funciones relacionadas con 
operaciones matemáticas.Uno de ellos se almacena en una variable, add, que toma dos números y 
devuelve su suma.Quieres utilizar esta función en varios archivos JavaScript diferentes. Para 
compartirlo con estos otros archivos, primero debes usar export (exportarlo).

export const add = (x, y) => {
    return x + y;
}

Lo anterior es una forma común de exportar una sola función, pero puedes lograr lo mismo como 
esto:

const add = (x, y) => {
    return x + y;
}

export { add };

Cuando exportas una variable o función, puedes importarla en otro archivo y usarla sin tener que 
volver a escribir el código.Puedes exportar diferentes cosas al repartir el primer ejemplo para cada 
una de ellas si quieres exportar o al colocarlas en la declaración de exportación del segundo 
ejemplo.Por ejemplo:

export { add, subtract };

Hay dos funciones relacionadas con cadenas en el editor.Exporta ambos utilizando el método que 
elijas.

const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export { uppercaseString, lowercaseString }
*/

/* Reutiliza código de JavaScript utilizando import
import te permite elegir qué partes de un archivo o módulo cargar.En la lección previa, los ejemplos 
exportaron add del archivo math_functions.js.Así es como puedes importarlo para utilizarlo en otro 
archivo:

import { add } from './math_functions.js';

Aquí, import encontrará add en math_functions.js, importa sólo esa función para que la uses, e 
ignora el resto.El./, dice a import que busque el archivo math_functions.js en la misma carpeta que 
el archivo actual.La ruta relativa del archivo(./) y la extensión del archivo (.js), son requeridos 
cuando se utiliza import de esta manera.

Puedes importar más de un elemento del archivo, añadiéndolos en la declaración import de esta 
manera:

import { add, subtract } from './math_functions.js';

Agrega la declaración import apropiada que permita al archivo actual, usar las funciones 
uppercaseString y lowercaseString que exportaste de la lección previa.Estas funciones se encuentran 
en un archivo llamado string_functions.js, el cual está en el mismo directorio que el archivo 
actual. 

import { uppercaseString, lowercaseString} from './string_functions.js';
// Cambia solo el código encima de esta línea

uppercaseString("hello");
lowercaseString("WORLD!");
*/

/* Use * para importar todo de un archivo
Supongamos que tienes un archivo y deseas importar todo su contenido en el archivo actual.Esto puede 
hacerse con la sintaxis import * as.Este es un ejemplo donde los contenidos de un archivo llamado 
math_functions.js son importados a un archivo dentro del mismo directorio:

import * as myMathModule from "./math_functions.js";

La anterior declaración import, crea un objeto llamado myMathModule.Esto es, sólo el nombre de una 
variable, puedes nombrarlo de cualquier manera.El objeto contiene todas las exportaciones de 
math_functions.js, así puedes acceder a las funciones, como haces con cualquier propiedad del 
objeto. A continuación puedes usar las funciones importadas add y subtract:

myMathModule.add(2, 3);
myMathModule.subtract(5, 3);

El código actual, requiere los contenidos del archivo: string_functions.js, ubicado en el mismo 
directorio que el archivo actual.Usa la sintaxis import * as, para importar todo del archivo, en un 
objeto llamado stringFunctions. 

import * as stringFunctions from './string_functions.js';
// Cambia solo el código encima de esta línea

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
*/

/* Crear un fallback de exportación con export default
En la lección export, aprendiste sobre la sintaxis conocida como named export. Esto te permitió 
hacer disponibles múltiples funciones y variables para usar en otros archivos.

Aquí hay otra sintaxis export que necesitas saber, conocida como export default.Usualmente 
utilizarás esta sintaxis, si es sólo un valor el que está siendo exportado desde un archivo.También 
es utilizado para crear valores fallback para un archivo o módulo.

A continuación hay ejemplos usando export default:

export default function add(x, y) {
    return x + y;
}

export default function (x, y) {
    return x + y;
}

La primera es una función nombrada, y la segunda es una función anónima.

Ya que export default es usado para declarar un valor fallback para un módulo o archivo, sólo puedes 
tener un valor que sea exportación por defecto en cada módulo o archivo.Además, no puedes usar 
export default con var, let, o const

La siguiente función debe ser el valor fallback para el módulo.Por favor, añade el código necesario 
para hacerlo. 

export default function subtract(x, y) {
  return x - y;
}
*/

/* Importa una exportación por defecto
En el último desafío, aprendiste sobre export default (exportación por defecto) y sus usos.Para 
importar una exportación por defecto, necesita utilizar la sintaxis import de manera diferente.En el 
siguiente ejemplo, add es la exportación por defecto del archivo math_functions.js.A continuación, 
cómo importarlo:

import add from "./math_functions.js";

La sintaxis difiere en un punto clave.El valor importado, add, no está rodeado por llaves({}).add, 
aquí es simplemente un nombre de variable, para cualquiera que sea la exportación por defecto del 
archivo math_functions.js.Puedes utilizar cualquier nombre aquí, al importar un valor por defecto.

El siguiente código, importa como exportación por defecto, desde el archivo math_functions.js, 
encontrado en el mismo directorio que este archivo.Da a la importación el nombre de subtract. 

import subtract from './math_functions.js';
// Cambia solo el código encima de esta línea

subtract(7,4);
*/

/* Crea una promesa de JavaScript
Una promesa en JavaScript es exactamente como suena, se utiliza para hacer una promesa de que harás 
algo, habitualmente de forma asíncrona.Cuando la tarea se completa, o cumples tu promesa o no la 
cumples.Promise es una función constructora, así que tu necesitas usar la palabra clave new para 
crear una.Recibe una función como su argumento, con dos parámetros: resolve y reject.Estos métodos 
se utilizan para determinar el resultado de la promesa.Su sintaxis se ve así: */

const myPromise = new Promise((resolve, reject) => {

});

console.log(myPromise);

/* Crea una nueva promesa llamada makeServerRequest.Pásale una función con parámetros resolve y reject al constructor. */

const makeServerRequest = new Promise((resolve, reject) => {

});

console.log(makeServerRequest);

/* Completa una promesa con "resolve" y "reject"
Una promesa tiene tres estados: pending, fulfilled, y rejected.La promesa que creaste en el último 
desafío está atascada en el estado pending porque no añadiste una forma de completar la promesa.Los 
parámetros resolve y reject enviados a "promise" como argumentos, son utilizados para hacer lo 
siguiente.resolve se utiliza cuando quieres que tu promesa tenga éxito, y reject se usa cuando 
quieres que falle.Estos son métodos que toman un argumento, como se ve a continuación.

const myPromise = new Promise((resolve, reject) => {
    if (condition here) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
}
});

El ejemplo anterior utiliza cadenas como argumento de las funciones, pero podrían ser cualquier 
otra cosa.El argumento a menudo puede ser un objeto del cual utilizarás datos que mostrarás en tu 
sitio web o en otro lugar.

Haz una función promesa que maneje el éxito y el fallo.Si responseFromServer es true, llama al 
método resolve para completar satisfactoriamente la promesa.Pasa a resolve una cadena con el valor 
We got the data.Si responseFromServer es false, utiliza el método reject y devuelve la cadena: 
Data not received. */

const makeServerRequest1 = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer1;

    if (responseFromServer1) {
        // Cambia esta línea
        resolve('We got the data');
    } else {
        // Cambia esta línea
        reject('Data not received');
    }
});

console.log(makeServerRequest1);

/* Maneja una promesa cumplida usando then
Las promesas son muy útiles, cuando tu tienes un proceso que toma una cantidad de tiempo desconocida 
en tu código(algo asíncrono por ejemplo), a menudo una petición de servidor.Cuando tu haces una 
petición a un servidor, toma algo de tiempo, después de que termina, normalmente quieres hacer algo 
con la respuesta del servidor.Esto se puede lograr utilizando el método then.El método then, se 
ejecuta inmediatamente después de que tu promesa se cumple con resolve.A continuación un ejemplo: */

myPromise.then(result => {

});

/* result viene con el argumento proporcionado al método resolve.

Añade el método then a tu promesa.Usa result como parámetro de tu función callback, asimismo imprime 
result en la consola. */

const makeServerRequest2 = new Promise((resolve, reject) => {
    /* responseFromServer1 es establecido a true para representar una respuesta satisfactoria del 
    servidor */
    let responseFromServer2 = true;

    if (responseFromServer2) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest2.then(result => {
    console.log(result);

});

/* Maneja una promesa rechazada usando catch
catch es el método utilizado cuando tu promesa ha sido rechazada. Se ejecuta inmediatamente, 
después de que se llama al método reject de una promesa. A continuación la sintaxis: */

myPromise.catch(error => {

});

/* error es el argumento pasado al método reject.

Añade el método catch a tu promesa. Usa error como el parámetro de tu función callback e imprime 
error en la consola. */

const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
    let responseFromServer3 = false;

    if (responseFromServer3) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest3.catch(error => {
    console.log(error);
});