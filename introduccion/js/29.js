
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearptoducto() {
        return `el producto ${this.nombre} tiene un precio de $${this.precio}`;
    }

    
    
}

const producto2 = new Producto('monitor de 40 pulgadas', 800);
const producto3 = new Producto('laptop', 300);

class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }

    formatearptoducto() {
        return `${super.formatearptoducto() } y su isbn es ${this.isbn}`;
    }

}

const libro = new Libro('hola', 120, '323423');


console.log(producto2);
console.log(producto3);