var startButton = document.querySelector("#start")
var questions = document.querySelector("#intro")
var answers = document.querySelector("#introP")

var questionsArr = []
var answersArr = []

startButton.addEventListener("click",function() {
    questions.textContent = ""
    answers.textContent = ""
    startButton.setAttribute("style","display:none")
})

