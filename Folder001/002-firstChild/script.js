'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el div con id "contenedor"
    let contenedorDiv = document.getElementById("contenedor");

    // Obtén el primer hijo
    let primerHijo = contenedorDiv.firstChild;

    // Muestra en la consola
    console.log(primerHijo);
});

/* parentNode.firstChild
------------------------
 Contendrá el primer nodo hijo del div.
*/

/* 
 Muestra un #text como primer hijo, que está ubicado entre el inicio
del div y el salto de línea antes del <h1>.
*/