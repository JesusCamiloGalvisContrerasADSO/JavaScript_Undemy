// "use strict"; //correr javascript en modo stricto
// objetos
const producto = {
  nombreProducto: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

Object.seal(producto); //.freezer = no deja hacer nada, congela la variable  .seal --- solo deja modificar propiedades

producto.precio = "Nuevo Precio";

console.log(producto);
