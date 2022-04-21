const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.getElementById('score')
const timeLeft = document.getElementById('time-left')
const easy = document.querySelector('.easy')
const medium = document.querySelector('.medium')
const hard = document.querySelector('.hard')
const starter = document.getElementById('starter')
const hits = document.getElementById('hits')

let result = 0;
let currentTime = 30;
let hit =0;
let timerId;
let moleSpot;
let countDownTimeIntervalId ;

// randomly position the mole
function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
    moleSpot = randomSquare.id
}

// to check if the player hit the mole
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id === moleSpot){
            result++;
            hit++;
            score.textContent = result;
            moleSpot = null;
        }
        else {
            hit++;
            moleSpot = null;
        }
    })
})

easy.addEventListener('click', speedEasy)
medium.addEventListener('click',speedMedium)
hard.addEventListener('click', speedHard)

// give different speeds according to the level
function speedEasy(){
    starter.innerHTML = "<button onclick='moveMole(600)'>START</button>";
}
function speedMedium(){
    starter.innerHTML = "<button onclick='moveMole(400)'>START</button>";
}
function speedHard(){
    starter.innerHTML = "<button onclick='moveMole(200)'>START</button>";
}

// on click start
function moveMole(time){
    timerId = setInterval(randomSquare, time)
    countDownTimeIntervalId = setInterval(countDown, 1000)
    // restart game
    starter.innerHTML = "<button onclick='location.reload()'>RESTART</button>"; 
}

// countdown of the game
function countDown(){
 currentTime--; 
 timeLeft.textContent = currentTime;
 if(currentTime === 0){
     clearInterval(countDownTimeIntervalId)
     clearInterval(timerId)
     hits.innerText = hit;
 }
}

