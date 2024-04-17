// programacion orientada a objetos  --  POO

//objetos literales

// const producto = {
//     nombre : 'tablet',
//     precio : 500
// }



//objetos constructor

function producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new producto('monitor curvo de 49"',800);
const producto3 = new producto('laptop',300);


console.log(producto2);
console.log(producto3);


//ejercicio 1

function solicitudes(amigos, Nacionalidad){
    this.amigos = amigos;
    this.Nacionalidad = Nacionalidad
}

const persona1 = new solicitudes('Jesus','colombiano');
const persona2 = new solicitudes('Juan','brasileño');


console.log(persona1);
console.log(persona2);

//ejercicio 2

function inventario (precio, producto){
    this.precio = precio;
    this.producto = producto;
}

const producto01 = new inventario (3000,'arroz');
const producto02 = new inventario (5000, 'avena');

console.log(producto01);
console.log(producto02);

//prototipos

producto.prototype.formatearproducto = function(){
return `el producto ${producto.nombre} tiene un precio de $${producto.precio}`
}

console.log (producto02.formatearproducto)