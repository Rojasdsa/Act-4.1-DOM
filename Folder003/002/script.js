'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el primer elemento li dentro de la lista
    const primerElementoLi = document.querySelector('ul li:first-child');

    // Verifica si tiene el atributo data-tipo
    if (primerElementoLi.hasAttribute("data-tipo")) {
        // Imprime el valor del atributo data-tipo en la consola
        console.log("Valor del atributo data-tipo:", primerElementoLi.getAttribute("data-tipo"));
    } else {
        // Imprime un mensaje si el atributo data-tipo no está presente
        console.log("El atributo data-tipo no está presente");
    }
});

/*
 La consola muestra el data-tipo:elemento porque contiene dicho
atributo.
*/