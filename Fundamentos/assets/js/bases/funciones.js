function saludar(nombre) {
  console.log(arguments);
  console.log("Hola " + nombre);
}

// función anónima
const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

// función de flecha anónima?
const saludarFlecha = () => {
  console.log("Hola flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};

saludar("Eduardo", 40, true, "México");
saludar2("Eduardo");
saludarFlecha();
saludarFlecha2("Pablo");

// Imprime un número aleatorio con una función flecha sin utilizar {}
const getAleatorio = () => Math.random();
console.log("Número aleatorio: " + getAleatorio());
