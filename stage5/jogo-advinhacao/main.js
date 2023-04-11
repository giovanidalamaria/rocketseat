//Variáveis
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
const inputNumber = document.querySelector("#inputNumber")
let xAttempts = 1
let randomNumber = Math.round(Math.random() * 10)

inputNumber.focus()

// Eventos
btnTry.addEventListener("click", tryClick)
btnAgain.addEventListener("click", resetGame)
document.addEventListener("keydown", resetKey)

//Funções e Callbacks
function tryClick(event) {
    event.preventDefault() //não faça o padrão, não envie o formulário

    if ((Number(inputNumber.value == ""))) {
        alert("Preencha um número")
    } else if ((Number(inputNumber.value < 0)) || (Number(inputNumber.value > 10))) {
        alert("Número deve ser entre 0 e 10")
    } else {

        if ((Number(inputNumber.value == randomNumber))) {
            toggleScreen()
            screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
        }

        inputNumber.value = ""
        xAttempts++
    }
}

function resetGame() {
    toggleScreen()
    xAttempts = 1
    inputNumber.focus()
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

// Se apertar enter, reseta o jogo (ao final)
// Precisa do && contains hide para ser apenas na tela final, e não em todo o documento
function resetKey(e) {
    //console.log(e)
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
        resetGame()
    }
}