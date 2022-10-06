const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir (){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// fher.imprimir();

function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = ()=>{
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('María', 24);
console.log(maria);
maria.imprimir();