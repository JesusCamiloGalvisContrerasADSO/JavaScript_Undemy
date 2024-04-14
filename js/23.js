const metodoPago = 'tarjeta';

switch (metodoPago){
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    
    case 'cheque': 
        console.log('revisaremos los fondos primero');
        break;

    default:
        console.log('aun no has pagado')
    break;
}