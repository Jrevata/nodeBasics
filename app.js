const fs = require('fs');
const { demandOption } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar') 
const argv = require('./config/yargs')


// const [,, arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=')

// console.log(process.argv)
// console.log(argv)
// console.log(argv.base)

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err))
