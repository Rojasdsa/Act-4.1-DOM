'use strict'

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el enlace
    const enlace = document.querySelector('a');

    // Verifica si se encontró el enlace
    if (enlace) {
        // Verifica si el enlace tiene atributos personalizados en el dataset
        const dataset = enlace.dataset;

        if (Object.keys(dataset).length > 0) {
            // Imprime en la consola todos los atributos personalizados presentes
            console.log("Atributos personalizados presentes:");
            for (const key in dataset) {
                console.log(`${key}: ${dataset[key]}`);
            }
        } else {
            console.log("El enlace no tiene atributos personalizados en el dataset.");
        }
    } else {
        // Imprime un mensaje si el enlace no se encuentra
        console.log("No se encontró el enlace");
    }
});

/*
 Muestra el único atributo personalizado, que en este caso 
es el tipo:enlace.
*/