<script>
        function aleatorio(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            // 1 es piedra, 2 es papel, 3 es tijera
            let jugador = 0
            let pc = 0
            let triunfos = 0
            let perdidas = 0

            while (triunfos < 3 && perdidas < 3 ) {
        
                pc = aleatorio(1, 3)
                jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
                // alert("Elegiste " + jugador)

                alert("Pc elige: " + eleccion(pc))
                lert("Tu eliges: " + eleccion(jugador))

                // COMBATE
                if (pc == jugador) {
                alert("EMPATE")
                } else if (jugador == 1 && pc == 3) {
                alert("GANASTES")
                    triunfos = triunfos + 1
                } else if (jugador == 2 && pc == 1) {
                alert("GANASTES")
                    triunfos = triunfos + 1
                } else if (jugador == 3 && pc == 2) {
                alert("GANASTES")
                    triunfos = triunfos + 1
                }   else {
                alert("PERDISTES")
                    perdidas = perdidas + 1
                }
        }

            alert("Ganastes " + triunfos + " veces. Perdistes " + perdidas + " veces.") 
        </script>