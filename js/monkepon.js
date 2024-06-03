let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonland = document.getElementById('boton-land')
    botonland.addEventListener('click',ataqueland)

}

function seleccionarMascotaJugador() {
    let inputhipodoge = document.getElementById('hipodoge')
    let inputcapipepo = document.getElementById('capipepo')
    let inputratigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputhipodoge.checked) {
        spanMascotaJugador.innerHTML = 'hipodoge'
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = 'capipepo'
    } else if (inputratigueya.checked) {
        spanMascotaJugador.innerHTML = 'ratigueya'
    } else {
        alert("seleciona una mascota manco")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'capipepo'
    } else  {
        spanMascotaEnemigo.innerHTML = 'ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
} 
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueland() {
    ataqueJugador = 'land'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    if (ataqueAleatorio == 1)
        ataqueEnemigo = 'Fuego'
    else if (ataqueAleatorio == 2)
        ataqueEnemigo = 'Agua'
    else {
        ataqueEnemigo = 'land'
    }

    createMensaje()
}
function createMensaje() {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con' + ataqueJugador + ', la mascota del enemigo ataco' + ataqueEnemigo + ' - Pendiente'
    
    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

window.addEventListener("load", iniciarJuego)