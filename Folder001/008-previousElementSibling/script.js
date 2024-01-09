'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el párrafo con la clase "parrafo"
    let parrafo = document.querySelector(".parrafo");

    // Obtén el elemento anterior al párrafo
    let elementoAnterior = parrafo.previousElementSibling;

    // Muestra en la consola
    console.log(elementoAnterior);
});

/* previousElementSibling
------------------------
 Devuelve el elemento hermano anterior que es un elemento HTML. 
*/

/* 
 Muestra el <h1></h1> con el texto que tiene dentro. Es el
elemento anterior al párrafo.
*/

