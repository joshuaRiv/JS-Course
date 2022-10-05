let personaje = {
  nombre: "Tony Stark",
  condeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
};

console.log({ personaje });
console.log("Nombre: ", personaje.nombre);
console.log("Edad: ", personaje.edad);

console.log("Coords: ", personaje.coords);
console.log("Latitud: ", personaje.coords.lat);

console.log("Num trajes: ", personaje.trajes.length);
console.log("Ultimo traje: ", personaje.trajes.slice(-1).toString());

// borrar elemento de un objeto
delete personaje.edad;
console.log(personaje);

// agrega propiedad al objeto solo con el .
personaje.casado = true;
console.log(personaje);

// Convertir propiedades de un objeto en pares de arreglos
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Previene la modificación de los atributos y valores, además de prevenir la insersión
// de nuevas propiedades
Object.freeze(personaje);

personaje.dinero = 19120912092;
console.log(personaje);

// Obtener las propiedades de un objeto
let propiedades = Object.getOwnPropertyNames(personaje);
let valores = Object.values(personaje);
console.log({ propiedades, valores });
