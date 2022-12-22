/* cSpell: disable; */

/* La programación funcional es otro enfoque común en el desarrollo de software.En programación 
funcional, el código está organizado en funciones más pequeñas y básicas que se pueden combinar 
para construir programas de mayor complejidad.

En este curso, aprenderás los conceptos básicos de programación funcional incluyendo funciones 
puras, cómo evitar mutaciones, y cómo escribir código más limpio con métodos como.map() y.filter(). 
*/

/* Aprende sobre programación funcional
La programación funcional es un estilo de programación donde las soluciones son simples, funciones 
aisladas, sin ningún efecto secundario fuera del ámbito de la función: INPUT -> PROCESS -> OUTPUT

La programación funcional se refiere a:

1) Funciones aisladas: sin dependencia alguna del estado del programa, el cual incluye variables 
globales sujetas a cambios

2) Funciones puras: una misma entrada siempre da la misma salida

3) Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del 
programa fuera de la función son cuidadosamente controlados

A los miembros de freeCodeCamp les encanta el té.

En el editor de código, las funciones prepareTea y getTea ya están definidas.Llama a la función 
getTea para obtener 40 tazas de té para el equipo y guárdalas en la variable tea4TeamFCC. */

// Función que retorna una cadena de texto representando una taza de té verde
const prepareTea = () => 'greenTea';

/*Dada una función (representando el tipo de té) y el número de tazas necesarias, la siguiente 
función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);
// Cambia solo el código encima de esta línea

/* Comprende la terminología de la programación funcional
El equipo de FCC tuvo un cambio de humor y ahora quiere dos tipos de té: té verde y té negro.Hecho 
general: Los cambios del estado de ánimo de los clientes son bastante concurrentes.

Con esa información, tendremos que volver a visitar la función getTea del último desafío para 
manejar varias solicitudes de té.Podemos modificar getTea para aceptar una función como parámetro y 
así poder cambiar el tipo de té que prepara.Esto hace que getTea sea más flexible y le da al 
programador más control cuando las solicitudes del cliente cambian.

Pero primero, cubramos alguna terminología de la programación funcional:

Callbacks son las funciones que se deslizan o pasan a otra función para decidir la invocación de 
esa función.Es posible que las hayas visto pasar a otros métodos, por ejemplo en filter, la función 
callback le dice a JavaScript los criterios para filtrar un arreglo.

Las funciones que pueden ser asignadas a una variable, pasadas a otra función o devueltas desde 
otra función como cualquier otro valor normal, se llaman funciones de primera clase.En JavaScript, 
todas las funciones son funciones de primera clase.

Las funciones que toman una función como argumento, o devuelven una función como valor de retorno, 
se denominan funciones higher order.

Cuando las funciones se pasan o se devuelven desde otra función, las funciones que se pasaron o 
devolvieron se pueden llamar lambda.

Prepara 27 tazas de té verde(green tea) y 13 tazas de té negro(black tea) y almacénalas en las 
variables tea4GreenTeamFCC y tea4BlackTeamFCC, respectivamente.Ten en cuenta que la función getTea 
ha sido modificada por lo que ahora recibe una función como primer argumento.

Nota: Los datos(el número de tazas de té) son suministrados como el último argumento.Discutiremos 
más sobre esto en lecciones posteriores. */

// Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => 'greenTea';

// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => 'blackTea';

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la siguiente función 
retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea1 = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13);
// Cambia solo el código encima de esta línea

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);

/* Comprende los peligros de usar el código imperativo
La programación funcional es un buen hábito.Mantiene tu código fácil de manejar y evita que tengas 
errores incómodos.Pero antes de llegar allí, veamos un enfoque imperativo de la programación para 
destacar dónde pueden tener problemas.

En inglés(y muchos otros idiomas), la tensión imperativa se utiliza para dar órdenes.De forma 
similar, un estilo imperativo en la programación es aquel que le da a la computadora un conjunto de 
sentencias para llevar a cabo una tarea.

A menudo las sentencias cambian el estado del programa, como actualizar variables globales.Un 
ejemplo clásico es escribir un bucle for que dé instrucciones exactas para iterar sobre los índices 
de un arreglo.

Por el contrario, la programación funcional es una forma de programación declarativa.Le dice al 
ordenador lo que quieres hacer llamando a un método o función.

JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes para que no necesites 
escribir cómo debe ejecutarlas el equipo.Por ejemplo, en lugar de usar el bucle for mencionado 
anteriormente se podría llamar al método map que maneja los detalles de iteración sobre un array.
Esto ayuda a evitar errores semánticos, como los "Off By One Errors" que fueron cubiertos en la 
sección Debugging.

Considere el escenario: está navegando por la web en su navegador y quiere rastrear las pestañas 
que ha abierto.Intentemos modelar esto con un código simple orientado a objetos.

Un objeto ventana está formado por pestañas y normalmente tienes más de una abierta.Los títulos de 
cada sitio abierto en cada objeto ventana se mantienen en un arreglo.Después de trabajar en el 
navegador(abriendo nuevas pestañas, combinando ventanas y cerrando pestañas), deseas imprimir las 
pestañas que todavía están abiertas.Las pestañas cerradas se eliminan de la matriz y las nuevas 
pestañas(por simplicidad) se añaden al final de la misma.

El editor de código muestra una implementación de esta funcionalidad con funciones para tabOpen(), 
tabClose()y join().El array tabs es parte del objeto ventana que almacena el nombre de las páginas 
abiertas.

Examine el código en el editor.Está utilizando un método que tiene efectos secundarios en el 
programa, causando un comportamiento incorrecto.La lista final de pestañas abiertas, almacenadas en 
finalTabs.tabs deberia ser: 
        ['FB', 
        'Gitter', 
        'Reddit', 
        'Twitter', 
        'Medium', 
        'new tab', 
        'Netflix', 
        'YouTube', 
        'Vine', 
        'GMail', 
        'Work mail', 
        'Docs', 
        'freeCodeCamp', 
        'new tab'] 
pero la lista producida por el código es un poco diferente.

Cambia Window.prototype.tabClose para que elimine la pestaña correcta. */

// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function (tabs) {
    this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

// Cuando unes dos ventanas en una
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
    return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function (index) {

    // Cambia solo el código debajo de esta línea
    const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
    const tabsAfterIndex = this.tabs.splice(1); // Obtiene las pestañas después de la pestaña
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos
    // Cambia solo el código encima de esta línea

    return this;
};

// Vamos a crear tres ventanas del navegador
const workWindow = new Window(['GMail', '😍Inbox😍', 'Work mail', 'Docs', 'freeCodeCamp']);
// Tu casilla de correo, drive y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
// Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', '😍Vimeo😍', 'Vine']);
// Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow
    .tabOpen() // Abre una nueva pestaña para memes de gatos
    .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
    .join(workWindow.tabClose(1).tabOpen());
// Cierra la segunda pestaña en workWindow y abre una nueva pestaña
console.log(finalTabs.tabs);

/* Evita mutaciones y efectos secundarios utilizando programación funcional
Si aún no te has dado cuenta, el problema en el desafío anterior estaba en la llamada splice de la 
función tabClose().Desafortunadamente, splice modifica el arreglo original a la que se llama, por 
lo que la segunda llamada a ella utilizo un arreglo modificado, y dio resultados inesperados.

Este es un pequeño ejemplo de un patrón mucho mayor: se llama a una función en una variable, 
arreglo o un objeto, y la función modifica la variable o algo en el objeto.

Uno de los principios fundamentales de la programación funcional es no cambiar las cosas.Los 
cambios conducen a errores.Es más fácil evitar errores sabiendo que las funciones no cambian nada, 
incluyendo los argumentos de la función o cualquier variable global.

El ejemplo anterior no tenía operaciones complicadas, pero el método splice modificó el arreglo 
original y dio como resultado en un error.

Recuerda que en la programación funcional, cambiar o alterar cosas se denomina mutación, y el 
resultado es conocido como efecto secundario.Una función, idealmente, debe ser una función pura, lo 
que significa que no provoca ningún efecto secundario.

Intentemos dominar esta disciplina y no alterar ninguna variable u objeto en nuestro código.

Completa el código de la función incrementer para que devuelva el valor de la variable global 
fixedValue incrementada en uno. */

// La variable global
let fixedValue = 4;

function incrementer() {
    // Cambia solo el código debajo de esta línea
    return fixedValue + 1;
    // Cambia solo el código encima de esta línea
}
console.log(incrementer());
console.log(fixedValue);

/* Pasa argumentos para evitar la dependencia externa en una función
El último reto fue un paso más cerca de los principios de la programación funcional, pero todavía 
falta algo.

No alteramos el valor global de la variable, pero la función incrementer no funcionaría sin que la 
variable global fixedValue estuviera allí.

Otro principio de programación funcional es declarar siempre sus dependencias de forma explícita.
Esto significa si una función depende de que una variable u objeto esté presente, después pasa esa 
variable u objeto directamente a la función como argumento.

Este principio tiene varias consecuencias positivas.La función es más fácil de probar, se sabe 
exactamente lo que necesita, y no dependerá de nada más en tu programa.

Esto puede darte más confianza cuando cambias, eliminas o agregas código nuevo.Sabrás lo que se 
puede o no se puede cambiar y, puedes ver dónde están los posibles trampas.

Finalmente, la función siempre produciría el mismo resultado para el mismo conjunto de entradas, 
sin importar qué parte del código la ejecute.

Actualicemos la función incrementer para declarar claramente sus dependencias.

Escribe la función incrementer para que reciba un argumento, y luego devuelva un resultado después 
de aumentar el valor en uno. */

// La variable global
let fixedValue1 = 4;

// Cambia solo el código debajo de esta línea
function incrementer1(dynamicValue) {
    return dynamicValue + 1;
    // Cambia solo el código encima de esta línea
}
console.log(incrementer1(fixedValue1));
console.log(fixedValue1);

/* Refactoriza variables globales por fuera de funciones
Hasta ahora, hemos visto dos principios distintos para la programación funcional:

1) No alteres una variable u objeto: crea nuevas variables y objetos y devuélvelos, si es 
necesario, desde una función.Pista: usar algo como const newArr = arrVar, donde arrVar es un 
arreglo, simplemente creará una referencia a la variable existente y no una copia.Así que cambiar 
un valor en newArr cambiaría el valor en arrVar.

2) Declara parámetros de función: cualquier cálculo dentro de una función depende sólo de los 
argumentos pasados a la función y no en ningún objeto o variable global.

Añadir uno a un número no es muy emocionante, pero podemos aplicar estos principios cuando 
trabajamos con arreglos u objetos más complejos.

Reescribe el código para que el arreglo global bookList no sea cambiado dentro de ninguna de las 
funciones.La función add debe agregar el bookName dado al final del arreglo pasado a esta y 
devolver un nuevo arreglo (lista).La función remove debe eliminar el bookName dado del arreglo 
pasado a esta.

Nota: ambas funciones deben devolver un arreglo y cualquier nuevo parámetro debe ser añadido antes 
del parámetro bookName. */

// La variable global
const bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"
];

// Cambia el código debajo de esta línea
function add(list, bookName) {
    let newList = [...list];
    newList.push(bookName);
    return newList;
    // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(list, bookName) {
    let newList = [...list];
    const book_index = newList.indexOf(bookName);
    if (book_index >= 0) {
        newList.splice(book_index, 1);
        return newList;
        // Cambia el código encima de esta línea
    }
}

console.log(add(bookList, "A Brief History of Time"));
/* ["The Hound of the Baskervilles", 
"On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", 
"Disquisitiones Arithmeticae", 
"A Brief History of Time"]. */
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
/* ["The Hound of the Baskervilles", 
"Philosophiæ Naturalis Principia Mathematica", 
"Disquisitiones Arithmeticae"]. */
console.log(remove(
    add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies")
);
/* ["The Hound of the Baskervilles", 
"Philosophiæ Naturalis Principia Mathematica", 
"Disquisitiones Arithmeticae", 
"A Brief History of Time"]. */

/* Usa el método "map" para extraer datos de un arreglo
Hasta ahora hemos aprendido a utilizar funciones puras para evitar efectos secundarios en un 
programa.Además, hemos aprendido el valor de tener una función que solo depende de sus argumentos 
de entrada.

Este es solo el principio.Como su nombre indica, la programación funcional se centra en una teoría 
de funciones.

Tendría sentido pasarlos como argumentos a otras funciones y devolver una función de otra función.
Las funciones se consideran first class objects en JavaScript, lo que significa que pueden ser 
usados como cualquier otro objeto.Pueden guardarse en variables, almacenarse en un objeto o pasarse 
como argumentos de función.

Empecemos con algunas funciones de arreglos simples, que son métodos en el prototipo de objetos del 
arreglo.En este ejercicio estamos utilizando Array.prototype.map() o más específicamente map.

El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene 
los resultados de llamar a la función callback en cada elemento.Esto lo hace sin mutar el arreglo 
original.

Cuando se utiliza la función callback, se pasan tres argumentos.El primer argumento es el elemento 
actual que se está procesando.El segundo es el índice de ese elemento y el tercero es el arreglo al 
que se llamó el método map.

A continuación se muestra un ejemplo con el método map en el arreglo users para devolver un nuevo 
arreglo que contiene solo los nombres de los usuarios como elementos.Para que sea más fácil, el 
ejemplo solo utiliza el primer argumento del callback. */

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names);

/* La consola mostraría el valor['John', 'Amy', 'camperCat'].

El arreglo watchList contiene objetos con información sobre varias películas.Usa map en watchList 
para asignar un nuevo arreglo de objetos a la variable ratings.Cada película en el nuevo arreglo 
debe tener solo una tecla title con el nombre de la película, y una tecla rating con la 
calificación IMDB.El código en el editor utiliza actualmente un bucle for para hacer esto, por lo 
que debes reemplazar la funcionalidad del bucle con tu expresión map. */

// La variable global
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Cambia solo el código debajo de esta línea
/* 
const ratings = [];
for (let i = 0; i < watchList.length; i++) {
    ratings.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
} 
*/
const ratings = watchList.map((film) => {
    return {
        title: film.Title,
        rating: film.imdbRating
    }
});
// Cambia solo el código encima de esta línea

console.log(JSON.stringify(ratings));
/* [
    { "title": "Inception", "rating": "8.8" }, 
    { "title": "Interstellar", "rating": "8.6" }, 
    { "title": "The Dark Knight", "rating": "9.0" }, 
    { "title": "Batman Begins", "rating": "8.3" }, 
    { "title": "Avatar", "rating": "7.9" }
] */

/* Implementa map en un prototipo
Como has visto anteriormente, al aplicar Array.prototype.map(), o simplemente map(), el método map 
devuelve un arreglo de la misma longitud que el arreglo dentro del que fue llamado.Esto tampoco 
altera el arreglo original, siempre y cuando su función callback no lo haga.
 
En otras palabras, map es una función pura, y su salida depende únicamente de sus entradas.Además, 
toma otra función como argumento.
 
Puedes aprender mucho sobre el método map si implementas tu propia versión.Se recomienda utilizar 
un bucle for o Array.prototype.forEach().
 
Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.
prototype.map().No debes utilizar el método incorporado map.Se puede acceder a la instancia de 
Array en el método myMap usando this. */

Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    // Cambia solo el código encima de esta línea
    return newArray;
};

console.log([23, 65, 98, 5, 13].myMap(item => item * 2));
//[46, 130, 196, 10, 26].
console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()));
//["NAOMI", "QUINCY", "CAMPERBOT"].
console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]));
//[1, 2, 5, 2, 1].

/* Usa el método de "filter" para extraer datos de un arreglo
Otra función útil de los arreglos es Array.prototype.filter() o simplemente filter().

filter Llama a una función sobre cada elemento del arreglo y devuelve un nuevo arreglo, conteniendo 
solo los elementos para los cuales la función devolvió un valor de verdadero - Es decir, un valor 
que devuelve true si paso al constructor Boolean().En otras palabras, filtra el arreglo, basándose 
en la función que se le pasa.Al igual que map, hace esto sin necesidad de modificar el arreglo 
original.

La función callback acepta tres argumentos.El primer argumento es el elemento actual que se está 
procesando.El segundo es el índice de ese elemento y el tercero es el arreglo sobre el que se llamó 
al método filter.

A continuación se muestra un ejemplo en el que se utiliza el método filter en el arreglo users para 
devolver un nuevo arreglo que contiene sólo a los usuarios menores de 30 años.Para que sea más 
fácil, el ejemplo solo utiliza el primer argumento de la función callback. */

const users1 = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);
/* La consola muestra el valor[{ name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 }].

La variable watchList contiene un arreglo de objetos con información sobre varias películas.Utiliza 
una combinación de filter y map en watchList para asignar un nuevo arreglo de objetos con solo 
title y rating claves.El nuevo arreglo solo debe incluir objetos donde imdbRating es mayor o igual 
a 8.0.Ten en cuenta que los valores rating se guardan como cadenas en el objeto y puedes necesitar 
convertirlos en números para realizar operaciones matemáticas en ellos. */

// Cambia solo el código debajo de esta línea

const filteredList = watchList
    .filter(list => list.imdbRating >= 8.0)
    .map(list => {
        return {
            title: list.Title,
            rating: list.imdbRating
        }
    });
// Cambia solo el código encima de esta línea

console.log(filteredList);

/* [{ "title": "Inception", "rating": "8.8" }, 
{ "title": "Interstellar", "rating": "8.6" }, 
{ "title": "The Dark Knight", "rating": "9.0" }, 
{ "title": "Batman Begins", "rating": "8.3" }] */

/* Implementa el método filter en un prototipo
Puedes aprender mucho sobre el método filter si implementas tu propia versión.Se recomienda 
utilizar un bucle for o Array.prototype.forEach().

Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.
filter().No debes utilizar el método incorporado filter.Se puede acceder a la instancia Array en el 
método myFilter usando this. */

Array.prototype.myFilter = function (callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    // Cambia solo el código encima de esta línea
    return newArray;
};

console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
//[23, 65, 5, 13].
console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));
//["naomi"].
console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index));
//[1, 2, 5].

/* Devolver parte de un arreglo mediante el método slice
El método slice devuelve una copia de ciertos elementos de un arreglo.Puede tomar dos argumentos, 
el primero da el índice de dónde comenzar el corte, el segundo es el índice de dónde terminar el 
corte(y no es inclusivo).Si no se proporcionan los argumentos, el valor predeterminado es comenzar 
desde el principio del arreglo hasta el final, la cual es una manera fácil de hacer una copia de 
todo el arreglo.El método slice no muta el arreglo original, pero devuelve uno nuevo.

Por ejemplo: */

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
console.log(newArray);

/* newArray tendría el valor de["Dog", "Tiger"].

Utiliza el método slice en la función sliceArray para retornar parte del arreglo anim dados los 
índices beginSlice y endSlice.La función debe devolver un arreglo. */

function sliceArray(anim, beginSlice, endSlice) {
    // Cambia solo el código debajo de esta línea
    const newAnim = anim.slice();
    return newAnim.slice(beginSlice, endSlice);
    // Cambia solo el código encima de esta línea
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3));
//["Dog", "Tiger"].
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1));
//["Cat"].
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4));
//["Dog", "Tiger", "Zebra"].
console.log(inputAnim);

/* Remueve elementos de un arreglo usando slice en lugar de splice
Un patrón común al trabajar con arreglos es cuando deseas eliminar elementos y conservar el resto 
del arreglo.JavaScript ofrece el método splice para esto, que toma argumentos para el índice de 
dónde comenzar a eliminar elementos, luego la cantidad de elementos para eliminar.Si no se 
proporciona el segundo argumento, el valor predeterminado es eliminar elementos hasta el final.Sin 
embargo, el método splice muta el arreglo original en el que se llama.Por ejemplo: */

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(cities.splice(3, 1));
console.log(cities);

/* Aquí splice devuelve la "string" London y la elimina del arreglo cities.cities tendrá el valor 
de["Chicago", "Delhi", "Islamabad", "Berlin"].

Como vimos en el último desafío, el método slice no muta el arreglo original, pero devuelve uno 
nuevo que puede ser guardado en una variable.Recuerda que el método slice recibe dos argumentos 
para indicar el comienzo y el final del segmento(el final es no inclusivo) y retorna estos 
elementos en un nuevo arreglo.Usar el método slice en lugar de splice ayuda a prevenir cualquier 
efecto colateral de mutar un arreglo.

Reescribe la función nonMutatingSplice usando slice en lugar de splice.Debe limitar el arreglo 
proporcionado cities a una longitud de 3 y devolver un nuevo arreglo con solo los primeros tres 
elementos.

No modifiques el arreglo original proporcionado en la función. */

function nonMutatingSplice(cities) {
    // Cambia solo el código debajo de esta línea
    return cities.slice(0, 3);
    // Cambia solo el código encima de esta línea
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
console.log(inputCities);

/* Combina dos arreglos utilizando el método "concat"
Concatenation significa unir elementos de extremo a extremo.JavaScript ofrece el método concat para 
cadenas y arreglos, que funciona de la misma manera.Para arreglos, el método es llamado desde un 
arreglo, un segundo arreglo es proporcionado como argumento de concat, este se añadirá al final del 
primer arreglo.Devuelve un nuevo arreglo, sin mutar ninguno de los arreglos originales.Aquí hay un 
ejemplo: */

console.log([1, 2, 3].concat([4, 5, 6]));

/* El arreglo devuelto sería[1, 2, 3, 4, 5, 6].

Usa el método concat en la función nonMutatingConcat para concatenar attach al final de original.La 
función deber devolver el arreglo concatenado. */

function nonMutatingConcat(original, attach) {
    // Cambia solo el código debajo de esta línea
    return original.concat(attach);
    // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));
console.log(first);
console.log(second);

/* Agrega elementos al final de un arreglo utilizando concat en lugar de push
La programación funcional consiste en crear y utilizar funciones no mutantes.

En el reto anterior se introdujo el método concat como una forma de unir varios arreglos en uno 
nuevo sin alterar los arreglos originales.Compara concat con el método push.push añade elementos al 
final del propio arreglo sobre el que es invocado, alterando dicho arreglo.Aquí hay un ejemplo: */

const arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1);

/* arr habría sido modificado a[1, 2, 3, 4, 5, 6], hecho que no cumple con los principios de la 
programación funcional.

concat ofrece una manera de unir nuevos elementos al final del arreglo sin ningún efecto colateral.

Cambia la función nonMutatingPush de manera que utilice concat para unir newItem al final de 
original sin alterar los arreglos original o newItem.La función debe devolver un arreglo. */

function nonMutatingPush(original, newItem) {
    // Cambia solo el código debajo de esta línea
    return original.concat(newItem);
    // Cambia solo el código encima de esta línea
}

const first1 = [1, 2, 3];
const second1 = [4, 5];
console.log(nonMutatingPush(first1, second1));
console.log(first1);
console.log(second1);

/* Utiliza el método "reduce" para analizar datos
Array.prototype.reduce() o simplemente reduce() es la operación más común de todas para arreglos en 
JavaScript.Se puede resolver casi cualquier problema de procesamiento de arreglos utilizando el 
método reduce.

El método reduce permite formas más generales de procesamiento de arreglos y es posible mostrar que 
tanto filter como map pueden derivarse como aplicaciones especiales de reduce.El método reduce 
itera sobre cada elemento del arreglo y devuelve un solo valor(por ejemplo una cadena, número, 
objeto, arreglo).Esto se consigue mediante una función callback que se llama en cada iteración.

La función callback acepta cuatro argumentos.El primer argumento se conoce como acumulador, que 
recibe el valor retornado de la función callback de la iteración anterior, el segundo es el 
elemento actual que se está procesando, el tercero es el índice de ese elemento y el cuarto es el 
arreglo sobre el que se llama a la función reduce.

Además de la función callback, reduce tiene un parámetro adicional que toma un valor inicial para 
el acumulador.Si este segundo parámetro no se utiliza, entonces la primera iteración se omite y la 
segunda se pasa por el primer elemento del arreglo como acumulador.

Mira a continuación un ejemplo con reduce en el arreglo users para devolver la suma de todas las 
edades de los usuarios.Para hacerlo más fácil, el ejemplo sólo utiliza el primer y segundo 
argumento. */

const users2 = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const sumOfAges = users2.reduce((sum, user2) => sum + user2.age, 0);
console.log(sumOfAges);

/* La consola mostrará el valor 64.

En otro ejemplo, se puede observar cómo un objeto puede ser devuelto con los nombres de los 
usuarios como propiedades con las edades como valores. */

const users3 = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const usersObj = users3.reduce((obj, user3) => {
    obj[user3.name] = user3.age;
    return obj;
}, {});
console.log(usersObj);

/* La consola mostrará el valor { John: 34, Amy: 20, camperCat: 10 }.

La variable watchList contiene un arreglo de objetos con información sobre varias películas.Utiliza 
reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher 
Nolan.Recuerda de desafíos anteriores filtrar(filter) los datos y mapear(map) sobre ellos para 
extraer lo que necesitas.Puede que necesites crear otras variables y devolver la calificación media 
con la función getRating.Ten en cuenta que los valores de calificación se guardan como cadenas en 
el objeto y necesitan ser convertidos en números antes de ser utilizados en cualquier operación 
matemática. */


function getRating(watchList) {
    // Cambia solo el código debajo de esta línea

    // Se usa filter para buscar todas las peliculas de Christopher Nolan
    const filmsDirectedBy = watchList.filter(film => film.Director === "Christopher Nolan");
    console.log(filmsDirectedBy);
    // Se usa map para convertir todos los ratings a numeros
    const ratingsTurnedIntoNumbers = filmsDirectedBy.map(film => Number(film.imdbRating));
    console.log(ratingsTurnedIntoNumbers);
    // Largo del array de ratings
    const ratingsLength = ratingsTurnedIntoNumbers.length;
    console.log(ratingsLength);
    // Se usa reduce para calular la suma de los ratings
    const sumRatings = ratingsTurnedIntoNumbers.reduce((sum, rating) => sum + rating);
    console.log(sumRatings);
    // Se calula la calificación media del rating
    let averageRating = sumRatings / ratingsLength;

    // Cambia solo el código encima de esta línea
    return averageRating;
}

console.log(getRating(watchList));//8.675.

/* Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema 
complejo
Ahora que has superado algunos desafíos usando funciones de orden superior como map(), filter(), y 
reduce(), ahora puedes aplicarlos para resolver un desafío más complejo.

Completa el código para la función squareList usando cualquier combinación de map(), filter(), y 
reduce().La función debe devolver un nuevo arreglo que contenga los cuadrados de solamente los 
enteros positivos(números decimales no son enteros) cuando se le pasa un arreglo de números reales.
Un ejemplo de un arreglo que contiene números reales es[-3, 4.8, 5, 3, -3.2].

Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach(). */

const squareList = arr => {
    // Cambia solo el código debajo de esta línea
    return arr
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => num * num);;
    // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);//[25, 9].
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));
//[16, 1764, 36].
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));
//[9, 100, 49].

/* Ordena un arreglo alfabéticamente con el método sort
El método sort ordena los elementos de un arreglo de acuerdo a la función callback.

Por ejemplo: */

function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

console.log(ascendingOrder([1, 5, 2, 3, 4]));
// Esto devolvería el valor de[1, 2, 3, 4, 5].

function reverseAlpha(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}

console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));
/* Esto devolvería el valor de['z', 's', 'l', 'h', 'b'].

Por defecto, JavaScript ordena basándose en el valor "Unicode" de la cadena de caracteres, lo cual 
puede dar resultados inesperados.Por lo tanto, se recomienda proporcionar una función callback para 
especificar como se deben ordenar los elementos del arreglo.Cuando se proporciona dicha función 
callback, normalmente llamada compareFunction, los elementos del arreglo se ordenan de acuerdo al 
valor que devuelve la función compareFunction: Si compareFunction(a, b) devuelve un valor menor que 
0 para dos elementos a y b, entonces a irá antes que b.Si compareFunction(a, b) devuelve un valor 
mayor a 0 para dos elementos a y b, entonces b irá antes que a.Si compareFunction(a, b) devuelve un 
valor igual a 0 para dos elementos a y b, entonces a y b se dejarán sin cambios.

Utiliza el método sort en la función alphabeticalOrder para ordenar los elementos de arr en orden 
alfabético.La función debe devolver el arreglo ordenado. */

function alphabeticalOrder(arr) {
    // Cambia solo el código debajo de esta línea
    return arr.sort()
    // Cambia solo el código encima de esta línea
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
//["a", "a", "c", "d", "g", "z"].
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));
//["a", "h", "m", "m", "n", "x"].
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));
//["a", "a", "a", "a", "t", "x"].

/* Devuelve un arreglo ordenado sin cambiar el arreglo original
Un efecto secundario del método sort es que cambia el orden de los elementos en el arreglo original.
En otras palabras, muta el arreglo en su sitio.Una forma de evitar esto es concatenar primero un 
arreglo vacío al que está siendo ordenado(recuerda que slice y concat devuelven un nuevo arreglo), 
luego ejecutar el método sort.

Utiliza el método sort en la función nonMutatingSort para ordenar los elementos de un arreglo en 
orden ascendente.La función debe devolver un nuevo arreglo y no mutar la variable globalArray. */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Cambia solo el código debajo de esta línea
    let newArray = [];
    return newArray
        .concat(arr)
        .sort(function (a, b) {
            return a - b;
        });
    // Cambia solo el código encima de esta línea
}

console.log(nonMutatingSort(globalArray));//[2, 3, 5, 6, 9].
console.log(globalArray);
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));//[1, 4, 21, 30, 100000].
console.log(nonMutatingSort([140000, 104, 99]));//[99, 104, 140000].
