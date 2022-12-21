
const speed = 1400
let score = 0

document.querySelector('input').addEventListener('click', run)
document.addEventListener('keydown', pressLetter)
document.body.onkeyup = function(spaceKey){
    if(spaceKey.keyCode == 32) {
        run()
    }
}

// Functie pentru a genera un numar random
function randomNumber(max) {
    return Math.round(Math.random() * max)
}

// Functie pentru a genera o litera random
function randomLetter() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let i = randomNumber(letters.length - 1)
    return letters[i]
}

// Functie pentru a genera o culoare random in formatul rgb()
function randomColor() {
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    return `rgb(${red}, ${green}, ${blue})`
}


// Functie pentru a crea un element div intr-o pozitie random pe pagina
function randomLetterElement() {
    let div = document.createElement('div')
    div.innerText = randomLetter()
    div.style.backgroundColor = randomColor()
    div.style.top = randomNumber(99 - 12.435) + 'vh'
    div.style.left = randomNumber(99 - 12.435 / 2) + 'vw'
    div.classList.add('letter', div.innerText)
    document.querySelector('body').append(div)
}


// Functia Start Joc
async function run() {
    var gameOver = false
    hideStart()
    while(!gameOver) {
        randomLetterElement()
        await new Promise(r => setTimeout(r, speed))
    }
}



// Functie pentru a ascunde butonul de start
function hideStart() {
    document.querySelector('input').style.display = 'none'
}


function pressLetter(event) {
    
    let code = event.keyCode
    let letter = String.fromCharCode(code) 
    // gaseste primul element cu clasa literei apasate
    let element = document.querySelector(`.${letter}`)
    // daca elementul exista (nu este null) atunci il stergem din html
    if (element) {
        element.remove()
        score++
        document.querySelector('span').innerText = score
    }
}

