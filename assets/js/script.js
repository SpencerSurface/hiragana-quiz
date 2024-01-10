let currentQuestionNum = 1;
const quizLength = 2;
const mcOptions = 4;
let quizScore = 0;
let questionKana = [];
let isAnswered = false;

const startButton = document.querySelector("#start-button");
const startDiv = document.querySelector("#start-div");
const mainEl = document.querySelector("main");
let nextButton;
let mcButtons;
let alertEl;
const quizDiv = createQuizDiv();



startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", displayNextQuestion);
quizDiv.addEventListener("click", handleQuizDivClick);



function startQuiz() {
    startDiv.remove();

    mainEl.append(quizDiv);

    currentQuestionNum = 1;
    quizScore = 0;
    questionKana = [];

    for (let i = 0; i < quizLength; i++) {
        questionKana.push(randomKana());
    }

    displayNewQuestion();
}

function createQuizDiv() {
    let quizDiv = document.createElement("div");
    quizDiv.id = "quiz-div";
    let kanaDiv = document.createElement("div");

    let kanaSpan = document.createElement("span");
    kanaSpan.id = "kana-span";
    kanaDiv.append(kanaSpan);
    quizDiv.append(kanaDiv);

    for (let i = 0; i < mcOptions; i++) {
        let mcButton = document.createElement("button");
        mcButton.classList.add("mc-button");
        quizDiv.append(mcButton);
    }

    // Note: global scope
    nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
    quizDiv.append(nextButton);

    return quizDiv;
}

function displayNewQuestion() {
    isAnswered = false;
    nextButton.disabled = true;

    let currentKana = questionKana[currentQuestionNum - 1].kana;
    let currentRomaji = questionKana[currentQuestionNum - 1].romaji;
    document.querySelector("#kana-span").textContent = currentKana;

    let romajiList = [currentRomaji];
    let tempRomaji = "";
    while (romajiList.length < mcOptions) {
        tempRomaji = randomKana().romaji;
        if (!romajiList.includes(tempRomaji)) {
            romajiList.push(tempRomaji);
        }
    }

    // Note: global scope
    mcButtons = document.querySelectorAll(".mc-button");
    for (let i = 0; i < mcButtons.length; i++) {
        tempRomaji = romajiList.splice(Math.floor(romajiList.length * Math.random()), 1)[0]
        mcButtons[i].textContent = (i + 1) + ". " + tempRomaji;
        mcButtons[i].setAttribute("data-romaji", tempRomaji);
    }
}

function displayNextQuestion() {
    currentQuestionNum++;
    if (currentQuestionNum <= quizLength) {
        displayNewQuestion();
    } else {
        console.log("end");
    }
}

function handleQuizDivClick(event) {
    if (event.target.classList.contains("mc-button")) {
        if (!isAnswered) {
            if (checkAnswer(event.target.dataset.romaji)) {
                alert("Correct!");
                quizScore++;
            } else {
                alert("Wrong!");
            }
            isAnswered = true;
            nextButton.disabled = false;
        } else {
            console.log("answered");
        }
    } else {
        return;
    }
}

function checkAnswer(answeredRomaji) {
    return answeredRomaji === questionKana[currentQuestionNum - 1].romaji;
}

function randomKana() {
    return kanaList[Math.floor((kanaList.length - 1) * Math.random())];
}