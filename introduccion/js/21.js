//arrow funcion

const sumar2 = function(n1,n2){
    console.log(n1+n2);
}

sumar2(5,4);

const aprendiendo = (tecnologia)=> console.log(`aprendiendo ${tecnologia}`);

// ------------------

const meses = new Array ['enero','febrero','marzo','abril','mayo'];


const carrito = [

{nombre: 'monitor de 40 pulgadas', precio: 500},
{nombre: 'televisor de 40 pulgadas', precio: 500},
{nombre: 'tablet', precio: 500},
{nombre: 'auidifonos', precio: 500},
{nombre: 'televisor', precio: 500},
{nombre: 'teclado', precio: 500},
{nombre: 'celular', precio: 500},
]

meses.forEach(function(mes){
    if ( mes == 'marzo'){
        console.log("marzo si existe")
    }
    
});

const resultado = meses.includes('marzo');

//sone ideal para arreglos de objetos

resultado = carrito.some(producto => producto.nombre === 'celular PRD')




//reduce


resultado = carrito.reduce((total,producto) => total = producto.precio)




//filter

resultado = carrito.filter(producto => producto.nombre == 'celular')



console.log(resultado);