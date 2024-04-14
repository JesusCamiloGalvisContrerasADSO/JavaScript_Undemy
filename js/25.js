const carrito = [

    {nombre: 'monitor de 40 pulgadas', precio: 500},
    {nombre: 'televisor de 40 pulgadas', precio: 500},
    {nombre: 'tablet', precio: 500},
    {nombre: 'auidifonos', precio: 500},
    {nombre: 'televisor', precio: 500},
    {nombre: 'teclado', precio: 500},
    {nombre: 'celular', precio: 500},
    ];



    //forEach  --- para mostrar en consola o en html la informacion

carrito.forEach(producto =>{
    console.log(producto.nombre);
});




    //map  --- sirve para crear nuevos arreglos

    carrito.map(producto =>{
        console.log(producto.nombre);
    });
    
