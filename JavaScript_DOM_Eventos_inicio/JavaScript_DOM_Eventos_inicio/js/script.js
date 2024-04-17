// querySelector  

const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Texto';
console.log(heading);


// querySlectorall
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0] .textContent = 'Nuevo Texto para enlace';
enlaces[0] .classList.add ('nueva-clase');
// enlaces[0] .classList.remove('navegacion__enlace');


// getElemenByid

const heading2 = document.getElementById ('heading');
console.log(heading2);


//generar nuevo enlace 

const nuevoEnlace = document.createElement('A');

//agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent = 'Tienda virtual';

//agregar clase
nuevoEnlace.classList.add ('navegacion__enlace');

//agregarlo al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);



// Eventos 

console.log(1);


window.addEventListener ('load', function(){ //load espera a que el JS y los archivos dependientes del HTML cargen
    console.log(2);
});


window.onload = function(){
    console.log(3);
};


document.addEventListener('DOMContentLoaded', function(){ //el DOMContentLoaded espera a que cargue solo el HTML
    console.log(4);
});


console.log(5);


window.onscroll = function(){
    console.log('scrolling...');
};


//seleccionar elementos y asociarles un evento

