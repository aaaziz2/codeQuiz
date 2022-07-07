var form = document.querySelector("#hs-form")
var input = document.querySelector("#hs-input")
var leaderboard = document.querySelector("#leaderboard")
var back = document.querySelector("#back")

// var winners = [
//             {name: "", score: "", id:"num1"},
//             {name: "", score: "", id:"num2"},
//             {name: "", score: "", id:"num3"}
//         ]

function addScore(event){
    event.preventDefault()

    if(!input){
        alert("Please Enter a Name!")
        return
    }   

    // localStorage.setItem(input.value,localStorage.getItem("score"))
    form.setAttribute("style","display:none")
    document.querySelectorAll('h3')[0].setAttribute("style","display:none")

    var newScore = document.createElement('li')
    newScore.textContent = `${input.value} got a ${localStorage.getItem('score')}`

    leaderboard.appendChild(newScore)



}


form.addEventListener("submit",addScore)

// Back button to take the quiz again
back.addEventListener('click',function(){
    return window.location = "index.html"
})