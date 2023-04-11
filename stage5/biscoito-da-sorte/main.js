//Declara as variáveis
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#abrirBiscoito")
const btnAgain = document.querySelector("#novoBiscoito")
let positionNumber

let pharses = [ 
    {
        pharse: "A vida trará coisas boas se tiver paciência.",
    },
    {
        pharse: "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    },
    {
        pharse: "A maior de todas as torres começa no solo.",
    },
    {
        pharse: "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
    },
]

//Listeners
btnTry.addEventListener("click", createPharse)
btnAgain.addEventListener("click", tryAgain)
document.addEventListener("keydown", goChange)

//Funções
function createPharse(event) {
    event.preventDefault()
    position()
    toggleScreen() 
    screen2.querySelector("p").innerText = pharses[positionNumber].pharse
}

function tryAgain() {
    toggleScreen()
    position()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function position() {
    positionNumber = Math.floor(Math.random() * pharses.length)
}

function goChange(e) {
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
        tryAgain()
    } else {
        createPharse(event)
    }
}