// create print fucntion that gets info from local storage and prints it ot highscores.js
var resultsEl = document.querySelector("#high-scores");
var high_scores = localStorage.getItem("scores");

if (!high_scores) {
    high_scores = [];
  } else {
    high_scores = JSON.parse(high_scores);
  }


printScore()

function printScore() {
    var contentUl = document.createElement("ul");
    var contentLi = document.createElement("li");
    for (i = 0; i < high_scores.length; i++) {
        contentLi.textContent = "Name: " + high_scores[i].name + " Score: " + high_scores[i].score;
        contentUl.append(contentLi);
        console.log(contentUl)
    }
    high_scores.sort(function (a, b) {
        return b.score - a.score;
    })


    resultsEl.append(contentUl);
    console.log(contentUl)

}

