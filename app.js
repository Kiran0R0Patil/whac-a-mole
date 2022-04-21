const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.getElementById('score')
const timeLeft = document.getElementById('time-left')
const easy = document.querySelector('.easy')
const medium = document.querySelector('.medium')
const hard = document.querySelector('.hard')
const starter = document.getElementById('starter')

let result = 0;

easy.addEventListener('click', speedEasy)
medium.addEventListener('click',speedMedium)
hard.addEventListener('click', speedHard)

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
}

function speedEasy(){
    starter.innerHTML = "<button onclick='setInterval(randomSquare, 500)'>START</button>";
    reStart();
}
function speedMedium(){
    starter.innerHTML = "<button onclick='setInterval(randomSquare, 350)'>START</button>";
    reStart();
}
function speedHard(){
    starter.innerHTML = "<button onclick='setInterval(randomSquare, 200)'>START</button>";
    reStart();
}

function reStart(){
    starter.innerHTML += "<button onclick='location.reload()'>RESTART</button>";
}
