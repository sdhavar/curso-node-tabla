const { demandOption } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require ('colors');
// const base = 14;

console.clear();



console.log( argv );


 crearArchivo( argv.b, argv.l, argv.h )
        .then( nombreArchivo => console.log(nombreArchivo.red, 'creado'))
        .catch( err => console.log(err));


  



