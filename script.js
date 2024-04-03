//Getting data by transferring tags in variables//
let playerOne = document.getElementById('playerOne')
let playerTwo = document.getElementById('playerTwo')
let scoreOne = document.getElementById('scoreOne')
let scoreTwo = document.getElementById('scoreTwo')
let dice = document.getElementById('dice')
let giveUp = document.getElementById('giveUp')
let opponentsTurn = document.getElementById('nextTime')
let endGame = document.getElementById('stopGame')
//Creating of dice picture//
dice.style.display = "none"
//Making turns (you and Opponent)//
let Turn = 1
opponentsTurn.addEventListener('click', function(){
    if (Turn == 1){
        Turn++
    }else{
        Turn--
    }
})
//Making score script//
let scoreOnen = 0
let scoreTwon = 0
let AddictionOne = 0
let AddictionTwo = 0
playerOne.addEventListener('click' , function() {
    if (Turn == 1){
    AddictionOne = Math.floor(Math.random()*6)
    for(let i=0; i<=AddictionOne; i++){
        scoreOnen++
    }
    scoreOne.textContent = `Score = ${scoreOnen}`
    dice.style.display = "block"
    dice.src = `dice${AddictionOne+1}.png`
    }
})
playerTwo.addEventListener('click' , function() {
    if (Turn == 2){
    AddictionTwo = Math.floor(Math.random()*6)
    for(let itwo=0; itwo<=AddictionTwo; itwo++){
        scoreTwon++
    }
    scoreTwo.textContent = `Score = ${scoreTwon}`
    dice.style.display = "block"
    dice.src = `dice${AddictionTwo+1}.png`
    }
})
