const map1 = new Map();                                        // Map({}) (Mapa vacío)
const map2 = new Map([[1, "uno"]]);                            // Map({ 1=>"uno" })
const map3 = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);   // Map({ 1=>"uno", 2=>"dos", 3=>"tres" })

map.constructor.name;                     // "Map"


// ejemplo de .size 

const map = new Map();
map.size;  //0

const mapp = new Map([[1,"uno"],[2,"dos"]]);
mapp.size;  //2

const maap = new Map([[1, "uno"], [2, "dos"], [1, "tres"]]);
map.size;    // 2 (El 1->"tres" sobreescribe al anterior)


// .Set con map

const mapSet = new Map();

mapSet.set(5,"cinco");
mapSet.set("A","letra A");
mapSet.set(5,"cinco sobreescrito");     // Sobreescribe el anterior

mapSet;     // Map({ 5=>"cinco sobreescrito", "A"=>"letra A" })

// .has 

const map = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

map.has(2);     // true
map.has(34);    // false
map.set(34, "treinta y cuatro");
map.has(34);    // true


// delete 

const map = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

map.delete(3);    // true
map.delete(39);   // false


// clear 

const map = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

map.clear();

map.size;         // 0


// Array

const map = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

map.size;                   // 3 (Contiene 3 elementos)
map.constructor.name;       // "Map"
const entries = [...structuredClone(map)];

// WeakMap

// *** Map
const map = new Map([[1, "uno"]]);                            // OK
const map = new Map([[{ id: 1, type: "number" }, "uno"]]);    // OK

// *** WeakMap
const map = new WeakMap([[1, "uno"]]);
// ERROR: Uncaught TypeError: Invalid value used in weak map key

const map = new WeakMap([[{ id: 1, type: "number" }, "uno"]]); // OK

La razón de utilizar WeakMap en lugar de Map, es porque los