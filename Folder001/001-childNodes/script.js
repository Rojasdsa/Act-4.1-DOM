'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el div con id "contenedor"
    let contenedorDiv = document.getElementById("contenedor");

    // Obtén todos los nodos hijos
    let nodosHijos = contenedorDiv.childNodes;

    // Itera sobre los nodos hijos y muestra en la consola
    for (let i = 0; i < nodosHijos.length; i++) {
        console.log(nodosHijos[i]);
    }
});

/* addEventListener
-------------------
 Asegura que el script se ejecute después de haberse cargado 
la estructura del DOM.
*/ 

/* DOMContentLoaded
-------------------
 Permitie manipular y acceder a los elementos del DOM de manera segura.
*/

/* getElementById(id)
-------------------
 Selecciona un elemento HTML específico en el documento basándose 
en su atributo "id".
*/

/* parentNode.childNodes
-------------------
 Devuelve una colección de los nodos secundarios de un elemento en forma 
de NodeList. Esto incluye elementos, comentarios y nodos de texto.
*/

/* 
 Nos muestra en consola tanto las etiquetas como los espacios en
blanco y los saltos de linea, que se representan con #text.

 Si queremos mostrar solo los nodos elementales podemos modificar
el código para que verifique el tipo antes de mostrarlo.

 **** Filtra nodos de tipo elemento === 1) ****

 if (nodosHijos[i].nodeType === 1) { 
            console.log(nodosHijos[i]);
        }
*/