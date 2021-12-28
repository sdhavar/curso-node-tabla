const { describe } = require('yargs');

const argv = require('yargs')
                .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Representa el límite de la multiplicación'
                })
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la multiplicación'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Permite listar la tabla de multiplicación'
                })
                .check ( (argv, options) =>{
                    if ( isNaN (argv.b)) {
                        throw 'La base tiene que ser un número'
                    }
                    return true; 
                })
                .check ( (argv, options) =>{
                    if ( isNaN (argv.h)) {
                        throw 'El límite tiene que ser un número'
                    }
                    return true; 
                })
                
            .argv


module.exports = argv;