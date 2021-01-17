const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const saveButton = document.getElementById('saveScore-btn');
const welcome = document.getElementById('welcome');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const closeButton = document.getElementById('close');
const currentScore = document.getElementById('currentScore');
let randomQuestions;
let questionIndex;
let score = 0;

// Button Event Listeners //
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click',() => {
    questionIndex++;
    setNextQuestion();
});

restartButton.addEventListener('click',() => {
    $('#scoreModal').modal('hide');
    currentScore.innerText = 0;
    score = 1;
    startGame();
});

saveButton.addEventListener('click',() => {
    clearStatusClass(document.body);
});

closeButton.addEventListener('click',() => {
    $('#scoreModal').modal('hide');
    currentScore.innerText = 0;
    score = 0;
    startGame();
});

// Start Quiz Function //

function startGame() {
    welcome.classList.add('hide');
    startButton.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5).slice(0, 5);
    questionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

// Sets next question in quiz //

function setNextQuestion() {
    resetState();
    showQuestion(randomQuestions[questionIndex]);
}

// Displays questions //

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.ans;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Resets quiz state //

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Displays answers or modal if question is finished //

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    setScore(selectedButton);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (randomQuestions.length > questionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        $("#scoreModal").modal('show');
        modalScore.innerText = score;
        startButton.innerText = 'Restart';
        localStorage.setItem('mostRecentScore', modalScore.innerText);
    }
}

// Sets the users score //

function setScore(button) {
    if (button.dataset.correct) {
        currentScore.innerText = ++score;
    }
}

// Adds background colour to hightligh if answer is right or wrong //

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong');
    }
}

// Clears background color for each new question back to nuetral //

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

