var readlineSync = require("readline-sync");

var highscore = {
  name: "Stranger",
  topScore: 5
};

var score = 0;

quizItems = [
  {
    question: "What is my favorite food? ",
    answer: "Maggi"
  },
  {
    question: "When is my birthday? ",
    answer: "29 March"
  },
  {
    question: "What is my zodiac sign? ",
    answer: "Aries"
  },
  {
    question: "If I could be any animal, what would it be? ",
    answer: "Panda"
  },
  {
    question: "Do I like to read? ",
    answer: "Yes"
  },
  {
    question: "Movies/Books? ",
    answer: "Books"
  },
  {
    question: "Where do I live? ",
    answer: "Surat"
  },
]

function welcomeMessage(){
  var username = readlineSync.question("Hola! Please enter your name:")
  console.log("\nHello " +  username + ":)");
  console.log("\n")
  console.log("Welcome to 'HOW WELL DO YOU KNOW ME?' quiz.")
  readlineSync.question("Let's see if you can beat the Highscore " + highscore.topScore + "? \nPress Enter to play.\n");
  playGame(); 
}


function checkAnswer(n , question , answer){
  var userAnswer = readlineSync.question(n + ". "+ question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Correct! ;)")
    score++;
  }
  else{
    console.log("Incorrect. :(");
  }
  console.log("Score: "+ score+"\n");
}

function playGame(){
  for(var i = 0; i<quizItems.length; i++){
    checkAnswer(i+1, quizItems[i].question , quizItems[i].answer);
  }
  displayScore();
}

function displayScore(){
  console.log("Hurray! Your total score is " +score);

  if(score > highscore.topScore){
    highscore.topScore = score;
    console.log("\nCongratulations! :) You have beaten the highscore. \nNew HIGHSCORE: " + score)
  }
  console.log("\nThanks for playing.")
}

welcomeMessage();