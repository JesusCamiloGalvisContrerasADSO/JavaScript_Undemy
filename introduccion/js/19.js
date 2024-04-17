// function sumar(n1,n2){
//     return n1+ numero2;
// }

// const resultado = sumar(2,3);

// console.log(resulatdo);

let total = 0;

function agregarCarrito(precio){
    return total +=precio;
}

function calcularInpuesto (total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);

console.log(total);

const totalApagar = calcularInpuesto(total);

console.log(`el total a pagar es de $${totalApagar}`)