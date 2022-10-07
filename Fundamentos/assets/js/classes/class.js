class Persona {
	// static hace que una propiedad sea estática
	// Una característica de las propiedades estáticas es que
	// se puede acceder a ellas sin necesidad de crear una instancia
	static _conteo = 0;
	static get conteo (){
		return Persona._conteo + ' instancias';
	}

	static mensaje(){
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

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
// console.log(spiderman);
// console.log(ironman);

spiderman.miFrase();
spiderman.setComidaFavorita = "El pay de cereza de la tía May";
// console.log(spiderman.getComidaFavorita);

// Para acceder a propiedades estáticas se accede de la siguiente manera
// Persona._conteo = 2;
console.log(`Conteo estático ${Persona._conteo}`);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);