let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
  //style--> oculta la sesion
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
  sectionSeleccionarAtaque.style.display = 'none'

  let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display = 'none'

  let botonMascota = document.getElementById("boton-mascota");
  botonMascota.addEventListener("click", seleccionaMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById('boton-reiniciar')
  botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionaMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
  sectionSeleccionarMascota.style.display = 'none'

  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
  sectionSeleccionarAtaque.style.display = 'block'

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascotaJugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona por favor una Mascota");
  }
  seleccionaMascotaEnemigo();
}
function seleccionaMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascotaEnemigo");

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}
function ataqueFuego(){
  ataqueJugador = "FUEGO"
  ataqueAleatorioEnemigo()
}
function ataqueAgua(){
  ataqueJugador = "AGUA"
  ataqueAleatorioEnemigo()
}
function ataqueTierra(){
  ataqueJugador = "TIERRA"
  ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
  let ataqueAleatorio = aleatorio(1,3)

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO"
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA"
  } else {
    ataqueEnemigo = "TIERRA"
  }
  combate()
  crearMensaje()
  revisarVidas()
}
function crearMensaje(){
  let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement("p")
    parrafo.innerHTML = 'Tu mascota atacó con '+ ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - '+ resultado
    sectionMensajes.appendChild(parrafo)
    
}
function combate() {
let spanVidasJugador = document.getElementById('vidas-jugador')
let spanVidasEnemigo = document.getElementById('vidas-enemigo')

  if (ataqueJugador == ataqueEnemigo) {
    resultado = "EMPATE 😒";
  } else if (
    (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') ||
    (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||
    (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')
  ) {
    resultado = "GANASTE 🎉";
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
    //triunfos++;
  } else {
    resultado = "PERDISTE 😭";
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
    //perdidas++;
  }
  
}
function crearMensajeFinal(resultadoFinal){
  let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement("p")

    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled = true
    
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled = true
    
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
    
}
function revisarVidas(){
  if (vidasEnemigo == 0){
    crearMensajeFinal("YOU WINNER!!! 🥳")

  } else if (vidasJugador == 0){
    crearMensajeFinal("GAME OVER!!! 😭")
  }
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function reiniciarJuego(){
  location.reload()
}


window.addEventListener("load", iniciarJuego)
