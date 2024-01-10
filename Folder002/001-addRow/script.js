'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén la referencia de la tabla
    const miTabla = document.getElementById("miTabla");

    // Crea una nueva fila
    const nuevaFila = miTabla.insertRow();

    // Agrega datos a las celdas utilizando insertAdjacentHTML
    nuevaFila.insertCell(0).insertAdjacentHTML("beforeend", "Pedro");
    nuevaFila.insertCell(1).insertAdjacentHTML("beforeend", "28");
    nuevaFila.insertCell(2).insertAdjacentHTML("beforeend", "Colombia");
});

/* insertRow()
------------------------
 Crea una fila nueva.
*/

/* insertCell()
------------------------
 Añade celdas a una fila.
*/

/* insertAdjacentHTML()
------------------------
 Inserta el contenido HTML directamente en las celdas, lo que puede 
ser más eficiente en términos de rendimiento.
*/

/* 
 Primero creamos la fila y luego insertamos las celdas que se irán
rellenando con insertAdjacentHTML mediante beforeend. Esto registrará
el texto al final del contenido del elemento.
*/