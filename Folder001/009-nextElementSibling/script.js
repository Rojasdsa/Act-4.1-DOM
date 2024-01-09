'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el párrafo con la clase "parrafo"
    let parrafo = document.querySelector(".parrafo");

    // Obtén el elemento siguiente al párrafo
    let elementoSiguiente = parrafo.nextElementSibling;

    // Muestra en la consola
    console.log(elementoSiguiente);
});

/* nextElementSibling
------------------------
 Devuelve el elemento hermano siguiente que es un elemento HTML. 
*/

/* 
 Muestra el <ul></ul> con el resto de elementos hijos <li></li>. 
Es el elemento anterior al párrafo.
*/

