// create print fucntion that gets info from local storage and prints it ot highscores.js

function printScore() {

      var high_scores = localStorage.getItem("scores");
    
      high_scores.sort(function (a, b) {
        return b.score - a.score;
      })
      var contentUl = document.createElement("ul");
    
      for (i = 0; i < high_scores.length; i++) {
        var contentLi = document.createElement("li");
        contentLi.textContent = "Name: " + high_scores[i].name + " Score: " + high_scores[i].score;
        contentUl.append(contentLi);
      }
    document.getElementById("#high-scores").append(contentUl);

  }
