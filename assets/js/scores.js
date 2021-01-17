const viewScores = document.getElementById("viewScores");
const nameList = document.getElementById("nameList");
const playAgain = document.getElementById("playAgain");
const recentScoresList = document.getElementById("recentScoresList");
const recentScores = JSON.parse(localStorage.getItem('recentScores')) || [];


// Button Event Listener //
viewScores.addEventListener('click', showScores);

function showScores() {
    nameList.classList.remove('hide');
    viewScores.classList.add('hide');
    playAgain.classList.add('hide');
    recentScoresList.innerHTML = 
    recentScores.map(recentScores => {
    return `<li class="recentScoreListItems">${recentScores.name}: ${recentScores.score}</li>`;
}).join("");
}
