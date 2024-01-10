'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el párrafo con la clase "parrafo"
    let parrafo = document.querySelector(".parrafo");

    // Muestra en la consola la información solicitada
    console.log("nodeValue:", parrafo.nodeValue);
    console.log("textContent:", parrafo.textContent);
});

/* nodeValue
------------------------
 Representa el valor del nodo.
*/

/* textContent
------------------------
 Devuelve el contenido de texto del elemento y sus descendientes.
*/

/* 
 La propiedad nodeValue da null porque los elementos HTML no tienen
un valor de nodo directo asociado. Para estos casos se utilizará
textContent que si nos devuelve el texto de un elemento.
*/

