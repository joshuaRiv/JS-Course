class Persona {
	nombre = '';
	codigo = '';
	frase = '';
	comida = '';

	constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
		this.nombre = nombre; 
		this.codigo = codigo; 
		this.frase = frase;
	}

	set setComidaFavorita(comida){
		this.comida = comida;
	}

	quienSoy(){
		console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
	}

	miFrase(){
		this.quienSoy();
		console.log(`${this.codigo} dice: ${this.frase}`);
	}
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman);
console.log(ironman);

// spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFavorita = "El pay de cereza de la tía May";
// ironman.quienSoy();
ironman.miFrase();