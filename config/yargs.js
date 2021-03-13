
const argv = require('yargs')
    .option({
        'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base para la multiplicación'
     },
     'l':{
        alias: 'listar',
        type: 'boolean',
        default: true,
        describe: 'Muestra la lista de multiplicación'
     },
     'h':{
        alias: 'hasta',
        type: 'number',
        demandOption: 'true',
        default: 10,
        describe: 'Muestra el tamaño de la lista de multiplicación'
     }
    })
    .check( (argv, options) => {
        if (isNaN( argv.b )) {
            throw 'La base debe ser un número'
        }
        if (isNaN( argv.h )) {
            throw 'El hasta debe ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;