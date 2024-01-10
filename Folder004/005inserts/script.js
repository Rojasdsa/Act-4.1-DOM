'use strict'

let elem1 = document.createElement('div');
let elem2 = document.createElement('div');
let elem3 = document.createElement('div');
let text = 'Ejemplo de texto';

// Usando createTextNode
elem1.append(document.createTextNode(text));
console.log(elem1);

// Usando innerHTML
elem2.innerHTML = text;
console.log(elem2);

// Usando textContent
elem3.textContent = text;
console.log(elem3);

/* createTextNode()
------------------------
 Crea un nuevo nodo de texto dentro de un documento HTML. Este método 
toma un argumento, que es el texto que se desea incluir en el nodo, 
y devuelve un nuevo nodo de texto.
*/

/*
 Los tres comandos realizan tareas similares ya que todos ellos asignan 
el texto proporcionado como contenido al elemento elem, pero difieren 
en la forma en que lo hacen y en el tipo de contenido que manipulan 
(nodos de texto, HTML o texto sin formato).

 "append()" crea un nodo de texto y lo agrega como hijo de elem1.

 "innerHTML" establece el contenido HTML del elemento elem2.

 "textContent" establece el contenido de texto del elemento elem3.
*/