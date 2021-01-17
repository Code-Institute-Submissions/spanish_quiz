const username = document.getElementById("scoreForm")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const recentScores = JSON.parse(localStorage.getItem('recentScores')) || []
let userScore


function scoreList() {
    userScore = {
        name: username.name.value,
        score: mostRecentScore
    }

    recentScores.push(userScore)

    recentScores.sort((a, b) => {
        return b.score - a.score
    })

    recentScores.splice(5)

    localStorage.setItem('recentScores', JSON.stringify(recentScores))

    window.location.assign('/scores.html')

}