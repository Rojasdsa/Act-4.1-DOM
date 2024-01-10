'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el primer elemento li dentro de la lista
    let primerLi = document.querySelector("ul li");

    // Muestra en la consola la información solicitada
    console.log("nodeType:", primerLi.nodeType);
    console.log("nodeName:", primerLi.nodeName);
    console.log("tagName:", primerLi.tagName);
});

/* nodeType
------------------------
 Indica el tipo de nodo.
*/

/* nodeName
------------------------
 Devuelve el nombre del nodo, que es el mismo que el nombre 
de la etiqueta HTML.
*/

/* tagName
------------------------
 Devuelve el nombre de la etiqueta HTML del elemento.
*/

/* 
 El nodeType:1 indica que es un elemento HTML.
 El nodeName y el tagName coinciden y es el del elemento <li>.
*/

