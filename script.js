function rock() {
  
    const person=document.getElementById("person");
   const rock=document.getElementById("rock");
 const paper=document.getElementById("paper");
const scissors=document.getElementById("scissor");         
    person.innerHTML="Rock";
    rock.style.backgroundColor="red";
    scissors.style.backgroundColor="black";
    paper.style.backgroundColor="black";
  }
  
  function paper() {
    const person=document.getElementById("person");
   const rock=document.getElementById("rock");
 const paper=document.getElementById("paper");
const scissors=document.getElementById("scissor");         
    person.innerHTML="Paper";
    paper.style.backgroundColor="red";
    scissors.style.backgroundColor="black";
    rock.style.backgroundColor="black";
  }
  function scissors() {
    const person=document.getElementById("person");
   const rock=document.getElementById("rock");
 const paper=document.getElementById("paper");
const scissors=document.getElementById("scissor");         
    person.innerHTML="Scissors";
    scissors.style.backgroundColor="red";
    paper.style.backgroundColor="black";
    rock.style.backgroundColor="black";
  }
  
  
  
  function play(){
    const contain = document.getElementById("container");
    const pvalue=document.getElementById("pvalue");
    const cvalue=document.getElementById("cvalue");
    let pnum = Number(pvalue.textContent);
let cnum = Number(cvalue.textContent);
    const pchoice=["Rock","Paper","Scissors"];
  const randomindex = Math.floor(Math.random()*3);
  
  const pcchoice = pchoice[randomindex];
  console.log(pcchoice);
const compch = document.getElementById("pc");
const result = document.getElementById("winner");
compch.innerHTML=`${pcchoice}` ;
if (person.innerHTML=="Scissors" && compch.innerHTML=="Paper") {
  result.innerHTML="You win +1";
  pnum += 1 ;
} 
else if (person.innerHTML=="Rock" && compch.innerHTML=="Scissors") {
  result.innerHTML="You win +1";
  pnum += 1 ;
}
else if (person.innerHTML=="Paper" && compch.innerHTML=="Rock") {
  result.innerHTML="You win +1";
  pnum += 1 ;
}
else if (compch.innerHTML=="Rock" && person.innerHTML=="Scissors") {
  result.innerHTML = " You lost,Play Again!";
cnum += 1;
}
else if (compch.innerHTML=="Scissors" && person.innerHTML=="Paper") {
  result.innerHTML=" You lost,Play Again!";
  cnum += 1 ;
} 
else if (compch.innerHTML=="Paper" && person.innerHTML=="Rock") {
  result.innerHTML=" You lost,Play Again!";
  cnum += 1 ; 
}
else if (person.innerHTML===compch.innerHTML) {
  result.innerHTML="The Computer and You chose the same, It's a tie";
}

else  {
  result.innerHTML=" You haven't selected your weapon";
  compch.innerHTML="";
}
pvalue.textContent = pnum;
  cvalue.textContent = cnum;
  if (pnum > 4) {
  contain.style.display="none";
    result.innerHTML="YOU WONN🎉🎉";
  
  }
  else if (cnum > 4) {
    contain.style.display="none";
    result.innerHTML="You lost💔💔";

  }else {
    console.log("what?")
  }
  }