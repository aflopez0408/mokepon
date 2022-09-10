function iniciarJuego(){
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionaMascotaJugador)
}
function seleccionaMascotaJugador(){
    alert("Seleccionaste Tu Mascota")
}


window.addEventListener("load", iniciarJuego)