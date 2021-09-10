const dice = document.getElementById("dice")
const diceImg = document.getElementById("diceImg")
const score = document.getElementById("score")
const score2 = document.getElementById("score2")
const rollButton = document.getElementById("rollButton")
const holdButton = document.getElementById("holdButton")
const newGame = document.getElementById("newGame")
const game = document.getElementById("game")
const newGame2 = document.getElementById("newGame2")
const playerOne = document.getElementById("playerOne")
const playerTwo = document.getElementById("playerTwo")

let turn = 0;


let scoreCount1 = 0;
let scoreCount2 = 0;

newGame.addEventListener("click", () =>{
    newGame.style.display = "none"
    newGame2.style.display = "none"
    game.style.display = "block"
    playerTwo.style.display = "none"
    holdButton.style.display = "none"
})

newGame2.addEventListener("click", () =>{
    newGame.style.display = "none"
    newGame2.style.display = "none"
    game.style.display = "block"
    playerTwo.style.display = "flex"
    diceImg.style.marginBottom = "16%"
})

holdButton.addEventListener("click", () =>{
            document.getElementById("holdButton").classList.remove("buttonAnimation");
            window.setTimeout(()=>{
            document.getElementById("holdButton").classList.add("buttonAnimation");
            }, 1);
    turn++
    console.log(turn)
    console.log(turn%2)
    if(turn%2 == 0){
        playerTwo.style.filter = "none"
        playerOne.style.filter = "drop-shadow(0em 0em 0.2em white)"
    }else if(turn%2 == 1){
        playerOne.style.filter = "none"
        playerTwo.style.filter = "drop-shadow(0em 0em 0.2em white)"
    }
})

rollButton.addEventListener("click", () =>{
            document.getElementById("rollButton").classList.remove("buttonAnimation");
            window.setTimeout(()=>{
            document.getElementById("rollButton").classList.add("buttonAnimation");
            }, 1);
    let num = Math.ceil(Math.random()*6)
    console.log(num)
        if(turn%2 == 0){
            if (num == 1){
                dice.src = "images/oneFace.png"
                scoreCount1 = 0; 
                score.textContent = scoreCount1 
                score2.textContent = scoreCount2         
            } else if(num == 2){
                dice.src="images/twoFace.png"
                scoreCount1 += 2
                score.textContent = scoreCount1 
                score2.textContent = scoreCount2
            } else if(num == 3){
                dice.src="images/threeFace.png"
                scoreCount1 += 3
                score.textContent = scoreCount1 
                score2.textContent = scoreCount2
            } else if(num == 4){
                dice.src="images/fourFace.png"
                scoreCount1 += 4
                score.textContent = scoreCount1 
                score2.textContent = scoreCount2
            } else if(num == 5){
                dice.src="images/fiveFace.png"
                scoreCount1 += 5
                score.textContent = scoreCount1 
                score2.textContent = scoreCount2
            } else if(num == 6){
                dice.src="images/sixFace.png"
                scoreCount1 += 6
                score.textContent = scoreCount1 
                score2.textContent = scoreCount2
            }
            if(scoreCount1 >= 20){
                score.textContent = "Victory!"
                scoreCount1 = 0
                scoreCount2 = 0
        }


    }else if(turn%2 == 1){
        if (num == 1){
            dice.src = "images/oneFace.png"
            scoreCount2 = 0; 
            score2.textContent = scoreCount2
            score.textContent = scoreCount1          
        } else if(num == 2){
            dice.src="images/twoFace.png"
            scoreCount2 += 2
            score2.textContent = scoreCount2
            score.textContent = scoreCount1 
        } else if(num == 3){
            dice.src="images/threeFace.png"
            scoreCount2 += 3
            score2.textContent = scoreCount2 
            score.textContent = scoreCount1
        } else if(num == 4){
            dice.src="images/fourFace.png"
            scoreCount2 += 4
            score2.textContent = scoreCount2 
            score.textContent = scoreCount1
        } else if(num == 5){
            dice.src="images/fiveFace.png"
            scoreCount2 += 5
            score2.textContent = scoreCount2 
            score.textContent = scoreCount1
        } else if(num == 6){
            dice.src="images/sixFace.png"
            scoreCount2 += 6
            score2.textContent = scoreCount2 
            score.textContent = scoreCount1
        }
        if(scoreCount2 >= 20){
            score2.textContent = "Victory!"
            scoreCount2 = 0
            scoreCount1 = 0
    }
    }
})
