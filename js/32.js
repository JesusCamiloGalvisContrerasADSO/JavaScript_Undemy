

// async / await


function descargarClientes(){
    return new Promise(resolve =>{
        console.log('Descargando clientes... espere...');

        setTimeout(() =>{
            resolve('los clientes fueron descargados');
        },5000);

    });
};

async function app(){
    try {
        const resultado = await descargarClientes();
        console.log(resultado); 
    } catch (error) {
        console.log('error');
    }
    
}

app();


// setInterval(() => {
    
// }, interval);


// setTimeout(function(){
//     console.log('timeeeeeee');
// },2000);