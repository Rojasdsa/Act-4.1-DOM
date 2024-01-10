'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el título (<h1>)
    const tituloPrincipal = document.querySelector('h1');

    // Verifica si se encontró el título
    if (tituloPrincipal) {
        // Agrega un nuevo atributo style con el valor color: blue;
        tituloPrincipal.setAttribute("style", "color: blue;");
    } else {
        // Imprime un mensaje si el título no se encuentra
        console.log("No se encontró el título principal (<h1>)");
    }
});

/*
 Tras añadir el atributo, el <h1> se muestra en la web de color azul
*/