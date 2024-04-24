

function* iterable() {
    yield "hola";
    console.log("esto se ejecuta despues del hola");
    yield "hola2";
    console.log("esto se ejecuta despues de llamar al hola2");

}


let iterador = iterable();

for(let y of iterable){
    console.log(y);
}

const arr = [...iterable()]
console.log(arr)