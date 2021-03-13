const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, hasta, listar = false) => {
    
    let salida, salidac = '';

    for (let index = 1; index < (hasta+1); index++) {
        salida += `${base} ${'x'} ${index} ${'='} ${index*base} \n`;
        salidac += `${base} ${'x'.green} ${index} ${'='.green} ${index*base} \n`;
    }

    if (listar) {
        console.log(salidac);    
    }
        
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida, (err)=>{
        if(err) throw err;
        console.log(`archivo creado ${base}`);
    })   
}

module.exports = {
    crearArchivo
}