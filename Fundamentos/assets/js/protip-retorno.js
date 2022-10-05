// function crearPersona(nombre, apellido) {
//   return { nombre, apellido };
// }

const crearPersona = (nombre, apellido) => ({
  nombre,
  apellido,
});

const persona = crearPersona("Fernando", "Herrera");
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

// Los tres puntos indican que se cree una lista para almacenar los argumentos que sean pasados en la llamada de la función
// Debe expresarse explícitamente como arguments o args (más los tres puntos si se ocupan varios) ya que las funciones flecha
// no reciben argumentos por defecto
/* 

    *** Restriccones ***
    * Después del parámetro Rest (args) ya no se pueden incluir otros argumentos 
    * Si se necesita extraer algúno de los argumentos, se deberá escribir antes uno y le será asignado por orden. EG.
    const imprimeArgumentos2 = (edad, ...args) => {
        console.log({edad, args});
    };

*/
// const imprimeArgumentos2 = (...args) => {
//   console.log(args);
// };

const imprimeArgumentos2 = (edad, ...args) => {
  //   console.log({ edad, args });
  return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Fernando",
  "Hola"
);

console.log({ casado, vivo, nombre, saludo });

/* 
    Se limita el retorno a solo una de las propiedades del objeto
    al encerrar entre llaves {} la propiedad que nos interesa.

    Podemos modificar el nombre final de esta propiedad al utilizar 
    dos puntos, seguido del nuevo nombre que le queramos asignar
    propiedad: nuevoNombrePropiedad

    Será entonces utilizado el nuevo nombre de la variable envés del viejo
*/
const { apellido: surName } = crearPersona("Fernando", "Herrera");
console.log({ surName });

let tony = {
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

// Se puede asignar el valor dentro de los parámetros para tener un default en caso de que el objeto no cuente
// con la propiedad que se quiere extraer, así evitamos que el valor se refleje como undefined
const imprimePropiedades = ({ nombre, condeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ condeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
