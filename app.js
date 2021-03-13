

const { number } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear(); 
crearArchivo(argv.base, argv.h, argv.l);


