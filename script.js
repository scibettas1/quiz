var questions = [

  {
    question: "What is the name of the main character in The Legend of Zelda game series?",
    choices: ["Link", "Ganon", "Zelda", "Navi"],
    answer: "Link",
  },
  {
    question: "What are the names of Magus's three evil Henchmen?",
    choices: ["Inky, Blinky, and Clyde", "Ozzy, Flea, and Slash", "Wendy, Lemmy, and Ludwig", "Aquamentus, Dodongo, Manhandla"],
    answer: "Ozzy, Flea, and Slash",
  },
  {
    question: "In what game did Super Mario first make his appearance?",
    choices: ["Duck Hunt", "Super Mario Brothers", "PacMan", "Donkey Kong"],
    answer: "Donkey Kong",
  },
  {
    question: "What's Cloud's favorite excercise?",
    choices: ["bench presses", "squats", "push-ups", "pull-ups"],
    answer: "squats",
  },
  {
    question: "The phrase 'All your base are belong to us' came from what game?",
    choices: ["Missile Command", "Galaga", "Zero Wing", "Star Fox"],
    answer: "Zero Wing",
  },
  {
    question: "What plagues the deep roads?",
    choices: ["Deepstalkers", "Indignant Spirits", "Corrupted Spiders", "Darkspawn"],
    answer: "Darkspawn",
  },
  {
    question: "I'm not a thief. I am a ____________.",
    choices: ["borrower", "treasure hunter", "pirate", "conqueror"],
    answer: "treasure hunter",
  },
  {
    question: "Which of the following is NOT a character in the Resident Evil game series?",
    choices: ["Alice", "Jill", "Leon", "Chris"],
    answer: "Alice",
  },

];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;
var time = 20;
var intervalId;

function endQuiz() {
  clearInterval(intervalId);
  var body = document.body;
  body.innerHTML = "Game Over. You scored " + correctCount;
  body.style.padding = "10px 10px 10px 10px";
  body.style.fontSize = "2.5rem"
  body.style.textAlign = "center"

  // wait 2 seconds and call saveHighScore;
  setTimeout(saveHighScore, 2000);




}
// need to split this function into 2 funciton a save function and a print function
function saveHighScore() {
  // write code here
  var name = prompt("Please enter your name.");

  var user = {
    name: name,
    score: correctCount
  }
  var high_scores = localStorage.getItem("scores");
    
  if (!high_scores) {
    high_scores = [];
  } else {
    high_scores = JSON.parse(high_scores);
  }

  high_scores.push(user);

  high_scores.sort(function (a, b) {
    return b.score - a.score;
})


  window.location.href = "highscores.html";
}



function updateTime() {
  time--;
  timerEl.textContent = "Time Remaining: " + time;
  if (time <= 0) {
    endQuiz();
  }
}

function renderQuestion() {
  if (time == 0) {
    updateTime();
    return;
  }

  intervalId = setInterval(updateTime, 1000);
  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLenth = choices.length;

  for (var i = 0; i < choicesLenth; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    time = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("li")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      //questionResultEl.textContent = "Correct";
      correctCount++;
    } else {
      //questionResultEl.textContent = "Incorrect";
      time = time - 2;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 0);
}

renderQuestion();
optionListEl.addEventListener("click", checkAnswer);

