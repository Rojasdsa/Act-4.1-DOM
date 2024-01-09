'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento h1
    let tituloPrincipal = document.querySelector("h1");

    // Obtén el elemento padre del h1
    let elementoPadreH1 = tituloPrincipal.parentElement;

    // Muestra en la consola
    console.log(elementoPadreH1);
});

/* querySelector(selectors)
------------------------
 Selecciona el primer elemento que coincida con el selector CSS 
proporcionado. Si no encuentra ningún elemento, devuelve null.
*/

/* node.parentElement
------------------------
 Devuelve el elemento padre del nodo actual. Si el nodo no tiene 
un elemento padre devuelve null.
*/

/* 
 Muestra el <div class="contenedor"> y sus elementos internos, pero
no muestra los #text. 
*/

