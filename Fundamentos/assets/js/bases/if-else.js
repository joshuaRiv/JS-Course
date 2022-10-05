let a = 10;
if (a >= 10) {
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

// console.log("Fin del programa");

const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

// if (dia === 0) {
//   console.log("Domingo");
// } else if (dia === 1) {
//   console.log("Lunes");
// } else if (dia === 2) {
//   console.log("Martes");
// } else if (dia === 3) {
//   console.log("Miércoles");
// } else if (dia === 4) {
//   console.log("Domingo");
// } else if (dia === 5) {
//   console.log("Domingo");
// } else if (dia === 6) {
//   console.log("Domingo");
// } else {
//   console.log("No es miércoles");
// }

dia = 4;

const diasLetras = {
  0: () => "domingo - 0",
  1: () => "lunes - 1",
  2: () => "martes - 2",
  3: () => "miércoles - 3",
  4: () => "jueves - 4",
  5: () => "viernes - 5",
  6: () => "sábado - 6",
};

console.log(diasLetras[dia]());
