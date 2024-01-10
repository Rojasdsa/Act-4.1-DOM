'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const miTabla = document.getElementById("miTabla");
    let [, ...filas] = miTabla.rows;

    let [nombreMasAlto] = filas.reduce((max, fila) => {
        let edad = parseInt(fila.cells[1].textContent);
        return edad > max[1] ? [fila.cells[0].textContent, edad] : max;
    }, ["", 0]);

    console.log("La persona con la edad más alta es:", nombreMasAlto);
});

/* 
 Usamos el método reduce() para ir descartando filas que no contengan
 a la persona con mayor edad, hasta finalmente encontrar a la persona.
*/