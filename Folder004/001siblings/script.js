'use strict'

/* Ejemplo con 2 hijos */
/*---------------------*/
// Supongamos que elem tiene dos hijos idénticos
let elem3 = document.createElement('div');
let childElement3 = document.createElement('span');
elem3.appendChild(childElement3);

// Clonamos el primer hijo
elem3.appendChild(childElement3.cloneNode(true)); 

console.log(elem3.lastChild.nextSibling);  // Resultado: null
console.log(elem3.children[0].previousSibling);  // Resultado: null

/* createElement()
------------------------
 Crea un nuevo elemento HTML con la etiqueta especificada.
*/

/* appendChild()
------------------------
 Agrega un elemento como hijo de otro elemento.
*/

/* cloneNode()
------------------------
 Crea una copia superficial de un nodo. Si se pasa true como argumento, 
se realiza una copia completa del nodo y todos sus descendientes. 
 
 Si se pasa false o no se proporciona ningún argumento, se crea 
una copia superficial sin copiar los descendientes. 
*/

/*
 Siempre dará null.
 
 Si nos vamos al último hijo y buscamos el siguiente hermano,
no encontrará nada y mostrará null.
 
 Si nos vamos al primer hijo (hijo 0) y buscamos al hermano previo,
no encontrará nada y mostrará null. 
*/