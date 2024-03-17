// arreglos

const numeros = [10,20,30,40,50];

const meses = new Array ['enero','febrero','marzo','abril','mayo'];


// acceder a los valores de un arreglo

// console.log (numeros[4]);


//extencion de un arreglo

// meses.forEach(function(numero) {
//     console.log(numero);
// });



numeros[5] = 60;

numeros.push(60,70,80,90); //modifica al final
numeros.unshift(-10,-20,-30); //modifica el inicio

meses.pop(); //elimina el final del arreglo
meses.shift(); //elimina el primer elemento


meses.splice(2,1)

// rest operador o spread operador

const numeroArreglo = [...meses, 'junio']


