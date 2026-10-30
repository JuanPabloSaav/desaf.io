// posiblemente se divida en dos .js: uno para todos los desafios 
// y otros para cada desafio en particular
function empezarDesafio() {
    let finalizado = false;
    let celda = document.getElementById("1-1");
    celda.classList.add("jugador");

    document.addEventListener("keypress", function (event) {
        if (finalizado) return;
        if (event.key === "w") {
            moverJugador(celda, "arriba");
        } else if (event.key === "s") {
            moverJugador(celda, "abajo");
        } else if (event.key === "a") {
            moverJugador(celda, "izquierda");
        } else if (event.key === "d") {
            moverJugador(celda, "derecha");
        }
    }
}

function moverJugador(celda, direccion) {
    let [fila, columna] = celda.id.split("-").map(Number); // Obtiene la fila y columna de la celda actual
    celda.classList.remove("jugador"); // Remueve la clase "jugador" de la celda actual 
    let nuevaFila = fila;
    let nuevaColumna = columna;

    if (direccion === "arriba") {
        nuevaFila = fila - 1;
    } else if (direccion === "abajo") {
        nuevaFila = fila + 1;
    } else if (direccion === "izquierda") {
        nuevaColumna = columna - 1;
    } else if (direccion === "derecha") {
        nuevaColumna = columna + 1;
    }

    let nuevaCelda = document.getElementById(`${nuevaFila}-${nuevaColumna}`);
    // Verificamos que sea una direccion valida
    if (direccion === "arriba" && nuevaFila > 0) {
        if (nuevaCelda.classList.contains(""))
    }
}

