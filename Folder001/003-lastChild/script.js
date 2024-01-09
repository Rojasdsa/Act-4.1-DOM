'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el div con id "contenedor"
    let contenedorDiv = document.getElementById("contenedor");

    // Obtén el último hijo
    let ultimoHijo = contenedorDiv.lastChild;

    // Muestra en la consola
    console.log(ultimoHijo);
});

/* parentNode.lastChild
------------------------
 Contendrá el último nodo hijo del div.
*/

/* 
 Muestra un #text como último hijo, que está ubicado entre <a>
y el final del div. 
*/

