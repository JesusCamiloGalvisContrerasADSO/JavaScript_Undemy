const objUsuario = {};
console.log(objUsuario);

const usuarios = ["jon", 'maria', 'jesus'];
usuarios.forEach((usuario, index) => objUsuario[`id_${index}`] = usuario);


console.log(objUsuario);
