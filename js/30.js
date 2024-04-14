const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth){
        resolve('usuario autenticado'); //el promise se cumple
    }else{
        reject('no se pudo iniciar sesion'); //el promise no se cumple
    }
});

usuarioAutenticado
    .then( function(resultado){
        console.log(resultado);
    })
    .catch(function(error){
        console.log(error)
    })

// en el promise existen 3 valores
// pending : no se ha cumplido pero tampoco se a rechazado
// fulfilled : ya se cumplio
// rejected : se ha rechazado o no se puedo cumplir 
