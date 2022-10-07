class Singleton{
    static instancia;
    nombre = '';

    constructor(nombre = ''){
        // Si la instancia ya existe, retorna la misma
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        // Si no existe
        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }
}

const instancia1 = new Singleton('ironman');
const instancia2 = new Singleton('spiderman');
const instancia3 = new Singleton('black panther');

console.log(`Nombre en la instancia1 es ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es ${instancia2.nombre}`);
console.log(`Nombre en la instancia1 es ${instancia3.nombre}`);