'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el div con id "contenedor"
    let contenedorDiv = document.getElementById("contenedor");

    // Verifica si tiene el atributo hidden
    if (contenedorDiv.hasAttribute("hidden")) {
        console.log("El elemento está oculto");
    } else {
        console.log("El elemento no está oculto");
    }
});

/* hasAttribute
------------------------
 Se utiliza para comprobar si un elemento tiene un atributo específico.
Esto puede ser útil para tomar decisiones basadas en la existencia 
o ausencia de ciertos atributos.
*/

/* 
 En este ejemplo como no tiene la propiedad hidden, mostrará
el mensaje: "El elemento no está oculto".
*/

