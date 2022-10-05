/* El operador Rest ... se convierte en operador spread cuando se utiliza en objetos, separa la relación por referencia de javascript */
let juan = { nombre: "Juan" };
let ana = { ...juan };
ana.nombre = "Ana";

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

// Arreglos
const frutas = ["Manzana", "Pera", "Piña"];

// const otrasFrutas = [...frutas];
const otrasFrutas = frutas.slice();

otrasFrutas.push("Mango");

console.table({ frutas, otrasFrutas });

/* 
    *** Actualización 2022 ***
    la función structuresClone() permite clonar objetos de manera correcta evitando así la relación entre el objeto copiado y el original

    structuredClone(value)

    // Create an object with a value and a circular reference to itself.
    const original = { name: "MDN" };
    original.itself = original;

    // Clone it
    const clone = structuredClone(original);

    console.assert(clone !== original); // the objects are not the same (not same identity)

    https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
*/
