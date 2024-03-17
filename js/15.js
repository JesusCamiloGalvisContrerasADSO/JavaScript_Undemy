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

resultado = carrito.some(function(producto){
    return producto.nombre === 'celular PRD'
})



//reduce


resultado = carrito.reduce(function(total,producto){
    return total = producto.precio
},0 );



//filter

resultado = carrito.filter(function(producto){
    return producto.nombre == 'celular'
})



console.log(resultado);