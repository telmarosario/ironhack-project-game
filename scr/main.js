// ! GLOBAL VARIABLES

//* Canvas set up 
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

//* DOM tags
let startBtn = document.querySelector("#start-btn");
let scoreScreen = document.querySelector("#scores");
let startScreen = document.querySelector('#start-screen');
let gameOverScreen = document.querySelector('#gameover-screen');

let points = document.querySelector('#points');
let level = document.querySelector('#level');

let levelTwo = document.querySelector('#level-2');
let levelThree = document.querySelector('#level-3');

//* Game flow-control
let game;

//* Music
var bgMusic = new Audio('sounds/bg_music.mp3');


// ! FUNCTIONS
const startGame = () => {
    canvas.style.display = "flex";
    startBtn.style.display = "none";
    scoreScreen.style.display = "flex";
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";

    bgMusic.play();

    game = new Game(Number(level.innerText));
    game.gameLoop();
}



// ! EVENT LISTENERS 
startBtn.addEventListener('click', startGame);
 document.addEventListener('keydown', (event) => {
    game.world.moveWorld(event);
}); 

levelTwo.addEventListener('click', startGame);
levelThree.addEventListener('click', startGame);