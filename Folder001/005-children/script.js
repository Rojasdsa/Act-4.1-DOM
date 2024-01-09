'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén la lista desordenada (ul)
    let listaDesordenada = document.querySelector("ul");

    // Obtén todos los elementos hijos de la lista desordenada
    let elementosHijosUL = listaDesordenada.children;

    // Muestra en la consola
        console.log(elementosHijosUL);
});

/* parentNode.children
------------------------
 Devuelve solo los elementos HTML que son hijos directos, excluyendo 
nodos de texto u otros tipos de nodos.
*/

/* 
 Muestra un HTMLCollection(3) [li, li, li] que contiene a todos
los hijos de <ul>. 
*/

