// Grab the element from the HTML we need to manipulate
var form = document.querySelector("#hs-form")
var input = document.querySelector("#hs-input")
var leaderboard = document.querySelector("#leaderboard")
var back = document.querySelector("#back")


function addScore(event){
    // https://www.javascripttutorial.net/web-apis/javascript-localstorage/
    // get list of names from localStorage
    let keys = Object.keys(localStorage)
    
    //make sure the screen doesn't refresh on submit
    event.preventDefault()

    // Make sure there isn't a blank entry
    if(!input.value){
        alert("Please Enter a Name!")
        return
    }
    // Warning user that if they enter a value again the will overwrite the existing score
    else if(keys.includes(input.value) && (!confirm("Are you sure? This will overwrite your last score"))){
            return        
    }   
    
    // Remove Highscore Related Elements
    form.setAttribute("style","display:none")
    document.querySelectorAll('h3')[0].setAttribute("style","display:none")

    //write score to localstorage associated with the user's name
    localStorage.setItem(input.value,localStorage.getItem('score'))
    // removed score so that it doesn't show up in the highscores
    localStorage.removeItem('score')

    // needs to get the new keys so score doesn't show up
    keys = Object.keys(localStorage)

    // prints everything in localStorage
    for(i = 0; i< keys.length; i++){
        var newScore = document.createElement('li')
        newScore.textContent = `${keys[i]} got a ${localStorage.getItem(keys[i])}`
        leaderboard.appendChild(newScore)
    }
}

// When form submits add user to Highscores
form.addEventListener("submit",addScore)

// Back button to take the quiz again
back.addEventListener('click',function(){
    return window.location = "index.html"
})