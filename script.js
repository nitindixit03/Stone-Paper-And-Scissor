let user = null;
let bot = null;

const stone = document.getElementById("stone");
stone.addEventListener("click", () => {
    
    document.getElementById("result-1").style.backgroundImage = `url(./photos/stone.png)`;
    document.getElementById("result-1").style.backgroundSize="100% 100%";
    user = "stone";
    botGen();
    resultGen();
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {

    document.getElementById("result-1").style.backgroundImage = `url(./photos/paper.jpeg)`;
    document.getElementById("result-1").style.backgroundSize="100% 100%";
    user = "paper";
    botGen();
});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", () => {
    
    document.getElementById("result-1").style.backgroundImage = `url(./photos/scissor.jpg)`;
    document.getElementById("result-1").style.backgroundSize="100% 100%";
    user = "scissor";
    botGen();
});


const botGen = () => {
    let arr = ["stone","paper","scissor"];
    const randomNumber = Math.floor(Math.random()*3);
    bot = arr[randomNumber];
    if(randomNumber === 0){
        document.getElementById("result-2").style.backgroundImage = `url(./photos/stone.png)`;
        document.getElementById("result-2").style.backgroundSize="100% 100%";
        }
    else if(randomNumber === 1){
        document.getElementById("result-2").style.backgroundImage = `url(./photos/paper.jpeg)`;
        document.getElementById("result-2").style.backgroundSize="100% 100%";
        }
    else{
        document.getElementById("result-2").style.backgroundImage = `url(./photos/scissor.jpg)`;
        document.getElementById("result-2").style.backgroundSize="100% 100%";
    }    
    resultGen();
}

var userScore = 0;
var botScore = 0;
var round = 0;


const resultGen = () =>{
    round++;
    if(user === "stone" && bot === "paper"){
        document.getElementById("result").textContent = "AI WON";
        botWon();
        botScore++;
    }
    else if(user === "stone" && bot === "scissor"){
        document.getElementById("result").textContent = "YOU WON";
        userScore++;
        userWon();
       
    }
    else if(user === "stone" && bot === "stone"){
        document.getElementById("result").textContent = "DRAW";
        noWon();
    }
    else if(user === "paper" && bot === "paper"){
        document.getElementById("result").textContent = "DRAW";
        noWon();
    }
    else if(user === "paper" && bot === "scissor"){
        document.getElementById("result").textContent = "AI WON";
        botWon();
        botScore++;
    }
    else if(user === "paper" && bot === "stone"){
        document.getElementById("result").textContent = "YOU WON";
        userWon();
        userScore++;
    }
    else if(user === "scissor" && bot === "paper"){
        document.getElementById("result").textContent = "YOU WON";
        userWon();
        userScore++;
    }
    else if(user === "scissor" && bot === "scissor"){
        document.getElementById("result").textContent = "DRAW";
        noWon();
    }
    else if(user === "scissor" && bot === "stone"){
        document.getElementById("result").textContent = "AI WON";
        botWon();
        botScore++;
    }
    updateScore()
}

const userWon = () =>{
    document.getElementById("resultBox").style.backgroundColor = "green";
}
const botWon = () =>{
    document.getElementById("resultBox").style.backgroundColor = "red";
}
const noWon = () =>{
    document.getElementById("resultBox").style.backgroundColor = "white";
}



const updateScore = () => {
    document.getElementById("score").innerHTML = ` Round-${round}`;
    document.getElementById("score").innerHTML +=`<br>`
    document.getElementById("score").innerHTML += `${userScore} -- ${botScore}`;

}


const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    userScore = 0;
    botScore = 0;
    round = 0;
    updateScore();
    resetResult();
});

const resetResult = () => {
    user = null;
    bot = null;
    document.getElementById("result-1").style.backgroundImage = "none";
    document.getElementById("result-2").style.backgroundImage = "none";
    document.getElementById("result").textContent = "PLAY AGAIN";
    document.getElementById("resultBox").style.backgroundColor = "white";
};






