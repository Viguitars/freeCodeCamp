/* cSpell: disable; */

/* Expresiones regulares
Expresiones regulares, a veces acortadas a "regex" o "regexp", son patrones que ayudan a los 
programadores a encontrar, buscar, y reemplazar texto.Las expresiones regulares son muy potentes, 
pero pueden ser difícil de leer porque usan caracteres especiales para hacer coincidencias más 
complejas y flexibles.

En este curso, aprenderás como usar caracteres especiales, grupos de captura, miradas positivas y 
negativas, así como otras técnicas para hacer coincidir cualquier texto que quieras. */

/* Usa el método "test"
Las expresiones regulares se utilizan en lenguajes de programación para coincidir con partes de 
cadenas.Creas patrones para ayudarte a hacer esa coincidencia.

Si quieres encontrar la palabra the en la cadena The dog chased the cat, puedes utilizar la 
siguiente expresión regular: /the/.Ten en cuenta que las comillas no son requeridas dentro de la 
expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares.Una forma de probar una expresión 
regular es usando el método.test().El método.test() toma la expresión regular, la aplica a una 
cadena(que se coloca dentro de los paréntesis), y devuelve true o false si tu patrón encuentra algo 
o no. */

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));

/* El método test aquí devuelve true.

Aplica la expresión regular myRegex en la cadena myString usando el método.test(). */

let myString = "Hello, World!";
let myRegex = /Hello/;
//let result = myRegex; // Cambia esta línea
let result = myRegex.test(myString);
console.log(result);

/* Haz coincidir cadenas literales
En el desafío anterior, buscaste la palabra Hello usando la expresión regular / Hello /.Esa 
expresión regular buscó una coincidencia literal de la cadena Hello.Aquí hay otro ejemplo donde se 
busca una coincidencia literal de la cadena Kevin: */

let testStr1 = "Hello, my name is Kevin.";
let testRegex1 = /Kevin/;
console.log(testRegex1.test(testStr1));

/* Esta llamada a test devolverá true.

Cualquier otra variante de Kevin no coincidirá.Por ejemplo, la expresión regular / Kevin / no 
coincidirá con kevin o KEVIN. */

let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr1));

/* Esta llamada a test devolverá false.

Un futuro desafío también mostrará cómo coincidir esas otras variantes.

Completa la expresión regular waldoRegex para encontrar "Waldo" en la cadena waldoIsHiding con una 
coincidencia literal. */

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
//let waldoRegex = /search/; // Cambia esta línea
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding);
console.log(result1);

/* Coincide una cadena literal con diferentes posibilidades
Al utilizar expresiones regulares como / coding /, puedes buscar el patrón coding en otra cadena.

Esto es muy potente al buscar cadenas individuales, pero está limitado a un solo patrón.Puedes 
buscar múltiples patrones usando el operador alternation o OR: |.

Este operador coincide con los patrones antes o después de él.Por ejemplo, si deseas coincidir con 
las cadenas yes o no, la expresión regular que quieres es / yes | no /.

También puedes buscar más de dos patrones.Puedes hacer esto añadiendo más patrones con más 
operadores OR separándolos, como / yes | no | maybe /.

Completa la expresión regular petRegex para que coincida con las mascotas dog, cat, bird, o fish. */

let petString = "James has a pet cat.";
// let petRegex = /change/; // Cambia esta línea
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);
console.log(result2);

/* Ignora la capitalización al coincidir
Hasta ahora, has visto expresiones regulares para hacer coincidir cadenas literales.Pero a veces, 
tal vez quieras hacer coincidir las diferencias de capitalización.

La capitalización(o también llamada capitalización de letra) es la diferencia entre mayúsculas y 
minúsculas.Ejemplos de mayúsculas son A, B y C.Ejemplos de minúsculas son a, b y c.

Puedes coincidir ambos casos utilizando algo llamado bandera.Existen otras banderas, pero aquí te 
centrarás en la que ignora la capitalización de las letras, la bandera i.Puedes usarla añadiéndola a 
la expresión regular.Un ejemplo de uso de esta bandera es / ignorecase / i.Esta expresión regular 
puede coincidir con las cadenas ignorecase, igNoreCase e IgnoreCase.

Escribe una expresión regular fccRegex para que coincida con freeCodeCamp sin importar su 
capitalización.Tu expresión regular no debe coincidir con ninguna abreviatura o variación con 
espacios. */

let myString1 = "freeCodeCamp";
// let fccRegex = /change/; // Cambia esta línea
let fccRegex = /freeCodeCamp/i;
let result3 = fccRegex.test(myString1);
console.log(result3);

/* Extrae coincidencias
Hasta ahora, sólo has estado comprobando si un patrón existe o no dentro de una cadena.También 
puedes extraer las coincidencias encontradas con el método.match().

Para utilizar el método.match(), aplica el método a una cadena y pasa la expresión regular dentro de 
los paréntesis.

Este es un ejemplo: */

"Hello, World!".match(/Hello/);
console.log("Hello, World!".match(/Hello/));
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
console.log(ourStr.match(ourRegex));

/* Aquí el primer match devolverá["Hello"] y el segundo devolverá["expressions"].

Ten en cuenta que la sintaxis.match es lo "opuesto" al método.test que has estado utilizando hasta 
ahora: */

'string'.match(/regex/);
/regex/.test('string');

// Aplica el método.match() para extraer la cadena coding.

let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /change/; // Cambia esta línea
// let result = extractStr; // Cambia esta línea
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);
console.log(result4);

/* Encuentra más que la primera coincidencia
Hasta ahora, sólo has podido extraer o buscar un patrón una vez. */

let testStr2 = "Repeat, Repeat, Repeat";
let ourRegex1 = /Repeat/;
console.log(testStr2.match(ourRegex1));

/* Aquí match devolverá["Repeat"].

Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera g.
 */
let repeatRegex = /Repeat/g;
console.log(testStr2.match(repeatRegex));

/* Y aquí match devuelve el valor["Repeat", "Repeat", "Repeat"]

Utilizando la expresión regular starRegex, encuentra y extrae ambas palabras Twinkle de la cadena 
twinkleStar.
    Nota: En tu expresión regular puedes utilizar múltiples banderas, como / search / gi */

let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /change/; // Cambia esta línea
// let result = twinkleStar; // Cambia esta línea
let starRegex = /Twinkle/gi;
let result5 = twinkleStar.match(starRegex);
console.log(result5);

/* Haz coincidir cualquier cosa con el comodín punto
A veces no conoces(o no necesitas conocer) los caracteres exactos en tus patrones.Pensar en todas 
las palabras que coincidan, digamos, con una ortografía errónea llevaría mucho tiempo.
Afortunadamente, puedes ahorrar tiempo utilizando el carácter de comodín: '.'

El carácter de comodín'.'coincidirá con cualquier carácter único.El comodín también es llamado dot y 
period.Puedes utilizar el carácter de comodín como cualquier otro carácter en la expresión regular.
Por ejemplo, si quieres hacer coincidir hug, huh, hut, y hum, puedes usar la expresión regular 
/ hu./ para que coincida con las cuatro palabras. */

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));

/* Ambas llamadas a test devolverán true.

Completa la expresión regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y 
bun.Tu expresión regular debe usar el carácter de comodín. */

let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /change/; // Cambia esta línea
let unRegex = /.un/;
let result6 = unRegex.test(exampleStr);
console.log(result6);

/* Haz coincidir un solo carácter con múltiples posibilidades
Aprendiste cómo hacer coincidir los patrones literales(/literal/) y el carácter de comodín(/./).
Estos son los extremos de las expresiones regulares, donde uno encuentra coincidencias exactas y el 
otro coincide de todo.Hay opciones que representan un equilibrio entre los dos extremos.

Puedes buscar un patrón literal con cierta flexibilidad utilizando las clases de caracteres.Las 
clases de caracteres te permiten definir un grupo de caracteres que deseas coincidir colocándoles 
dentro de corchetes([y]).

Por ejemplo, si quieres hacer coincidir bag, big, y bug pero no bog.Puedes crear la expresión 
regular / b[aiu]g / para hacer esto. [aiu] es la clase de caracteres que solo coincidirá con los 
caracteres a, i, o u. */

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

/* En orden, las cuatro llamadas de match devolverán los valores["big"], ["bag"], ["bug"], and null.

Usa una clase de caracteres con las vocales(a, e, i, o u) en tu expresión regular vowelRegex para 
encontrar todas las vocales en la cadena quoteSample.

    Nota: Asegúrate de hacer coincidir tanto las vocales mayúsculas como minúsculas. */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /change/; // Cambia esta línea
// let result7 = vowelRegex; // Cambia esta línea
let vowelRegex = /[aeiou]/gi;
let result7 = quoteSample.match(vowelRegex);
console.log(result7);

/* Haz coincidir las letras del alfabeto
Has visto cómo puedes usar los conjuntos de caracteres para especificar un grupo de caracteres a 
coincidir, pero eso requiere escribir mucho cuando necesitas coincidir con un amplio rango de 
caracteres(por ejemplo, cada letra en el alfabeto).Afortunadamente, hay una funcionalidad 
incorporada que hace esto corto y sencillo.

Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a coincidir usando un 
carácter de guion: -.

Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e usarías[a - e]. */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex1 = /[a-e]at/;
console.log(catStr.match(bgRegex1));
console.log(batStr.match(bgRegex1));
console.log(matStr.match(bgRegex1));

/* En orden, las tres llamadas a match devolverán los valores["cat"], ["bat"] y null.

Haz coincidir todas las letras en la cadena quoteSample.

    Nota: Asegúrate de hacer coincidir tanto las letras mayúsculas como minúsculas. */

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /change/; // Cambia esta línea
// let result = alphabetRegex; // Cambia esta línea
let alphabetRegex = /[a-z]/gi;
let result8 = quoteSample1.match(alphabetRegex);
console.log(result8);

/* Haz coincidir los números y las letras del alfabeto
Usar el guion(-) para coincidir con un rango de caracteres no está limitado a letras.También 
funciona para hacer coincidir un rango de números.

Por ejemplo, /[0-5]/ coincide con cualquier número entre 0 y 5, incluyendo 0 y 5.

Además, es posible combinar un rango de letras y números en un único conjunto de caracteres. */

let jennyStr = "Jenny8675309";
let myRegex1 = /[a-z0-9]/gi;
console.log(jennyStr.match(myRegex1));

/* Crea una sola expresión regular que coincida con un rango de letras entre h y s, y un rango de 
números entre 2 y 6. Recuerda incluir las banderas apropiadas en la expresión regular. */

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
// let myRegex = /change/; // Cambia esta línea
// let result = myRegex; // Cambia esta línea
let myRegex2 = /[h-s2-6]/gi;
let result9 = quoteSample2.match(myRegex2);
console.log(result9);

/* Haz coincidir caracteres individuales no especificados
Hasta ahora, has creado un conjunto de caracteres que deseas coincidir, pero también podrías crear 
un conjunto de caracteres que no desees coincidir.Este tipo de conjuntos de caracteres se llaman 
conjuntos de caracteres negados.

Para crear un conjunto de caracteres negados colocas un carácter de intercalación(^) después del 
corchete de apertura y antes de los caracteres que no quieres coincidir.

Por ejemplo, /[^aeiou]/gi coincide con todos los caracteres que no son una vocal.Ten en cuenta que 
caracteres como., !, [, @, / y el espacio en blanco coinciden; el conjunto de caracteres de vocal 
negados sólo excluye los caracteres de vocal.

Crea una sola expresión regular que coincida con todos los caracteres que no son un número o una 
vocal.Recuerda incluir las banderas apropiadas en la expresión regular. */

let quoteSample3 = "3 blind mice.";
// let myRegex3 = /change/; // Cambia esta línea
// let result10 = myRegex3; // Cambia esta línea
let myRegex3 = /[^0-9aeiou]/gi;
let result10 = quoteSample3.match(myRegex3);
console.log(result10);

/* Haz coincidir caracteres que aparecen una o más veces
A veces, es necesario coincidir con un carácter(o grupo de caracteres) que aparezca una o más veces 
seguidas.Esto significa que aparece al menos una vez, y puede repetirse.

Puedes usar el carácter + para comprobar si es así.Recuerda, el carácter o patrón debe estar 
presente consecutivamente.Es decir, el carácter tiene que repetirse uno tras otro.

Por ejemplo, /a+/g encontraría una coincidencia en abc y regresaría["a"].Debido al +, también 
encontraría una sola coincidencia en aabc y regresaría["aa"].

Si en su lugar estuvieras comprobando la cadena abab, se encontrarían dos coincidencias y regresaría
["a", "a"] porque los caracteres a no están en fila; hay una b entre ellos.Finalmente, dado que no 
hay una a en la cadena bcd, no se encontraría una coincidencia.

Quieres encontrar coincidencias cuando la letra s ocurre una o más veces en Mississippi.Escribe una
expresión regular que utilice el signo +. */

let difficultSpelling = "Mississippi";
// let myRegex4 = /change/; // Cambia esta línea
let myRegex4 = /s+/gi;
let result11 = difficultSpelling.match(myRegex4);
console.log(result11);

/* Haz coincidir caracteres que aparecen cero o más veces
El último desafío utilizó el signo más + para buscar caracteres que aparecen una o más veces.También 
hay una opción para hacer coincidir caracteres que aparecen cero o más veces.

El carácter que hace esto es el asterisco o la estrella: *. */

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

/* En orden, los tres match devolverán los valores["goooooooo"], ["g"], y null.

Para este desafío, chewieQuote ha sido inicializada entre bastidores con la cadena 
Aaaaaaaaaaaaaaaarrrgh!.Crea una expresión regular chewieRegex que utilice el carácter * para 
encontrar el carácter A mayúscula seguido inmediatamente por cero o más caracteres 'a' minúscula en 
chewieQuote.Tu expresión regular no necesita banderas o clases de caracteres, y no debe coincidir 
con ninguna de las otras comillas. */

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// Cambia solo el código debajo de esta línea
// let chewieRegex = /change/; // Cambia esta línea
let chewieRegex = /A[a]*/;
// Cambia solo el código encima de esta línea
let result12 = chewieQuote.match(chewieRegex);
console.log(result12);

/* Encuentra caracteres con una coincidencia perezosa
En las expresiones regulares, una coincidencia codiciosa encuentra la parte más larga posible de una 
cadena que se ajusta al patrón de la expresión regular y la devuelve como una coincidencia.La 
alternativa es llamada coincidencia perezosa, la cual encuentra la parte más pequeña posible de la 
cadena que satisface el patrón de la expresión regular.

Puedes aplicar la expresión regular / t[a - z] * i / a la cadena "titanic".Esta expresión regular es 
básicamente un patrón que comienza con t, termina con i, y tiene algunas letras intermedias.

Las expresiones regulares son por defecto codiciosas, por lo que la coincidencia 
["titani"].Encuentra la sub - cadena más grande posible que se ajusta al patrón.

Sin embargo, puedes usar el carácter ? para cambiarla a una coincidencia perezosa. "titanic" al 
coincidir con la expresión regular ajustada de / t[a - z] *? i / devuelve["ti"].

    Nota : Se debe evitar analizar HTML con expresiones regulares, pero coincidir patrones con una 
    cadena HTML utilizando expresiones regulares está completamente bien.

Corrige la expresión regular /<.*> / para que devuelva la etiqueta HTML <h1> y no el texto 
"<h1>Winter is coming</h1 > ". Recuerda que el comodín '.' en una expresión regular coincide con 
cualquier carácter. */

let text = "<h1>Winter is coming</h1>";
// let myRegex5 = /<.*>/; // Cambia esta línea
let myRegex5 = /<.*?>/;
let result13 = text.match(myRegex5);
console.log(result13);

/* Encuentra uno o más criminales en una cacería
Es hora de hacer una pausa y probar tus nuevas habilidades para escribir expresiones regulares.Un 
grupo de criminales se han escapado de la cárcel, pero no sabes cuántos.Sin embargo, sabes que 
permanecen unidos cuando están alrededor de otras personas.Eres responsable de encontrar a todos 
los criminales a la vez.

Este es un ejemplo para revisar cómo hacer esto:

La expresión regular / z + / coincide con la letra z cuando aparece una o más veces seguidas. 
Encontrará coincidencias en las siguientes cadenas: */

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

// Pero no encuentra coincidencias en las siguientes cadenas, ya que no hay letras z:

""
"ABC"
"abcabc"

/* Escribe una expresión regular codiciosa que encuentre uno o más criminales dentro de un grupo de 
personas.Un criminal está representado por la letra mayúscula C. */

let reCriminals = /C+/;

/* Haz coincidir patrones de cadena de inicio
Los desafíos anteriores demostraron que las expresiones regulares pueden ser utilizadas para buscar 
una serie de coincidencias.También se utilizan para buscar patrones en posiciones específicas en 
cadenas.

En un desafío anterior, usaste el carácter caret(^) dentro de un conjunto de caracteres para crear 
un conjunto de caracteres en la forma[^ thingsThatWillNotBeMatched].Fuera de un conjunto de 
caracteres, el caret es utilizado para buscar patrones al principio de las cadenas. */

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));

/* La primera llamada test devolverá true, mientras que la segunda retornara false.

Usa el carácter caret en una expresión para buscar Cal solo al principio de la cadena rickyAndCal.*/

let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /change/; // Cambia esta línea
let calRegex = /^Cal/;
let result14 = calRegex.test(rickyAndCal);
console.log(result14);

/* Haz coincidir patrones de cadena final
En el último desafío, aprendiste a usar el carácter de intercalación para buscar patrones al inicio 
de las cadenas.También hay una manera de buscar patrones al final de las cadenas.

Puedes buscar el final de las cadenas usando el carácter del signo de dólar $ al final de la 
expresión regular. */

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));

/* La primera llamada a test devuelve true, mientras que la segunda retorna false.

Usa el carácter de ancla($) para coincidir la cadena caboose al final de la cadena caboose. */

let caboose = "The last car on a train is the caboose";
// let lastRegex = /change/; // Cambia esta línea
let lastRegex = /caboose$/;
let result15 = lastRegex.test(caboose);
console.log(result15);

/* Coincide todas las letras y números
Usando clases de caracteres, pudiste buscar todas las letras del alfabeto con[a - z].Este tipo de 
clase de caracteres es tan común que existe un atajo para él, aunque también incluye algunos 
caracteres adicionales.

La clase de caracteres más cercana en JavaScript para coincidir con el alfabeto es \w.Este atajo 
equivale a[A - Za - z0 -9_].Esta clase de caracteres coincide con letras mayúsculas y minúsculas más 
números.Ten en cuenta que esta clase de caracteres también incluye el carácter de guion bajo(_). */

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

/* Las cuatro llamadas a test devolverán true.

Estos atajos de clases de caracteres también son conocidos como clases de caracteres abreviados.

Utiliza la clase de caracteres abreviada \w para contar el número de caracteres alfanuméricos en 
varias citas y cadenas. */

let quoteSample4 = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /change/; // Cambia esta línea
let alphabetRegexV2 = /\w/g;
let result16 = quoteSample4.match(alphabetRegexV2).length;
console.log(result16);

/* Haz coincidir todo menos letras y números
Has aprendido que puedes usar un atajo para emparejar alfanuméricos[A - Za - z0 -9_] usando \w.Un 
patrón natural que tal vez quieras buscar es lo contrario a la alfanumérica.

Puedes buscar lo contrario de \w con \W.Ten en cuenta, el patrón contrario usa letra mayúscula.Este 
atajo es lo mismo que[^ A - Za - z0 -9_]. */

let shortHand1 = /\W/;
let numbers1 = "42%";
let sentence = "Coding!";
console.log(numbers1.match(shortHand1));
console.log(sentence.match(shortHand1));

/* El primer match devuelve el valor["%"] y el segundo devuelve["!"].

Usa la clase de caracteres abreviados \W para contar el número de caracteres no alfanuméricos en 
varias comillas y cadenas. */

let quoteSample5 = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /change/; // Cambia esta línea
let nonAlphabetRegex = /\W/g;
let result17 = quoteSample5.match(nonAlphabetRegex).length;
console.log(result17);

/* Coincide con todos los números
Has aprendido atajos para patrones de cadenas comunes como los alfanuméricos.Otro patrón común es 
buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es \d, con una d minúscula.Esto es igual a la clase de 
caracteres[0 - 9], la cual busca un solo carácter de cualquier número entre cero y nueve.

Usa la clase de caracteres abreviada \d para contar cuántos dígitos hay en los títulos de las 
películas.Los números escritos("seis" en lugar de 6) no cuentan. */

let movieName = "2001: A Space Odyssey";
// let numRegex = /change/; // Cambia esta línea
let numRegex = /\d/g;
let result18 = movieName.match(numRegex).length;
console.log(result18);

/* Coincide con todos los caracteres no numéricos
El último desafío mostró cómo buscar dígitos usando el atajo \d con una d minúscula.También puedes 
buscar caracteres que no sean dígitos usando un atajo similar que utilice una D mayúscula en su 
lugar.

El atajo para buscar caracteres que no sean dígitos es \D.Esto es igual a la clase de caracteres
[^ 0 - 9], el cual busca un único carácter que no sea un número entre cero y nueve.

Usa la clase de caracteres abreviada \D para contar cuántos caracteres que no sean dígitos hay en 
los títulos de las películas. */

let movieName1 = "2001: A Space Odyssey";
// let noNumRegex = /change/; // Cambia esta línea
let noNumRegex = /\D/g;
let result19 = movieName.match(noNumRegex).length;
console.log(result19);

/* Restringe posibles nombres de usuario
Los nombres de usuario se utilizan en todas partes en Internet.Son los que dan a los usuarios una 
identidad única en tus sitios favoritos.

Se necesita comprobar todos los nombres de usuario en una base de datos.Estas son algunas reglas s
imples que los usuarios deben seguir al crear su nombre de usuario.

        1. Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

        2. Los únicos números del nombre de usuario tienen que estar al final.Puede tener un cero o 
        más al final.El nombre de usuario no puede iniciar con un número.

        3. Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

        4. Los nombres de usuario deben tener al menos dos caracteres.Un nombre de usuario de dos 
        caracteres sólo puede utilizar letras del alfabeto como caracteres.

Cambia la expresión regular userCheck para que se ajuste a las restricciones indicadas 
anteriormente. */

let username = "JackOfAllTrades";
// let userCheck = /change/; // Cambia esta línea
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result20 = userCheck.test(username);
console.log(result20);

username = "JACK";
console.log(userCheck.test(username));//debe coincidir con la cadena JACK
username = "J";
console.log(userCheck.test(username));//no debe coincidir con la cadena J
username = "Jo";
console.log(userCheck.test(username));//debe coincidir con la cadena Jo
username = "Oceans11";
console.log(userCheck.test(username));//debe coincidir con la cadena Oceans11
username = "RegexGuru";
console.log(userCheck.test(username));//debe coincidir con la cadena RegexGuru
username = "007";
console.log(userCheck.test(username));//no debe coincidir con la cadena 007
username = "9";
console.log(userCheck.test(username));//no debe coincidir con la cadena 9
username = "A1";
console.log(userCheck.test(username));//no debe coincidir con la cadena A1
username = "BadUs3rnam3";
console.log(userCheck.test(username));//no debe coincidir con la cadena BadUs3rnam3
username = "Z97";
console.log(userCheck.test(username));//debe coincidir con la cadena Z97
username = "c57bT3";
console.log(userCheck.test(username));//no debe coincidir con la cadena c57bT3
username = "AB1";
console.log(userCheck.test(username));//debe coincidir con la cadena AB1
username = "J % 4";
console.log(userCheck.test(username));//no debe coincidir con la cadena J % 4

/* Haz coincidir espacios en blanco
Los desafíos por el momento han cubierto las letras que coinciden con el alfabeto y los números. 
También puedes hacer que coincidan los espacios en blanco o los espacios entre las letras.

Puedes buscar los espacios en blanco usando \s que es una s minúscula. Este patrón no solo coincide 
con los espacios en blanco, también con los caracteres de retorno de carro, tabulaciones, 
alimentación de formulario y saltos de línea. Puedes pensar que es similar a las clases de 
caracteres [ \r\t\f\n\v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));

/* Esta llamada a match debe devolver [" ", " "].

Cambia la expresión regular countWhiteSpace para buscar múltiples caracteres de espacio en blanco en 
una cadena. */

let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /change/; // Cambia esta línea
let countWhiteSpace = /\s/g;
let result21 = sample.match(countWhiteSpace);
console.log(result21);

/* Haz coincidir caracteres que no sean espacios en blanco
Aprendiste a buscar espacios en blanco usando \s, con una s en minúscula.También puedes buscar todo 
excepto los espacios en blanco.

Busca caracteres que no sean espacios en blanco usando \S, la cual es una s mayúscula.Este patrón no 
coincidirá con los caracteres de espacios en blanco, retorno de carro, tabulaciones, alimentación de 
formulario y saltos de línea.Puedes pensar que es similar a la clase de caracteres[^ \r\t\f\n\v]. */

let whiteSpace1 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
console.log(whiteSpace.match(nonSpaceRegex).length);

/* El valor devuelto por el método.length sería 32.

Cambia la expresión regular countNonWhiteSpace para buscar varios caracteres que no sean espacios en 
blanco en una cadena. */

let sample1 = "Whitespace is important in separating words";
// let countNonWhiteSpace = /change/; // Cambia esta línea
let countNonWhiteSpace = /\S/g;
let result22 = sample.match(countNonWhiteSpace);
console.log(result22);

/* Especifica el menor y mayor número de coincidencias
Recuerda que se utiliza el signo más + para buscar uno o más caracteres y el asterisco * para buscar 
cero o más caracteres.Esto es conveniente, pero a veces quieres coincidir con cierta gama de 
patrones.

Puedes especificar el número inferior y superior de patrones utilizando especificadores de cantidad.
Para los especificadores de cantidad utilizamos llaves({ y }).Pon dos números entre las llaves - 
para el número inferior y superior de patrones.

Por ejemplo, para que coincida con la letra a si aparece entre 3 y 5 veces en la cadena "ah", la 
expresión regular debe ser / a{ 3, 5 } h /. */

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));

/* La primera llamada a test devuelve true, mientras que la segunda devuelve false.

Modifica la expresión regular ohRegex para que coincida con toda la frase "Oh no" solo cuando tenga 
de 
3 a 6 letras h. */

let ohStr = "Ohhh no";
// let ohRegex = /change/; // Cambia esta línea
let ohRegex = /Oh{3,6} no/;
let result23 = ohRegex.test(ohStr);
console.log(result23);

/* Especifica solo el menor número de coincidencias
Puedes especificar el número inferior y superior de patrones mediante especificadores de cantidad 
utilizando llaves.A veces sólo se quiere especificar el número inferior de patrones sin tener un 
límite superior.

Para especificar sólo el número inferior de patrones, mantén el primer número seguido de una coma.

Por ejemplo, para hacer coincidir solo con la cadena hah cuando la letra a aparezca al menos 3 
veces, la expresión regular sería / ha{ 3,} h /. */

let A41 = "haaaah";
let A21 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA1 = /ha{3,}h/;
console.log(multipleA1.test(A41));
console.log(multipleA1.test(A21));
console.log(multipleA1.test(A100));

/* En orden, las tres llamadas a test devuelven true, false y true.

Modifica la expresión regular haRegex para coincidir con la palabra "Hazzah" solo cuando ésta tiene 
cuatro o más letras z. */

let haStr = "Hazzzzah";
// let haRegex = /change/; // Cambia esta línea
let haRegex = /Haz{4,}ah/;
let result24 = haRegex.test(haStr);
console.log(result24);

/* Especifica el número exacto de coincidencias
Puedes especificar el número inferior y superior de patrones mediante especificadores de cantidad 
utilizando llaves.A veces solo quieres un número específico de coincidencias.

Para especificar un cierto número de patrones, simplemente pon ese número entre corchetes.

Por ejemplo, para que coincida con la palabra hah solo con la letra a 3 veces, tu expresión regular 
sera / ha{ 3 } h /. */

let A42 = "haaaah";
let A3 = "haaah";
let A1001 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A42));
console.log(multipleHA.test(A3));
console.log(multipleHA.test(A1001));

/* En orden, las tres llamadas a test devuelven false, true y false.

Modifica la expresión regular timRegex para hacer coincidir con la palabra "Timber" solo cuando esta 
tiene cuatro letras m. */

let timStr = "Timmmmber";
// let timRegex = /change/; // Cambia esta línea
let timRegex = /Tim{4}ber/;
let result25 = timRegex.test(timStr);
console.log(result25);

/* Comprueba todos o ninguno
A veces los patrones que quieres buscar pueden tener partes que pueden o no existir.Sin embargo, 
podría ser importante buscarlos de todos maneras.

Puedes especificar la posible existencia de un elemento con un signo de interrogación, ?.Esto 
comprueba cero o uno de los elementos precedentes.Puedes pensar que este símbolo dice que el 
elemento anterior es opcional.

Por ejemplo, hay ligeras diferencias en inglés americano y británico y puedes usar el signo de 
interrogación para coincidir con ambas ortografías. */

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

/* Ambos usos del método test devolverán true.

Cambia la expresión regular favRegex para que coincida tanto la versión del inglés americano
(favorite) como la versión del inglés británico de la palabra(favourite). */

let favWord = "favorite";
// let favRegex = /change/; // Cambia esta línea
let favRegex = /favou?rite/;
let result26 = favRegex.test(favWord);
console.log(result26);

/* Lookahead positivo y negativo
Los lookaheads son patrones que le indican a JavaScript que busque por anticipado en tu cadena para 
verificar patrones más adelante.Esto puede ser útil cuando deseas buscar varios patrones sobre la 
misma cadena.

Hay dos tipos de lookaheads: lookahead positivo y lookahead negativo.

Un lookahead positivo buscará para asegurarse de que el elemento en el patrón de búsqueda este allí, 
pero en realidad no lo coincidirá.Un lookahead positivo se usa como(?=...) donde el ... es la parte 
requerida que no coincide.

Por otro lado, un lookahead negativo buscará para asegurarse de que el elemento en el patrón de 
búsqueda no este allí.Un lookahead negativo se usa como(?!...) donde el ... es el patrón que no 
quieres que esté allí.El resto del patrón se devuelve si la parte de lookahead negativo no está 
presente.

Los lookaheads son un poco confusos, pero algunos ejemplos ayudarán. */

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

/* Ambas llamadas a match devolverán["q"].

Un uso más práctico de lookaheads es comprobar dos o más patrones en una cadena.Aquí hay un 
verificador de contraseñas(ingenuamente) simple que busca entre 3 y 6 caracteres y al menos un 
número: */

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));

/* Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que tengan más de 5 
caracteres y dos dígitos consecutivos. */

let sampleWord = "astronaut";
// let pwRegex = /change/; // Cambia esta línea
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/;
let result27 = pwRegex.test(sampleWord);
console.log(result27);

/* Comprueba agrupaciones mixtas de caracteres
A veces queremos comprobar grupos de caracteres utilizando una expresión regular y para conseguirlo 
usamos paréntesis().

Si deseas encontrar Penguin o Pumpkin en una cadena, puedes usar la siguiente expresión regular: 
/P(engu|umpk)in/g

Luego, comprueba si los grupos de cadena deseados están en la cadena de prueba usando el método 
test(). */

let testStr3 = "Pumpkin";
let testRegex2 = /P(engu|umpk)in/;
console.log(testRegex2.test(testStr3));

/* El método test aquí devolverá true.

Corrige la expresión regular para que compruebe los nombres de Franklin Roosevelt o Eleanor 
Roosevelt de una manera sensible a mayúsculas y minúsculas y haciendo concesiones para los segundos 
nombres.

Luego, corrige el código para que la expresión regular que has creado se compruebe con myString y 
devuelva true o false dependiendo de si la expresión regular coincide. */

let myString2 = "Eleanor A. Roosevelt";
// let myRegex6 = /False/; // Cambia esta línea
// let result28 = false; // Cambia esta línea
let myRegex6 = /(Franklin|Eleanor).* Roosevelt/i;
let result28 = myRegex6.test(myString2);
console.log(result28);
// Después de pasar el desafío experimenta con myString y observa cómo funciona la agrupación

/* Reutiliza patrones usando grupos de captura
Digamos que quieres hacer coincidir una palabra que aparece varias veces como la siguiente.*/

let repeatStr = "row row row your boat";

/*Podrías usar / row row row /, pero ¿qué pasa si no conoces la palabra específica que se repite ? Los 
grupos de captura pueden utilizarse para encontrar subcadenas repetidas.

Los grupos de captura se construyen encerrando entre paréntesis el patrón de expresión regular a 
capturar.En este caso, el objetivo es capturar una palabra formada por caracteres alfanuméricos, por 
lo que el grupo de captura será \w + encerrado entre paréntesis: /(\w+)/.

La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede 
acceder dentro de la misma expresión regular utilizando una barra invertida y el número del grupo de 
captura(por ejemplo, \1).Los grupos de captura se numeran automáticamente por la posición de sus 
paréntesis de apertura(de izquierda a derecha), empezando por el 1.

El siguiente ejemplo encuentra cualquier palabra que aparezca tres veces separada por un espacio: */

let repeatRegex1 = /(\w+) \1 \1/;
console.log(repeatRegex1.test(repeatStr)); // Returns true
console.log(repeatStr.match(repeatRegex1)); // Returns ["row row row", "row"]

/* El uso del método.match() en una cadena devolverá un arreglo con la subcadena coincidente, junto 
con sus grupos capturados.

Utiliza los grupos de captura en reRegex para que coincida con una cadena que conste sólo del mismo 
número repetido exactamente tres veces separado por espacios. */

let repeatNum = "42 42 42";
// let reRegex = /change/; // Cambia esta línea
let reRegex = /^(\d+)(\s)\1\2\1$/;
let result29 = reRegex.test(repeatNum);
console.log(result29);

/* Usa grupos de captura para buscar y reemplazar
La búsqueda es útil.Sin embargo, puedes hacer que la búsqueda sea aún más poderosa si también 
cambias(o reemplazas) el texto con el que coincide.

Puedes buscar y reemplazar texto en una cadena usando.replace() en una cadena.Las entradas para
.replace() son primero el patrón de expresiones regulares que deseas buscar.El segundo parámetro es 
la cadena para reemplazar la coincidencia o una función para hacer algo. */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));

/* La llamada replace devolverá la cadena The sky is blue..

También puedes acceder a grupos de captura en la cadena de reemplazo con signos de dólar. ($). */

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

/* La llamada replace devolverá la cadena Camp Code.

Escribe una expresión regular fixRegex utilizando tres grupos de captura que buscarán cada palabra 
en la cadena one two three.Luego actualiza la variable replaceText para reemplazar one two three con 
la cadena three two one y asigna el resultado a la variable result.Asegúrate de utilizar grupos de 
captura en la cadena de reemplazo utilizando la sintaxis del signo de dólar($). */

let str = "one two three";
// let fixRegex = /change/; // Cambia esta línea
// let replaceText = ""; // Cambia esta línea
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result30 = str.replace(fixRegex, replaceText);
console.log(result30);

/* Elimina espacio en blanco del inicio y final
A veces no se quieren caracteres en espacios en blanco alrededor de las cadenas, pero están ahí.El 
proceso típico de las cadenas de texto es eliminar el espacio en blanco al inicio y al final del 
mismo.

Escribe una expresión regular y usa los métodos de cadena apropiados para eliminar espacios en 
blanco al principio y al final de las cadenas.

Nota: El método String.prototype.trim() funcionará aquí, pero necesitarás completar este desafío 
usando expresiones regulares. */

let hello = "   Hello, World!  ";
// let wsRegex = /change/; // Cambia esta línea
// let result31 = hello; // Cambia esta línea
let wsRegex = /^\s+|\s+$/g;
let result31 = hello.replace(wsRegex, "");
console.log(result31);
