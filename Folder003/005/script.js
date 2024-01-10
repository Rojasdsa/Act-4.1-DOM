'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el primer elemento li dentro de la lista
    const primerElementoLi = document.querySelector('ul li:first-child');

    // Verifica si se encontró el primer elemento li
    if (primerElementoLi) {
        // Elimina el atributo data-tipo
        primerElementoLi.removeAttribute("data-tipo");

        // Imprime en la consola la lista de atributos restantes
        console.log("Atributos restantes:", obtenerListaAtributos(primerElementoLi));
    } else {
        // Imprime un mensaje si el primer elemento li no se encuentra
        console.log("No se encontró el primer elemento li");
    }
});

function obtenerListaAtributos(elemento) {
    // Obtiene la lista de atributos del elemento y la convierte en un array
    return Array.from(elemento.attributes).map(attr => `${attr.name}: ${attr.value}`);
}

/*
 Los <li> solo tienen el data-tipo:elemento. Al eliminar su único 
atributo, mostrará en consola un array vacío.
*/