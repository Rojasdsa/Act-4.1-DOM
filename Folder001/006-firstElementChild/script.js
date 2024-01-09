'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el div con id "contenedor"
    let contenedorDiv = document.getElementById("contenedor");

    // Obtén el primer elemento hijo
    let primerElementoHijo = contenedorDiv.firstElementChild;

    // Muestra en la consola
    console.log(primerElementoHijo);
});

/* parentNode.firstElementChild
------------------------
 Devuelve el primer elemento HTML hijo de un nodo, excluyendo 
nodos de texto u otros tipos de nodos.
*/

/* 
 Muestra el <h1></h1> con el texto que tiene dentro.
*/

