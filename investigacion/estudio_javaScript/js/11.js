// objetos
const producto = {
  nombreProducto: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// forma anterior

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// destructuracion
const { precio, nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);
