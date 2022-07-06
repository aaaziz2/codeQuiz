// Select Elements from the DOM
var startButton = document.querySelector("#start")
var questions = document.querySelector("#intro")
var skip = document.querySelector("#introP")
var choices = document.querySelector("#choices")

// Global Variables
var questionsArr = ["What language do you use (primarily) to add styles to HTML elements?",
                    "Question 2",
                    "Question 3",
                    "Question 4,"]
var answersArr = ["CSS","JavaScript","PHP","Swift",]
var timer = 75
var correct = 0
var current = 0
var choiceCounter = 0

var timerShow = document.createElement("p")
timerShow.textContent = timer



startButton.addEventListener("click",function() {
    
    skip.textContent = ""
    startButton.setAttribute("style","display:none")
    correct = 0

    generateQuestion()
    
    document.body.children[0].appendChild(timerShow)
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

choices.addEventListener("click",function(event){
    var selection = event.target
    var ans = selection.getAttribute("data-id")
    
    if(ans == 1){
        correct++
    }
    else{
        timer-=10
    }
    generateQuestion()
})

function generateQuestion(){
    questions.textContent = questionsArr[current]
    current++
    
    for(var j = 0; j<4; j++){
        choices.children[j].textContent = answersArr[choiceCounter+j]
    }
    
    choiceCounter+=4
}


// PseudoCode for Quiz Game

// Start page will have explanation of the game ...Done!
// Pressing the Start button will load questions
    // Easiest way is for H1 to host questions
    // How to randomize questions without Duplicates?
    // lets google/ I don't think I need to
// Timer starts on start button being pressed ...Done!
// A question will be generated 
// A set of 4 choices will be loaded 
// (Their placement in the list will be random)
// Only one correct answer in the 4 choices
// When you select an answer the next one is loaded until the timer hits 0
// If you get a correct answer that is 
// If you get a wrong answer you are penalized 10 seconds on the clock
// Once the clock hits 0 the highscore page is loaded for you to enter your name in to the scoreboard ...Done!
