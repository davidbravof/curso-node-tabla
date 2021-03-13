
const { crearArchivo } = require('./helpers/multiplicar');
const base = 7987964;

const personas =  [
    {
        id: 1,
        nombre: "nombre",
        apellido: "apellido"
    },
    {
        id: 2,
        nombre: "nombre2",
        apellido: "apellido2"
    },
    {
        id: 3,
        nombre: "nombre3",
        apellido: "apellido3"
    },
    {
        id: 4,
        nombre: "nombre4",
        apellido: "apellido4"
    }
];
const salarios = [
    {
        id: 1,
        salario: 10000
    },
    {
        id: 2,
        salario: 20000
    },
    {
        id: 3,
        salario: 30000
    },
];


console.clear();
console.log('inicio');

const findByID = (numero, callback) => {

    let result = personas.find((e) => {
        return e.id === numero;
    });
    callback(result);    
}

const findByName = (name) => {
    
    const promesa = new Promise((resolve, reject) => {
        
        let person = personas.find((e) => {
            return e.nombre === name;
        });
        
        if (person) {            
            resolve(person);
        } else {            
            reject(`No se encontró la persona ${ name }`);
        }        
    });

    return promesa;
}

findByID(1, (params) => {    
    setTimeout(() => {
        console.log('del callback', params);    
    }, 2000);
    
});


findByName('nombre2')
    .then(result => { console.log(result);})
    .catch((err) => { console.log(err);});



    console.log('fin');



