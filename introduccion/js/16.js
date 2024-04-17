//  declaracion de funcion 

function sumar(){
    console.log(10*10);
}

sumar();


// expresion de la funcion

const sumar2 = function(){
    console.log(3+3);
}

sumar2();


//iipe

(function(){
    console.log('esto es una funcion') //son utiles para que no se mesclen las variable con las de otros archivos
})