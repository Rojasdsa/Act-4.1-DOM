'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el párrafo con clase parrafo
    const parrafo = document.querySelector('.parrafo');

    // Verifica si se encontró el párrafo
    if (parrafo) {
        // Cambia el atributo data-tipo a "nuevo-parrafo"
        parrafo.setAttribute("data-tipo", "nuevo-parrafo");

        // Imprime el nuevo valor del atributo en la consola
        console.log("Nuevo valor del atributo data-tipo:", parrafo.getAttribute("data-tipo"));
    } else {
        // Imprime un mensaje si el párrafo no se encuentra
        console.log("No se encontró el párrafo con clase parrafo");
    }
});

/*
 Aunque usa getAttribute() y llama a 'data-tipo', el atributo que 
muestra en la consola es 'nuevo-parrafo' así que se ha modificado.
*/