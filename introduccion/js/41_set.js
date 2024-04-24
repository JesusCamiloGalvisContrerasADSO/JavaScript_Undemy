// set 

const variable = set([1,2,2,4,5,6]);
//set({1,2,3,4,5,6})

// propiedades que posee el set
// .size

const set = set([1,2,3,4,5,6]);
set.size; //6

const set1 = new Set([5, 6, 7, 8, 8]);
set1.size;    // 4 (El 8 sólo se inserta una vez)

// .add(Element)

const agrega = new Set();

set.add(5);
set.add("A");
set.add(5); //no se agrega

set; // set({5, "A"})


// .has(Element)

const sett = new Set([1,2,3]);
sett.has(2);     //true
sett.has(34);    //false
sett.add(34);
sett.has(34);    //true


// .delete 

const seet = new Set([1, 2, 3]);

seet.delete(3);    // true
seet.delete(39);   // false

seet;              // Set({1, 2})


// .clear

const seeet = new Set([1, 2, 3]);

seeet.clear();

seeet.size;         // 0


// set array 

const seta = new Set([5, "A", [99, 10, 24]]);

seta.size;                 // 3 (Contiene 3 elementos)
seta.constructor.name;     // "Set"
const array = [...seta];

array.constructor.name;   // "Array"
array;                    // [5, "A", [99, 10, 24]]


// WeakSet

const sset = new WeakSet([1, "A", true]);
// ERROR: Uncaught TypeError: Invalid value used in weak set

const ssset = new WeakSet([{ name: "Manz" }, [2, 30]]); // OK
