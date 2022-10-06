
const fs = require('fs'); 
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        
        let salida = '';

        let start = 1
        while (start <= hasta) {
            salida += `${base} x ${start} = ${base * start}\n`.green
            start++
        }
        
        if (listar) {
            console.log(`===================`.blue)
            console.log(`   Tabla del: ${base}`.blue)
            console.log(`===================`.blue)
            console.log(colors.inverse(salida))
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida)

        return 'Archivo creado satisfactoriamente'
    } catch (err) {
        throw err
    }
    
}

module.exports = {
    crearArchivo
}