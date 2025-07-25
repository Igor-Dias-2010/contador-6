let numero = parseInt(localStorage.getItem('contador')) || 0

function menos() {
    if (numero > -100) {
        numero -= 1
        show()
    }
}
function zero() {
    numero = 0
    show()
}
function mais() {
    if (numero < 100) {
        numero += 1
        show()
    }
}
function salvar() {
    localStorage.setItem('contador', numero)
}
function show() {
    const p = document.querySelector('#resultado')
    p.innerHTML = numero
}
show()