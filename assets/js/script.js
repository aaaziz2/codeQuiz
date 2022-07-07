// Select Elements from the DOM
var startButton = document.querySelector("#start")
var questions = document.querySelector("#intro")
var skip = document.querySelector("#introP")
var choices = document.querySelector("#choices")

// Global Variables
var questionsArr = ["What language do you use (primarily) to add styles to HTML elements?",
                    "What does CSS stand for?",
                    "Where in an HTML Document is the correct place to refer to an external style sheet?",
                    "Where in an HTML Document is the correct place to refer to a Javascript Script,"]
var answersArr = ["CSS","JavaScript","PHP","Swift",
                "Cascading Style Sheets","Colorful Style Sheets","Castiron Steel Stock","Computer Style Sheets",
                "In the <head>","In the <body>","At the end of document","Right After DOCTYPE",
                "After the <body>","Top of the <body>","In the <head>","Right After DOCTYPE"]
var timer = 40
var correct = 0
var current = 0
var choiceCounter = 0

// create the timer
var timerShow = document.createElement("p")
timerShow.textContent = timer


// Set up the page for the quiz
startButton.addEventListener("click",function() {
    // Removing Intro Elements
    skip.textContent = ""
    startButton.setAttribute("style","display:none")

    // Reseting the variables so if you start the quiz again everything works
    correct = 0
    choiceCounter = 0
    
    generateQuestion()
    
    // Add timer to the screen
    document.body.children[0].appendChild(timerShow)
    startTimer()
})

// Timer function will automatically load highscore page when it runs out and will record the score directly to localStorage
function startTimer(){
    var timerInterval = setInterval(function(){
        timer--
        timerShow.textContent = timer
        if(timer === 0){
            setTimeout(function(){
                clearInterval(timerInterval)
                localStorage.setItem("score",correct)
                return window.location = "highscores.html"
            })
        }
    },1000)
}

// Checks user selection to see if the answer is correct, if not it will take time off the clock
choices.addEventListener("click",function(event){
    var selection = event.target

    var ans = selection.getAttribute("data-id")
    
    if((ans%4) == 0){
        correct++
    }
    else{
        timer-=10
    }
    generateQuestion()
})

// Generates the questions and answers from the corresponding arrays and adds them to the page
// I want to implement a way to randomize the order of choices but haven't gotten to that yet
function generateQuestion(){
    // write scores to localStorage incase we are out of questions
    localStorage.setItem("score",correct)
    //  when you run out of questions it will load the highscores page
    if(!questionsArr[current]){
        return window.location = "highscores.html"
    }
    // Generate the question
    questions.textContent = questionsArr[current]
    // Increment counter so it will load the next question when the function is run again
    current++
    
    // Generate the possible choices
    for(var j = 0; j<4; j++){

        choices.children[j].textContent = answersArr[choiceCounter+j]
        choices.children[j].setAttribute("data-id",choiceCounter+j)
    }
    
    // Increment counter so it will load the next 4 choices when the function is run again
    choiceCounter+=4
}