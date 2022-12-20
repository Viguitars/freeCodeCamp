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
function incrementer1(num) {
    return num + 1;
    // Cambia solo el código encima de esta línea
}
console.log(incrementer1(4));
console.log(fixedValue1);


