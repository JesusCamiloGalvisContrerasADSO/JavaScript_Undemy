// async / await


function descargarClientes(){
    return new Promise(resolve =>{
        console.log('Descargando clientes... espere...');

        setTimeout(() =>{
            resolve('los clientes fueron descargados');
        },5000);

    });
};


function descargarPedidos(){
    return new Promise(resolve =>{
        console.log('Descargando pedidos... espere...');

        setTimeout(() =>{
            resolve('los pedidos fueron descargados');
        },3000);

    });
};

async function app(){
    try {
        // const clientes = await descargarClientes();
        // const pedidos = await descargarPedidos();
        // console.log(resultado);
        
        const resulatdo = await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log('error');
    }
    
}

app();
