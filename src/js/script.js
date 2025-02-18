document.addEventListener("DOMContentLoaded", () => {

const celdas = document.getElementsByClassName("celda")
const btnReset = document.getElementById("reset")

let celdasDisponibles = []

let celdasTotales = []

let juego = true;



for (let index = 0; index < celdas.length; index++) {
    const element = celdas[index];

    celdasDisponibles.push(element)
    celdasTotales.push(element)

    
    element.addEventListener('click' , function() {
        if(juego == true) {
            if (element.textContent === "") {
                element.textContent = "X"
                celdasDisponibles = celdasDisponibles.filter(cel => cel != element)
                maquina()
            }
        }

    })
}


function maquina() {
    setTimeout(() =>{
        let celRandom = celdasDisponibles[Math.floor(Math.random() * celdasDisponibles.length)]
    
        if (celRandom == undefined) {
            ganador();
            
            
        }
        else {
            celRandom.textContent= "O"
            celdasDisponibles = celdasDisponibles.filter(cel => cel != celRandom)
            let valor=ganador();
            
            if (valor === true) {
                celRandom.style.color="white"
                
            }
            
            
            
    
        }
    }, 400)
    
}


function ganador() {
    let combinaciones = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
            
    ]
    
    for (const comb of combinaciones) {
        if (celdasTotales[comb[0]].textContent == "X" && celdasTotales[comb[1]].textContent == "X" && celdasTotales[comb[2]].textContent == "X" ) {
            alert("Jugador X ha ganado")
            console.log("x");
           
            juego = false
           return true
           
        }


        if (celdasTotales[comb[0]].textContent == "O" && celdasTotales[comb[1]].textContent == "O" && celdasTotales[comb[2]].textContent == "O" ) {
            alert("Jugador O ha ganado")
            juego = false
            

        }
    }
        
        if (celdasDisponibles.length == 0 && juego == true) {
            alert("Empate")
            
        }

    }

    btnReset.addEventListener("click", function() {
        location.reload()
    })
});