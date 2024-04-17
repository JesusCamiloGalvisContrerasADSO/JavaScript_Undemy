const reproductor = {
    reproducir : function(id){
        console.log(`reproduciendo cancion con el id ${id}`)
    },

    pausar : function(){
        console.log('pausando')
    }

}

reproductor.borrarcancion = function(id) {
    console.log(`eliminando cancion numero ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarcancion(20);









// ------------------prototipos-------------------------------------------------



function Person(first, last, age, gender, interests) {

    // definiciones de propiedades y métodos
  
  }
  
  var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
  
  Person.prototype.farewell = function() {
    alert(this.name.first + ' ha dejado el edificio. ¡Adiós por ahora!');
  };



// --------------herencia-------------------

  let animal = {
    eats: true,
    walk() {
      alert("Animal da un paseo");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
  // walk se toma de la cadena prototipo
  longEar.walk(); // Animal da un paseo
  alert(longEar.jumps); // verdadero (desde rabbit)






// ---------------	Estáticos----------------------------------

class Tripple {
    static tripple(n) {
      n = n || 1;
      return n * 3;
    }
  }
  
  class BiggerTripple extends Tripple {
    static tripple(n) {
      return super.tripple(n) * super.tripple(n);
    }
  }
  
  console.log(Tripple.tripple());
  console.log(Tripple.tripple(6));
  console.log(BiggerTripple.tripple(3));
  var tp = new Tripple();
  console.log(tp.tripple()); //Logs 'tp.tripple is not a function'.
  


//   --------------geters----------------------------

var persona = {
    nombre: 'Arsys',
    apellidos: 'Internet',
    get nombreCompleto() {
      return this.nombre + ' ' + this.apellidos;
    }
  }


//   -------------------seter-----------------------


var lenguaje = {
    set actual(mensaje) {
      this.log.push(mensaje);
    },
    log: [],
  };
  lenguaje.actual = "ES";
  console.log(lenguaje.log); // ['ES']
  
  lenguaje.actual = "FR";
  console.log(lenguaje.log); // ['ES', 'FR']



//   ----

const o = { a: 0 };

Object.defineProperty(o, "b", {
  set: function (x) {
    this.a = x / 2;
  },
});

o.b = 10; // Ejecuta el setter, el cual asigna 10 / 2 (5) a la propiedad 'a'
console.log(o.a); // 5