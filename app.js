let userScore = 0;
let computerScore= 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genCompChoice = () =>{
  const options = ["rock","paper","scissor"]
  const randomIndex =  Math.floor(Math.random() *3)
  return options[randomIndex]
}

const drawGame = () =>{
  // console.log('game was draw')  // for debugging
  msg.innerText = "Game was draw. Play again"
  msg.style.backgroundColor = " #081b31"

}

const showWinner = (userWin, userChoice, comChoice) =>{
  if(userWin){
    userScore ++;
    userScorePara.innerText = userScore
    // console.log("You win !")  //  for debugging
    msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`
     msg.style.backgroundColor = "green"
  } else{
    computerScore ++;
    computerScorePara.innerText = computerScore
    // console.log("you lose") //  for debugging
    msg.innerText = `You lose! ${comChoice} beats your ${userChoice}`
     msg.style.backgroundColor = "red"

  }
}


const playGame = (userChoice) => {
   console.log("user choice", userChoice);
   //Generate computer choice
   const comChoice = genCompChoice()
   console.log('computer choice', comChoice)


   if(userChoice === comChoice){
      drawGame()
   } else {
    let userWin = true;
    if(userChoice === "rock"){
      //scissor, paper
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper"){
      //rock, scissor
      userWin = comChoice ==="scissor" ? false : true;
    } else{
      //rock, paper
      userWin = comChoice === "rock" ?  false : true;
    }
    showWinner(userWin, userChoice, comChoice)
   }
}


choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    const userChoice = choice.getAttribute('id')
    //  console.log("choice was clicked", userChoice)
     playGame(userChoice)
  })
})