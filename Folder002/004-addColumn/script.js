'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const miTabla = document.getElementById("miTabla");
    const filas = miTabla.rows;

    // Crea un nuevo encabezado para la columna "Acción"
    const encabezadoAccion = miTabla.rows[0].insertCell(miTabla.rows[0].cells.length);

    // Establece el contenido del nuevo encabezado
    encabezadoAccion.textContent = "Acción";

    for (let i = 1; i < filas.length; i++) {
        // Crea una nueva celda para la columna "Acción"
        let nuevaCelda = filas[i].insertCell(filas[i].cells.length);

        // Crea un botón y asigna su texto y maneja su evento click
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
            // Elimina la fila al hacer clic en el botón
            miTabla.deleteRow(i);
        });

        // Agrega el botón a la nueva celda
        nuevaCelda.appendChild(botonEliminar);
    }
});

/* 
 Mediante esta forma podemos crear una nueva columna "Acción" que 
tendrá bajo ella las diferentes filas con el botón de eliminar
*/