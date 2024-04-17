

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

console.log(producto2);
console.log(producto3);


// ejercicio echo por mi


class calculadora {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2
    }

    suma (){
        return `la suma es ${this.num1 + this.num2}`
    }

    resta(){
        return `la resta es ${this.num1 - this.num2}`
    }

    multi(){
        return `la multiplicacion es ${this.num1 * this.num2}`
    }

    div(){
        return `la suma es ${this.num1 / this.num2}`
    }
}

const num1 = parseFloat(prompt('ingresa el primer numero'));
const num2 = parseFloat(prompt('ingresa el segundo numero'));

const calculadorami = new calculadora(num1,num2)

const operacion = parseFloat(prompt('1:suma, 2:resta, 3:multiplicacion, 4:divicion'));

let resultado;

switch (operacion){
    case 1:
        resultado = calculadorami.suma();
        break;
    
    case 2:
        resultado = calculadorami.resta();
        break;

    case 3:
        resultado = calculadorami.multi();
        break;

    case 4:
        resultado = calculadorami.div();

    default:
        resultado = 'operacion invalida';


}

alert('resultado');



