// const username = document.getElementById("scoreForm");
const formInput = document.getElementById('username')
const mostRecentScore = localStorage.getItem("mostRecentScore")
const recentScoreBtn = document.getElementById('recent-score-btn');
const recentScores = JSON.parse(localStorage.getItem('recentScores')) || [];
let userScore;

formInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        scoreList();
        console.log('Yay')
    }
    return false;
});


function scoreList() {
    userScore = {
        name: formInput.value,
        score: mostRecentScore
    };

    recentScores.push(userScore);

    recentScores.sort((a, b) => {
        return b.score - a.score;
    });

    recentScores.splice(5);

    localStorage.setItem('recentScores', JSON.stringify(recentScores));

    window.location.assign('scores.html');

}