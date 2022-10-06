const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la cantidad de multiplicaciones'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Muestra la tabla de la consola'   
                    })
                    .check((argv, options) => {
                        if (isNaN(argv.b)) {
                            throw 'La base tiene que ser un número'
                        }
                        if (isNaN(argv.h)) {
                            throw 'El hasta tiene que ser un número'
                        }
                        return true
                        
                    })
                    .argv;


module.exports = argv
