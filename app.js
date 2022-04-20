const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.getElementById('score')
const timeLeft = document.getElementById('time-left')
const start = document.getElementById('start')

let result = 0;

start.addEventListener('click', speed())

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
}
function speed(){
    let timerId 
    timerId = setInterval(randomSquare, 500)
}
