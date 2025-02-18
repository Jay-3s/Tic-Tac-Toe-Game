const tablero = document.getElementById("tablero");
const celda = document.getElementsByClassName("celda");
const info = document.getElementById("info");
const reset = document.getElementById("reset")

  let jugador = "X"
  let actividad = true
  let estadoTablero = ['','','','','','','','',''];

  const combinacionesGanadoras = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6],
  ];

  celda.forEach(celda => {
    celda.addEventListener('click', clickCelda);
    
  });

  reset.addEventListener('click', resetear);

  function clickCelda(Event) {

    const celda= Event. target;
    const index= celda.dataset.index;
    
  }

  if (estadoTablero[index] !== '' || !actividad) return; {

    estadoTablero[index] = jugador;
    celda.textContent = jugador;

    resultado();
    alternarJugador();
    
  }

  function alternarJugador() {

    jugador = jugador === 'X' ? '0' : 'X';
    info.textContent = "Turno del jugador: ${jugador}";
    
  }

  function resultado() {
    let ganador = null;

    for (let combinacion of combinacionesGanadoras) {
        const [a,b,c] = combinacion;
        if (estadoTablero[a] && estadoTablero[a] === estadoTablero[b] && estadoTablero[a] === estadoTablero[c]) {
            ganador = estadoTablero[a]
            HighlightWinner(combinacion);
            break;

        }
         
    }

    if (ganador) {
        info.textContent = 'El jugador $(ganador) ha ganado';
        actividad = false
        return;
        
    }
    
 
  }

