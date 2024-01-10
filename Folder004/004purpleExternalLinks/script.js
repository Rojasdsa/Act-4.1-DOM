'use strict'

document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los enlaces dentro de la lista
    let enlaces = document.querySelectorAll('ul li a');

    // Itera sobre cada enlace
    enlaces.forEach(function (enlace) {
        // Verifica si el enlace es externo
        if (esEnlaceExterno(enlace)) {
            // Cambia el color del enlace a "purple"
            enlace.style.color = 'purple';
        }
    });

    // Función para verificar si un enlace es externo
    function esEnlaceExterno(enlace) {
        let href = enlace.getAttribute('href');

        // Verifica si el enlace contiene "://" y no comienza con "http://internal.com"
        return href && href.indexOf('http://') !== -1 && !href.startsWith('http://internal.com');
    }
});

/*
 Descartamos el internal porque no pertenece a un link externo.

 Tutorial y local son enlaces locales y ftp se usa en transferencia
de archivos.
*/