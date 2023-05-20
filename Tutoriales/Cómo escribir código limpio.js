/* cSpell: disable; */
/* ¿Qué significa escribir un "código limpio" y por qué debería importarme?
Código limpio es un término que se utiliza para describir un código informático 
que es fácil de leer, comprender y mantener. El código limpio está escrito de 
una manera que lo hace simple, conciso y expresivo. Sigue un conjunto de 
convenciones, estándares y prácticas que lo hacen fácil de leer y seguir.

El código limpio está libre de complejidad, redundancia y otros olores de 
código y antipatrones que pueden dificultar el mantenimiento, la depuración y 
la modificación.

No puedo exagerar la importancia del código limpio. Cuando el código es fácil 
de leer y comprender, a los desarrolladores les resulta más fácil trabajar en 
la base de código. Esto puede llevar a una mayor productividad y a una 
reducción de errores.

Además, cuando el código es fácil de mantener, garantiza que la base de código 
se pueda mejorar y actualizar con el tiempo. Esto es especialmente importante 
para proyectos a largo plazo donde el código debe mantenerse y actualizarse en 
los años venideros.

¿Cómo puedo evaluar si una base de código está limpia o no?
Puede evaluar el código limpio de varias formas. Una buena documentación, un 
formato coherente y una base de código bien organizada son indicadores de un 
código limpio.

Las revisiones de código también pueden ayudar a identificar problemas 
potenciales y garantizar que el código siga las mejores prácticas y 
convenciones.


Las pruebas también son un aspecto importante del código limpio. Ayuda a 
garantizar que el código funcione como se espera y pueda detectar errores antes 
de tiempo.

Hay varias herramientas, prácticas y convenciones que puede implementar para 
garantizar una base de código limpia. Al implementar estas herramientas y 
prácticas, los desarrolladores pueden crear una base de código que sea fácil de 
leer, comprender y mantener.

También es importante recordar que hay una cantidad inevitable de subjetividad 
relacionada con este tema, y ​hay varias opiniones y consejos diferentes. Lo 
que puede parecer limpio e impresionante para una persona o un proyecto puede 
no serlo para otra persona u otro proyecto.

Pero todavía hay algunas convenciones generales que podemos seguir para lograr 
un código más limpio, así que pasemos a eso ahora.

Consejos y convenciones para escribir código más limpio
Eficacia, Eficiencia y Simplicidad
Cada vez que necesito pensar en cómo implementar una nueva función en un código 
base ya existente, o cómo abordar la solución de un problema específico, 
siempre priorizo ​estas tres cosas simples.

Eficacia
Primero, nuestro código debe ser efectivo , lo que significa que debe resolver 
el problema que se supone que debe resolver. Por supuesto, esta es la 
expectativa más básica que podríamos tener para nuestro código, pero si nuestra 
implementación no funciona, no vale la pena pensar en otra cosa.

Eficiencia
En segundo lugar, una vez que sabemos que nuestro código resuelve el problema, 
debemos verificar si lo hace de manera eficiente . ¿El programa se ejecuta 
usando una cantidad razonable de recursos en términos de tiempo y espacio? 
¿Puede funcionar más rápido y con menos espacio?

La complejidad algorítmica es algo que debe tener en cuenta para evaluar esto. 
Si no está familiarizado con él, puede consultar este artículo que escribí .

Para ampliar la eficiencia, aquí hay dos ejemplos de una función que calcula la 
suma de todos los números en una matriz. */

// Inefficient Example
function sumArrayInefficient(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i += 1) {
		sum += array[i];
	}
	return sum;
}
console.log(sumArrayInefficient([3, 5]));

/* Esta implementación de la sumArrayInefficientfunción itera sobre la matriz 
mediante un forbucle y agrega cada elemento a la sumvariable. Esta es una 
solución válida, pero no es muy eficiente porque requiere iterar sobre toda la 
matriz, independientemente de su longitud. */

// Efficient example
function sumArrayEfficient(array) {
	return array.reduce((a, b) => a + b, 0);
}
console.log(sumArrayEfficient([3, 5]));

/* Esta implementación de la sumArrayEfficientfunción usa el reducemétodo para 
sumar los elementos de la matriz. El reducemétodo aplica una función a cada 
elemento de la matriz y acumula el resultado. En este caso, la función 
simplemente suma cada elemento al acumulador, que comienza en 0.

Esta es una solución más eficiente porque solo requiere una sola iteración 
sobre la matriz y realiza la operación de suma en cada elemento a medida que 
avanza.

Sencillez
Y por último viene la simplicidad . Este es el más difícil de evaluar porque es 
subjetivo, depende de la persona que lee el código. Pero algunas pautas que 
podemos seguir son:

¿Puedes entender fácilmente lo que hace el programa en cada línea?
¿Las funciones y variables tienen nombres que representan claramente sus 
responsabilidades?
¿El código está correctamente sangrado y espaciado con el mismo formato en todo 
el código base?
¿Hay alguna documentación disponible para el código? ¿Se utilizan comentarios 
para explicar partes complejas del programa?
¿Qué tan rápido puede identificar en qué parte del código base se encuentran 
ciertas características del programa? ¿Puede eliminar/agregar nuevas funciones 
sin necesidad de modificar muchas otras partes del código?
¿El código sigue un enfoque modular, con diferentes características separadas 
en componentes?
¿Se reutiliza el código cuando es posible?
¿Se siguen las mismas decisiones de arquitectura, diseño e implementación por 
igual en todo el código base?
Siguiendo y priorizando estos tres conceptos de eficacia, eficiencia y 
sencillez, siempre podremos tener una pauta a seguir a la hora de pensar en 
cómo implementar una solución. Ahora ampliemos algunas de las pautas que pueden 
ayudarnos a simplificar nuestro código.

Formato y Sintaxis
Usar un formato y una sintaxis coherentes en todo el código base es un aspecto 
importante para escribir un código limpio. Esto se debe a que el formato y la 
sintaxis coherentes hacen que el código sea más legible y fácil de entender.

Cuando el código es coherente, los desarrolladores pueden identificar 
fácilmente patrones y comprender cómo funciona el código, lo que facilita la 
depuración, el mantenimiento y la actualización del código base con el tiempo. 
La coherencia también ayuda a reducir los errores, ya que garantiza que todos 
los desarrolladores sigan los mismos estándares y convenciones.

Algunas de las cosas en las que debemos pensar con respecto al formato y la 
sintaxis son:

sangría y espaciado
// bad indentation and spacing
const myFunc=(number1,number2)=>{
const result=number1+number2;
return result;
}

// good indentation and spacing
const myFunc = (number1, number2) => {
    const result = number1 + number2
    return result
}
Aquí tenemos un ejemplo de una misma función, una realizada sin sangría ni 
espaciado, y la otra correctamente espaciada y sangrada. Podemos ver que el 
segundo es claramente más fácil de leer.

sintaxis coherente */

// Arrow function, no colons, no return}
const multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(3));

// Function, colons, return
function multiplyByThree(number) {
	return number * 3;
}
console.log(multiplyByThree(3));

/* Nuevamente, aquí tenemos funciones muy similares implementadas con diferente 
sintaxis. La primera es una función de flecha, sin dos puntos y sin retorno, 
mientras que la otra es una función común que usa dos puntos y un retorno.

Ambos funcionan y están bien, pero debemos tratar de usar siempre la misma 
sintaxis para operaciones similares, ya que se vuelve más uniforme y legible a 
lo largo de la base de código.

Linterns y formateadores de código son excelentes herramientas que podemos usar 
en nuestros proyectos para automatizar la sintaxis y las convenciones de 
formato en nuestra base de código. Si no está familiarizado con estas 
herramientas, consulte este otro artículo mío .

Convenciones de casos consistentes
// camelCase
const myName = 'John'
// PascalCase
const MyName = 'John'
// snake_case
const my_name = 'John'
Lo mismo ocurre con la convención de casos que elegimos seguir. Todos estos 
funcionan, pero debemos apuntar a usar el mismo de manera consistente a lo 
largo de nuestro proyecto.

Denominación
Nombrar variables y funciones de forma clara y descriptiva es un aspecto 
importante para escribir código limpio. Ayuda a mejorar la legibilidad y la 
mantenibilidad del código base. Cuando los nombres están bien elegidos, otros 
desarrolladores pueden comprender rápidamente qué está haciendo la variable o 
función y cómo se relaciona con el resto del código.

Aquí hay dos ejemplos en JavaScript que demuestran la importancia de una 
denominación clara y descriptiva: */

// Example 1: Poor Naming
function ab(a, b) {
	let x = 10;
	let y = a + b + x;
	console.log(y);
}
ab(5, 3);

/* En este ejemplo, tenemos una función que toma dos parámetros, los agrega a 
un valor codificado de 10 y registra el resultado en la consola. El nombre de 
la función y los nombres de las variables están mal elegidos y no dan ninguna 
indicación de lo que hace la función o lo que representan las variables. */

// Example 1: Good Naming
function calculateTotalWhithTax(basePrice, taxRate) {
	const BASE_TAX = 10;
	const totalWhitTax = basePrice + basePrice * (taxRate / 100) + BASE_TAX;
	console.log(totalWhitTax);
}
calculateTotalWhithTax(50, 20);

/* En este ejemplo, tenemos una función que calcula el precio total de un 
producto con impuestos incluidos. El nombre de la función y los nombres de las 
variables están bien elegidos y dan una indicación clara de lo que hace la 
función y lo que representan las variables.

Esto hace que el código sea más fácil de leer y comprender, especialmente para 
otros desarrolladores que puedan trabajar con el código base en el futuro.

Concisión vs Claridad
Cuando se trata de escribir un código limpio, es importante lograr un 
equilibrio entre la concisión y la claridad. Si bien es importante mantener el 
código conciso para mejorar su legibilidad y mantenimiento, es igualmente 
importante asegurarse de que el código sea claro y fácil de entender. Escribir 
un código demasiado conciso puede generar confusión y errores, y puede 
dificultar el trabajo con el código para otros desarrolladores.

Aquí hay dos ejemplos que demuestran la importancia de la concisión y la 
claridad: */

// Example 1: Concise function
const countVowels = (s) => (s.match(/[aeiou]/gi) || []).length;
console.log(countVowels('hello word'));

/* Este ejemplo utiliza una función de flecha concisa y una expresión regular 
para contar el número de vocales en una cadena determinada. Si bien el código 
es muy corto y fácil de escribir, es posible que otros desarrolladores no vean 
inmediatamente cómo funciona el patrón de expresiones regulares, especialmente 
si no están familiarizados con la sintaxis de expresiones regulares. */

// Example 2: More verbose and clearer function
function countVowels1(s) {
	const vowelRegex = /[aeiou]/gi;
	const matches = s.match(vowelRegex) || [];
	return matches.length;
}
console.log(countVowels1('hello word'));

/* Este ejemplo usa una función tradicional y expresiones regulares para contar 
el número de vocales en una cadena dada, pero lo hace de una manera clara y 
fácil de entender. El nombre de la función y los nombres de las variables son 
descriptivos, y el patrón de expresiones regulares se almacena en una variable 
con un nombre claro. Esto facilita ver qué está haciendo la función y cómo 
funciona.

Es importante lograr un equilibrio entre la concisión y la claridad al escribir 
código. Si bien el código conciso puede mejorar la legibilidad y el 
mantenimiento, es importante asegurarse de que el código siga siendo claro y 
fácil de entender para otros desarrolladores que puedan trabajar con el código 
base en el futuro.

Mediante el uso de funciones descriptivas y nombres de variables, y haciendo 
uso de comentarios y formatos de código claros y legibles, es posible escribir 
código limpio y conciso que es fácil de entender y trabajar con él.

Reutilización
La reutilización del código es un concepto fundamental en la ingeniería de 
software que se refiere a la capacidad del código para usarse varias veces sin 
modificaciones.

La importancia de la reutilización del código radica en el hecho de que puede 
mejorar en gran medida la eficiencia y la productividad del desarrollo de 
software al reducir la cantidad de código que debe escribirse y probarse.

Al reutilizar el código existente, los desarrolladores pueden ahorrar tiempo y 
esfuerzo, mejorar la calidad y la consistencia del código y minimizar el riesgo 
de introducir fallas y errores. El código reutilizable también permite 
arquitecturas de software más modulares y escalables, lo que facilita el 
mantenimiento y la actualización de las bases de código a lo largo del tiempo. 
*/

// Example 1: No re-usability
function calculateCircleArea(radius) {
	const PI = 3.14;
	return PI * radius * radius;
}

function calculateRectangleArea(length, width) {
	return length * width;
}

function calculateTriangleArea(base, height) {
	return (base * height) / 2;
}

const circleArea = calculateCircleArea(4);
const rectangleArea = calculateRectangleArea(4, 6);
const triangleArea = calculateTriangleArea(3, 7);

console.log(circleArea, rectangleArea, triangleArea);

/* Este ejemplo define tres funciones que calculan el área de un círculo, un 
rectángulo y un triángulo, respectivamente. Cada función realiza una tarea 
específica, pero ninguna de ellas es reutilizable para otras tareas similares.

Además, el uso de un valor de PI codificado de forma rígida puede generar 
errores si es necesario cambiar el valor en el futuro. El código es ineficiente 
ya que repite la misma lógica varias veces. */

// Example 2: Implementing re-usability
function calculateArea(shape, ...args) {
	if (shape === 'circle') {
		const [radius] = args;
		const PI = 3.14;
		return PI * radius * radius;
	}
	if (shape === 'rectangle') {
		const [length, width] = args;
		return length * width;
	}
	if (shape === 'triangle') {
		const [base, height] = args;
		return (base * height) / 2;
	}
	throw new Error(`Shape "${shape}" not supported.`);
}

const circleArea1 = calculateArea('circle', 4);
const rectangleArea1 = calculateArea('rectangle', 4, 6);
const triangleArea1 = calculateArea('triangle', 3, 7);

console.log(circleArea1, rectangleArea1, triangleArea1);
