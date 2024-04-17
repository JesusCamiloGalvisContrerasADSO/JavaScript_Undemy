// objetos
const producto = {
  nombreProducto: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

// const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

// dias.push("domingo");

// for (i = dias.length - 1; i >= 0; i--) {
//   console.log(`${dias[i]} = ${i}`);
// }

let palabra =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus id";

// console.log(palabra.split(" "));

let arreglo = palabra.split(" ");

// console.log(arreglo);

// for (let i = arreglo.length - 1; i <= 0; i--){
//   console.log(`${arreglo[i]} = ${i}`);
// }

// while (arreglo.length >= bandera) {
//   console.log;
// }

function sumar(a = 5, b = 3) {
  if (a > b) {
    return a + b;
  }
}

console.log(sumar());

const sumar2 = function (a = 10, b = 3) {
  if (a > b) return a + b;
};

console.log(sumar2());
