let random=Math.round(Math.random()*100);
console.log(random)
const submit=document.getElementById("subt")
let userInput=document.getElementById("guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHigh=document.querySelector(".lowOrHi")
const startOver=document.querySelector(".resultParas")

let p=document.createElement("p");
let prevInput=[];
let numGuess=1;
let playGame=true;
if(playGame)
{
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert("PLEASE ENTER A VALID NUMBER BETWEEN 1 TO 100")
    }else if(guess<0)
    {
        alert("please enter a value which is greater the 0")
    }else if(guess>100)
    {
        alert("please enter a value which is less then 100")
    }else{
        prevInput.push(guess)
        if(numGuess===11)
        {
        displayGuess(guess)
        displayMessage(`Game Over.Random number was ${random}`)
        endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess)
{
    if(guess===random)
    {
        displayMessage(`You guess this right`)
        endGame()
    }
    if(guess<random)
    {
        displayMessage(`No is too low`)
    }
    if(guess>random)
    {
        displayMessage(`no is too high`)
    }

}

function displayGuess(guess)
{
    userInput.value=""
    guessSlot.innerHTML+=`${guess}  `   
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message)
{
lowOrHigh.innerHTML=`<h2>${message}</h2>`
}
function endGame()
{
    // userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h1 id="new">Start new Game</h1>`
    startOver.appendChild(p);
    playGame=false;
    newGame()
}

function newGame()
{
const btn=document.querySelector("#new")
btn.addEventListener("click",(e)=>
{
    random=Math.round(Math.random()*100);
    userInput="";
    numGuess=1;
    prevInput=[];
    guessSlot.innerHTML=""
    remaining.innerHTML=`${11-numGuess}`
    // userInput.removeAttribute('disabled','')
    startOver.removeChild(p);
    playGame=true

})
}


