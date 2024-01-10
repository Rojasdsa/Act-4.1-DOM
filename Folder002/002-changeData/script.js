'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Obtén la referencia de la tabla
    const miTabla = document.getElementById("miTabla");

    // Encuentra la fila que contiene a "Carlos"
    const filaCarlos = Array.from(miTabla.rows).find(row => row.cells[0].textContent === "Carlos");

    // Verifica si se encontró la fila
    if (filaCarlos) {
        // Actualiza el nombre a "Juan" y la edad a "26"
        filaCarlos.cells[0].textContent = "Juan";
        filaCarlos.cells[1].textContent = "26";
    }
});

/* 
 De esta forma, conseguimos actualizar los datos de una fila
 solo si encuentra la fila correspondiente.
*/