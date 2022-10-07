class Persona {
    // static hace que una propiedad sea estática
    // Una característica de las propiedades estáticas es que
    // se puede acceder a ellas sin necesidad de crear una instancia
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Hola a todos');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida;
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor (){
        // Super realiza una llamada al constructor del padre y liga 
        // las propiedades públicas del padre, las cuales el constructor de la clase hija podrá
        // acceder y modificar usando "this"
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';
    }

    // Si declaramos una función con el mismo nombre definido en la clase padre,
    // las declaraciones hechas dentro de la nueva sobreescrirá el contenido de la original , sin embargo
    // es posible acceder al método original utiilzando la palabra super
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}

// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Amigable vecino spiderman');
const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();