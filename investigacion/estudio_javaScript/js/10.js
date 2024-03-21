// objetos

// const nombreProducto = "monitor 20 pulgadas";
// const precio = 300;
// const disponible = true;

const producto = {
  nombreProducto: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// console.log(producto.precio);

// console.log(producto["precio"]);

// ---------agregar propiedades
producto.imagen = "imagen.jpg";

// -------------eliminar propiedades
delete producto.disponible;

console.log(producto);
