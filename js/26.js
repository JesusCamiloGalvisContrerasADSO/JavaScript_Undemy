// this

const reservacion = {
    nombre : 'Jesus',
    apellido : 'Gelvis',
    total : 500,
    pagado : false,
    informacion : function(){
        console.log (`El cliente ${this.nombre} reservo y la cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion();