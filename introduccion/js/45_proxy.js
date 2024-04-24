const persona ={
    nombre: "",
    apellido: "",
    edad:0
}

const manejador = {
    Set(obj,prop,valor){
        obj[prop] = valor;
    }
}

const jon = new Proxy[persona,manejador];
jon.nombre= 'Jesus';
jon.apellido = 'galvis';
jon.edad = 17;

console.log(jon);



// para que no se permita agregar nada al proxy 

const manejadorNo = {
    if(Object.keys(obj).indexOf(prop) === -1){
        return console.error(`La propiedad ${prop} no existe en el objeto persona`)

    }
    obj[prop] = valor;
}