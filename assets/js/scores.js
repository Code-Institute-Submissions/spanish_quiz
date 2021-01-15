const username = document.getElementById("scoreForm")
const recentScoreBtn = document.getElementById("recent-score-btn")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const nameList = document.getElementById("nameList")
const newName = document.getElementById("newName")
const recentScoresList = document.getElementById("recentScoresList")
const recentScores = JSON.parse(localStorage.getItem('recentScores')) || []
let userScore

// Button Event Listener //
recentScoreBtn.addEventListener('click', addName)


// Hide form and show List of names //
function addName() {
    nameList.classList.remove('hide')
    newName.classList.add('hide')   
    scoreList()
}

// Set and retrieve names and scores from local storage  //
function scoreList() {
  userScore = {
      name : username.name.value, 
      score :  mostRecentScore
  }

    recentScores.push(userScore)

    recentScores.sort((a,b) => {
        return b.score - a.score
    })

    recentScores.splice(5)

    localStorage.setItem('recentScores', JSON.stringify(recentScores))

    recentScoresList.innerHTML = 
    recentScores.map(recentScores => {
    return `<li class="high-score">${recentScores.name}: ${recentScores.score}</li>`
}).join("")

}
