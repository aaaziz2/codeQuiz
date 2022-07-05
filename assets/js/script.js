// Select Elements from the DOM
var startButton = document.querySelector("#start")
var questions = document.querySelector("#intro")
var answers = document.querySelector("#introP")

// Global Variables
var questionsArr = []
var answersArr = []
var timer = 75
var correct = 0

var timerShow = document.createElement("p")
timerShow.textContent = timer

startButton.addEventListener("click",function() {
    questions.textContent = "Question 1"
    answers.textContent = "Yes or no?"
    startButton.setAttribute("style","display:none")
    correct = 0
    
    document.body.children[0].appendChild(timerShow)
    console.log(document.body.children[0].children[1])
    startTimer()
})

function startTimer(){
    var timerInterval = setInterval(function(){
        timer--
        timerShow.textContent = timer
        if(timer === 0){
            setTimeout(function(){
                clearInterval(timerInterval)
                return window.location = "highscores.html"
            })
        }
    },1000)
}

// PseudoCode for Quiz Game

// Start page will have explanation of the game
// Pressing the Start button will load questions
// Timer starts on start button being pressed
// A random question will be generated 
// A set of 4 choices will be loaded 
// (Their placement in the list will be random)
// Only one correct answer in the 4 choices
// When you select an answer the next one is loaded until the timer hits 0
// If you get a correct answer that is 
// If you get a wrong answer you are penalized 10 seconds on the clock
// Once the clock hits 0 the highscore page is loaded for you to enter your name in to the scoreboard
