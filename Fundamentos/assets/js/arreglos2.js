let juegos = ['CS', 'Val', 'Ow', 'Cel'];
console.log('Largo', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) => (
    console.log({elemento, indice, arr})
));

let nuevaLongitud = juegos.push('CoTL');
console.log({nuevaLongitud, juegos});

//Insertar al inicio del arreglo
nuevaLongitud = juegos.unshift('Juego genérico');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log(juegosBorrados, juegos );

let owIndex = juegos.indexOf('Val');
console.log(owIndex, juegos);