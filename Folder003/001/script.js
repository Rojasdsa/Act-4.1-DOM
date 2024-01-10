'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el enlace
    const enlace = document.querySelector('a[data-tipo="enlace"]');

    // Verifica si tiene el atributo target
    if (enlace && enlace.hasAttribute("target")) {
        // Imprime el valor del atributo target en la consola
        console.log("Valor del atributo target:", enlace.getAttribute("target"));
    } else {
        // Imprime un mensaje si el atributo target no está presente
        console.log("El atributo target no está presente");
    }
});

/*
 No tiene atributo "target" así que mostrará el mensaje del else.
*/