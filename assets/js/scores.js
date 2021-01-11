const username = document.getElementById("username")
const recentScoreBtn = document.getElementById("recent-score-btn")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const nameList = document.getElementById("nameList")
const newName = document.getElementById("newName")

console.log(mostRecentScore)

recentScoreBtn.addEventListener('click', addName)

function addName() {
    nameList.classList.remove('hide')
    newName.classList.add('hide')
}