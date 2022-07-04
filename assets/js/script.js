var startButton = document.querySelector("#start")
var heading = document.querySelector("#intro")
var question = document.querySelector("#introP")

var questions = []

startButton.addEventListener("click",function() {
    heading.textContent = ""
    question.textContent = ""
    startButton.style.display = none
})