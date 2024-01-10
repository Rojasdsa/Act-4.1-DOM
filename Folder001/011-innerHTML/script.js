'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el enlace (<a>)
    let enlace = document.querySelector("a");

    // Muestra en la consola la información solicitada
    console.log("innerHTML:", enlace.innerHTML);
    console.log("outerHTML:", enlace.outerHTML);
});

/* innerHTML
------------------------
 representa el contenido HTML contenido dentro del elemento.
*/

/* outerHTML
------------------------
 representa el contenido HTML del elemento incluyendo 
la etiqueta en sí.
*/

/* 
 El innerHTML muestra el texto entre etiquetas "Enlace de Ejemplo" y
el outerHTML muestra desde la apertura al cierre de la etiqueta.
*/

