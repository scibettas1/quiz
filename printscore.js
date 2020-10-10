// create print fucntion that gets info from local storage and prints it ot highscores.js
var resultsEl = document.querySelector("#high-scores");
var high_scores = localStorage.getItem("scores");

high_scores = JSON.parse(high_scores);

printScore()

function printScore() {
    var contentUl = document.createElement("ul");

    for (var i = 0; i < high_scores.length; i++) {
        var contentLi = document.createElement("li");
        contentLi.textContent = "Name: " + high_scores[i].name + " Score: " + high_scores[i].score;
        contentUl.append(contentLi);
        console.log(contentUl)
    }

    resultsEl.append(contentUl);
    console.log(contentUl)
}

