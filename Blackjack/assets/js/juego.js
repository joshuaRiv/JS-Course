(() => {
  "use strict";

  /*
   *2C = Two of clubs
   *2D = Two of diamonds
   *2H = Two of hearts
   *2S = Two of spades
   */

  let deck = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];
  let puntosJugador = 0;
  let puntosPC = 0;

  // Referencias del HTML
  const btnNuevo = document.getElementById("btn_new");
  const btnPedir = document.getElementById("btn_pedir");
  const btnDetener = document.getElementById("btn_detener");
  const scores = document.querySelectorAll("small");
  const elemDeckJugador = document.querySelector("#jugador-cartas");
  const elemDeckPC = document.querySelector("#computadora-cartas");

  // Esta función inicializa el juego
  const inicializarJuego = () => {
    crearDeck();
  };

  const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }

    for (let especial of especiales) {
      for (let tipo of tipos) {
        deck.push(especial + tipo);
      }
    }

    deck = _.shuffle(deck);
  };

  // Esta función me permite tomar una carta
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    const carta = deck.pop();
    return carta;
  };

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : parseInt(valor);
  };

  const crearCarta = () => {
    const carta = pedirCarta();
    const valor = valorCarta(carta);
    const img = document.createElement("img");
    img.setAttribute("src", `assets/cartas/${carta}.png`);
    return { valor, img };
  };

  const juegoComputadora = (puntosMinimos) => {
    do {
      const datos = crearCarta();
      const valor = datos.valor;
      const img = datos.img;
      puntosPC += valor;
      scores[1].innerHTML = puntosPC;
      img.classList.add("carta-pc");
      img.setAttribute("alt", "carta-pc");
      elemDeckPC.append(img);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosPC < puntosMinimos && puntosMinimos <= 21);
  };

  /* Eventos */
  btnPedir.addEventListener("click", () => {
    const datos = crearCarta();
    const valor = datos.valor;
    const img = datos.img;
    puntosJugador += valor;
    scores[0].innerHTML = puntosJugador;
    img.classList.add("carta");
    img.setAttribute("alt", "carta-jugador1");
    elemDeckJugador.append(img);

    if (puntosJugador > 21) {
      console.warn("Has perdido");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      juegoComputadora();
    }
  });

  btnNuevo.addEventListener("click", () => {
    puntosJugador = 0;
    scores[0].innerHTML = 0;
    puntosPC = 0;
    scores[1].innerHTML = 0;
    // replaceChildren vacío elimina los hijos del elemento
    elemDeckJugador.replaceChildren();
    elemDeckPC.replaceChildren();
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    deck = [];
    inicializarJuego();
    console.warn("NUEVO JUEGO");
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    juegoComputadora();
  });

  inicializarJuego();
})();
