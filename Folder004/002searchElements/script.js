'use strict'

// 1. Tabla con id="age-table"
console.log(document.getElementById('age-table'));

// 2. Todos los elementos label dentro de la tabla
console.log(document.querySelectorAll('table label'));

// 3. El primer td en la tabla (con la palabra "age")
console.log([...document.querySelectorAll('table td')].find(td => td.innerText.includes('Age')));

// 4. El formulario con name="search"
console.log(document.forms['search']);

// 5. El primer input en ese formulario
console.log(document.forms['search'].querySelector('input'));

// 6. El último input en ese formulario
console.log(document.forms['search'].querySelectorAll('input')[document.forms['search'].getElementsByTagName('input').length-1]);


/*
 Imagen adjunta que certifica las busquedas en consola.
*/

