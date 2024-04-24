// Symbols



let simbolo1 = Symbol();
let simbolo2 = Symbol("foo");
let simbolo3 = Symbol("foo");



// esto no se debe hacer 

// let sym = new Symbol(); // TypeErro

// objeto envolvente 

let sym1 = Symbol("foo");
typeof sym1; // simbolo
let Simboloobj = Object(sym1)
typeof sym1; // objeto

// simbolo envolvente 

let sym = Symbol("foo");
let obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // sigue siendo 1