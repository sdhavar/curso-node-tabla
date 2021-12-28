const fs = require('fs');
const crearArchivo  = async( base = 5, listar = false, hasta = 10) =>{
const colors = require ('colors');

    try {
       

let salida = '';
let consola = '';

for (let multiplicador = 1; multiplicador <= hasta; multiplicador++) {
    
    let resultado = base * multiplicador;
    salida += (`${ base } x ${ multiplicador } = ${ resultado } \n`);
    consola += (`${ base } ${'x'.red} ${ multiplicador } ${'='.red} ${ resultado} \n`)


}


if (listar) {
    console.log(colors.blue('=========================='));
    console.log(colors.white('TABLA DE MULTIPLICAR DEL:',(base)));
    console.log(colors.blue('==========================')); 

    console.log(colors.white( consola ));
}

if (hasta) {
    console.log(colors.blue('=========================='))
}


fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
    return `tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}