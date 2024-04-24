const iterable = [1,2,3,4,5,6]; //"hola"  -  Set(1,2,2,3,3,4,5,6)


//acedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();


console.log(iterable);
console.log(iterable);

// console.log(iterador.next());    con este codigo ira mostrando en secuencia los datos del iterable
// console.log(iterador.next());    {value: 1, done: false}
// console.log(iterador.next());     

//pero esa manera seria muy larga y no manejaria buenas practicas, asi que aqui entran los ciclos

let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next();
}
