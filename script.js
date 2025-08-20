document.getElementById("theme-select").addEventListener("change",function(){
  document.body.classList.toggle("dark")
})
const home = document.getElementById("home")
const gameContainer = document.getElementById("game-container");
const resultContainer = document.getElementById("game-container");
const userChose = document.getElementById("userChose")
const computerChose = document.getElementById("computerChose");
const analysis = document.getElementById("Analysis");
const userScoreText= document.getElementById("userScoreText")
const computerScoreText= document.getElementById("computerScoreText");
let userScore = 0;
let computerScore=0;
function pcChoice(){
  const array = ["Rock","Paper","Scissors"];
  return array[Math.floor(Math.random()*array.length)]
}
function didUserWon(user,pc){
  if(user==="Rock" && pc==="Scissors"){
 return true;
  }
  else if(user==="Paper" && pc==="Rock"){
 return true;
  }
  else if(user==="Scissors" && pc==="Paper"){
 return true;
  }
  else{
    return false;
  }
}
function gameReset(){
  userScore=0;
  computerScore=0;
  userChose.innerHTML="";
  computerChose.innerHTML="";
  analysis.innerHTML="Analysis"
}
function startGame(){
resultContainer.style.display="none";
home.style.display="none";
gameContainer.style.display="flex"
gameReset();
}
function checkScores(){
  if(userScore===3){
    resultContainer.innerHTML=`<h2>You Won!</h2>
    <button type="button" id="playAgain" onclick="startGame()">Play Again</button>`;
    gameContainer.style.display="none";
    resultContainer.style.display="flex";
  }
  else if(computerScore===3){
    resultContainer.innerHTML='<h2>You lost</h2> <button type="button" id="tryAgain" onclick="startGame()">Try Again</button>';
 gameContainer.style.display="none";
  resultContainer.style.display="flex";
  }
}
function chosen(elem){
    document.querySelectorAll(".choice").forEach(el=>el.setAttribute("disabled",true))
  userChose.style.animation="";
  computerChose.style.animation=""
  userChose.innerHTML=`  <img src="${elem.id}.png" alt="">`
  const computerChoice = pcChoice();
  setTimeout(function(){
computerChose.innerHTML=`  <img src="${computerChoice}.png" alt="">`
  },200)
  setTimeout(function(){
if(didUserWon(elem.id,computerChoice)){
    analysis.innerHTML="You won the round";
    userChose.style.animation="up 1s ease";
    userScore++;
    userScoreText.textContent=userScore;
    checkScores()
  }
  else if(elem.id===computerChoice){
   analysis.innerHTML="Tie"
  }
  else{
    analysis.innerHTML="You lost the round";
     computerChose.style.animation="up 1s ease";
     computerScore++;
    computerScoreText.textContent=computerScore;
     checkScores()
  }
  userChose.innerHTML="";
  computerChose.innerHTML="";
    document.querySelectorAll(".choice").forEach(el=>el.removeAttribute("disabled"))
  },1000)

}