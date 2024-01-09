'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el div con id "contenedor"
    let contenedorDiv = document.getElementById("contenedor");

    // Obtén el último elemento hijo
    let ultimoElementoHijo = contenedorDiv.lastElementChild;

    // Muestra en la consola
    console.log(ultimoElementoHijo);
});

/* parentNode.lastElementChild
------------------------
 Devuelve el último elemento HTML hijo de un nodo, excluyendo 
nodos de texto u otros tipos de nodos.
*/

/* 
 Muestra el <a></a> con el texto que tiene dentro.
*/

