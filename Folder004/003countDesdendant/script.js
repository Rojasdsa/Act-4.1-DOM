'use strict'

// Esta función toma un elemento <li> como argumento
function contarDescendientes(li) {
    // Obtiene el texto del primer nodo hijo del <li> y lo limpia de espacios en blanco al principio y al final
    let texto = li.firstChild.nodeValue.trim();

    // Utiliza querySelectorAll para encontrar todos los descendientes <li> del <li> actual y cuenta su longitud
    let descendientes = li.querySelectorAll('li').length;

    // Imprime en la consola el texto y la cantidad de descendientes
    console.log(`Texto: ${texto}, Descendientes: ${descendientes}`);
}

document.addEventListener("DOMContentLoaded", function () {
    // Utiliza querySelectorAll para encontrar todos los elementos <li> dentro del elemento con el id 'arbol'
    let elementosLi = document.querySelectorAll('#arbol li');

    // Utiliza forEach para iterar sobre cada elemento <li> y aplicar la función contarDescendientes a cada uno de ellos
    elementosLi.forEach(contarDescendientes);
});

/* trim()
------------------------
 Elimina espacios en blanco alrededor del texto del nodo.
*/

/*
 Con el forEach() interamos sobre los elementos <li> para contar
el número de descendientes de cada familia.
 */