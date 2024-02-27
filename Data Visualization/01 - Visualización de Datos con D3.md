Agrega elementos de documento con D3

D3 tiene varios métodos que te permiten agregar y cambiar elementos en tu documento.

El método select() selecciona un elemento del documento. Toma un argumento para el
nombre del elemento que deseas y devuelve un nodo HTML para el primer elemento del
documento que coincide con el nombre. He aquí un ejemplo:

const anchor = d3.select("a");

El ejemplo anterior encuentra la primera etiqueta de anclaje en la página y guarda un
nodo HTML para ella en la variable anchor. Puedes utilizar la selección con otros
métodos. La parte d3 del ejemplo es una referencia al objeto D3, que es la forma de
acceder a los métodos D3.

Otros dos métodos útiles son append() y text().

El método append() toma un argumento para el elemento que deseas agregar al
documento. Agrega un nodo HTML a un elemento seleccionado y devuelve un identificador
a ese nodo.

El método text() establece el texto del nodo seleccionado u obtiene el texto actual.
Para establecer el valor, pasa una cadena como argumento dentro del paréntesis del
método.

Aquí hay un ejemplo que selecciona una lista desordenada, agrega un elemento de lista
y agrega texto:

d3.select("ul")
.append("li")
.text("Very important item");

D3 te permite encadenar varios métodos junto con puntos para realizar una serie de
acciones seguidas.

Utiliza el método select para seleccionar la etiqueta body en el documento. Luego,
append una etiqueta h1 y agrega el texto Learning D3 en el elemento h1.

<body>
  <script>
    d3.select("body")
      .append("h1")
      .text("Learning D3");
  </script>
</body>

Selecciona un grupo de elementos con D3

D3 también tiene el método selectAll() para seleccionar un grupo de elementos.
Devuelve un arreglo de nodos HTML con todos los elementos en el documento que
coinciden con el texto ingresado. Aquí hay un ejemplo para seleccionar todas las
etiquetas de anclaje en un documento:

const anchors = d3.selectAll("a");

Al igual que el método select(), selectAll() soporta el encadenamiento de métodos, y
puedes usarlo con otros métodos.

Selecciona todas las etiquetas li en el documento, y cambia su texto a la cadena list
item concatenando el método .text().

<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    d3.selectAll("li")
      .text("list item");   
  </script>
</body>

Trabaja con datos en D3

La biblioteca de D3 se centra en un acercamiento enfocado a los datos. Cuando tienes
un conjunto de datos, puedes aplicar métodos D3 para mostrarlo en la página. Los
datos vienen en muchos formatos, pero este desafío utiliza un simple arreglo de
números.

El primer paso es hacer que D3 sea consciente de los datos. El método data() es usado
en una selección de elementos DOM para adjuntar los datos a esos elementos. El
conjunto de datos es pasado como argumento al método.

Un patrón de flujo de trabajo común es crear un nuevo elemento en el documento para
cada pieza de datos del conjunto. D3 tiene el método enter() para este propósito.

Cuando enter() es combinado con el método data(), observa los elementos seleccionados
de la página y los compara con la cantidad de artículos de datos en el conjunto. Si
hay menos elementos que artículos de datos, crea los elementos restantes.

Aquí hay un ejemplo que selecciona un elemento ul y crea un nuevo elemento de lista
basado en la cantidad de entradas en el arreglo:

<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>

Puede parecer confuso seleccionar elementos que aún no existen. Este código le está
diciendo a D3 que primero seleccione el ul en la página. A continuación, selecciona
todos los artículos de la lista, lo cual devuelve una selección vacía. Entonces el
método data() revisa el conjunto de datos y ejecuta el siguiente código tres veces,
una vez por cada artículo en el arreglo. El método enter() observa que no hay
elementos li en la página, pero necesita 3 (uno para cada pieza de datos en dataset).
Se añaden nuevos elementos li al ul y tienen el texto New item.

Selecciona el nodo body, luego selecciona todos los elementos h2. Haz que D3 cree y
añada una etiqueta h2 para cada artículo en el arreglo dataset. El texto en el h2
debe decir New Title. Tu código debe usar los métodos data() y enter().

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title");
  </script>
</body>

Trabaja con datos dinámicos en D3

Los dos últimos desafíos cubren las básicas de mostrar datos dinámicamente con D3
utilizando los métodos data() y enter(). Estos métodos toman un conjunto de datos y,
junto con el método append(), crean un nuevo elemento DOM para cada entrada en el
conjunto de datos.

En el desafío anterior, haz creado un nuevo elemento h2 para cada artículo en el
arreglo dataset, pero todos contenían el mismo texto, New Title. Esto es porque no
has usado los datos que están vinculados a cada uno de los elementos h2.

El método text() de D3 puede tomar una cadena o una función callback como argumento:

selection.text((d) => d)

En el ejemplo superior, el parámetro d hace referencia a una sola entrada en el
conjunto de datos a la cual la selección está vinculada.

Utilizando el ejemplo actual como contexto, el primer elemento h2 está vinculado a
12, el segundo elemento h2 está vinculado a 31, el tercer elemento h2 está vinculado
a 22, y así sucesivamente.

Cambia el método text() para que cada elemento h2 muestre el valor correspondiente
del arreglo dataset con un solo espacio y la cadena USD. Por ejemplo, el primer
título debe ser 12 USD.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"));
  </script>
</body>

Agrega elementos de estilización en línea

D3 te permite añadir estilos CSS en línea sobre elementos dinámicos con el método
style().

El método style() toma un par llave-valor separado por coma como argumento. Aquí hay
un ejemplo para establecer el color de texto de la selección a azul:

selection.style("color","blue");

Agrega el método style() al código en el editor para hacer que todo el texto mostrado
tenga como font-family la fuente verdana.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("font-family", "verdana");
  </script>
</body>

Cambia estilos con base en los datos

D3 se trata de la visualización y presentación de datos. Probablemente vayas a querer
estilizar los elementos con base en los datos. Por ejemplo, puede que desas colorear
un punto de datos en azul si tiene un valor inferior a 20, y en rojo en caso
contrario. Puedes utilizar una función callback en el método style() e incluir la
lógica condicional. La función callback utiliza el parámetro d para representar el
punto de datos:

selection.style("color", (d) => {});

El método style() no se limita a establecer el color - también se puede utilizar con
otras propiedades CSS.

Agrega el método style() al código del editor para establecer el color de los
elementos h2 de forma condicional. Escribe la función callback de forma que si el
valor de los datos es inferior a 20, devuelva rojo, en caso contrario devuelva verde.

Nota: Puedes utilizar la lógica if-else, o el operador ternario.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("color", (d) => (d < 20 ? "red" : "green"));
  </script>
</body>

Agrega clases con D3

Usar muchos estilos en línea en elementos HTML se vuelve difícil de administrar,
incluso para aplicaciones más pequeñas. Es más fácil agregar una clase a los
elementos y darle estilo a esa clase una vez usando las reglas CSS. D3 tiene el
método attr() para agregar cualquier atributo HTML a un elemento, incluido un nombre
de clase.

El método attr() funciona de la misma manera que style(). Toma valores separados por
comas y puede usar una función callback. A continuación, se muestra un ejemplo para
agregar una clase de container a una selección:

selection.attr("class", "container");

Ten en cuenta que el parámetro class seguirá siendo el mismo siempre que necesites
agregar una clase y solo cambiará el parámetro container.

Agrega el método attr() al código en el editor y coloca una clase de bar en los
elementos div.

<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar");
  </script>
</body>

Actualiza la altura de un elemento dinámicamente

Los desafíos anteriores cubrieron cómo mostrar los datos de un arreglo y cómo agregar
clases CSS. Puedes combinar estas lecciones para crear un simple gráfico de barras.
Hay dos pasos para conseguirlo:

Crea un div por cada punto de datos en el arreglo

Dale a cada div una altura dinámica, usa la función callback en el método style() que
establece una altura igual al valor de los datos

Recuerda el formato para establecer un estilo usando una función callback:

selection.style("cssProperty", (d) => d)

Añade el método style() al código en el editor para establecer la propiedad height a
cada elemento. Usa una función callback para devolver el valor de los datos con la
cadena px añadida a él.

<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => d);
  </script>
</body>

Cambia la presentación de un gráfico de barras

El último desafío creó un gráfico de barras, pero hay algunos cambios en el formateo
que podrían mejorarlo:

1.Agrega espacio entre cada barra para separarlas visualmente, lo cual se hace
agregando un margen al CSS de la clase bar

2.Aumenta la altura de las barras para visualizar mejor la diferencia de valores, lo
cual se realiza multiplicando cada valor por un número para escalar la altura

Primero, agrega un margin de 2px a la clase bar en la etiqueta style. A continuación,
cambia la función callback en el método style() para que retorne un valor 10 veces
más grande que el valor del dato original (mas el px).

Nota: Multiplicar cada punto de dato por la misma constante solo altera la escala. Es
como acercarnos, y no cambia el significado de los datos subyacentes.

<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;   
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d*10 + "px"));
  </script>
</body>

Aprende sobre SVG en D3

SVG significa Scalable Vector Graphics (Gráficos vectoriales escalables).

Aquí "escalable" significa que, si te acercas o alejas a un objeto, no se vería
pixelado. El objeto escala con la pantalla, ya sea en una pequeña pantalla de
teléfono o en un gran monitor de TV.

SVG se utiliza para crear formas geométricas comunes. Ya que D3 traza datos en una
representación visual, utiliza SVG para crear las formas para la visualización. Las
formas SVG para una página web deben ir dentro de una etiqueta HTML llamada svg.

CSS puede ser escalable cuando los estilos usan medidas relativas (como por ejemplo
vh, vw o porcentajes), pero usar SVG es más flexible para construir visualizaciones
de datos.

Agrega un nodo svg al body utilizando append(). Dale un atributo width con el valor
de la constante w proporcionada, y un atributo height con el valor de la constante h
proporcionado, utilizando los métodos attr() o style() para cada uno de ellos. Lo
verás en la salida porque hay un background-color (color de fondo) rosa aplicado en
la etiqueta style.

Nota: Al utilizar attr() los atributos width (ancho) y height (alto) no llevan
unidades. Este es el bloque de construcción de la escala: el elemento siempre tendrá
una relación ancho a alto de 5:1, sin importar el nivel de zoom.

<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    const w = 500;
    const h = 100;
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
  </script>
</body>
