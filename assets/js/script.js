let currentQuestionNum = 1;
const quizLength = 2;
const mcOptions = 4;
let quizScore = 0;

let questionKana = [];

const startButton = document.querySelector("#start-button");
const startDiv = document.querySelector("#start-div");
const mainEl = document.querySelector("main");
let nextButton;
let mcButtons;
const quizDiv = createQuizDiv();



startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", displayNextQuestion);



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
    // nextButton.setAttribute("disabled", true);
    quizDiv.append(nextButton);

    return quizDiv;
}

function displayNewQuestion() {
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
        mcButtons[i].textContent = (i + 1) + ". " + romajiList.splice(Math.floor(romajiList.length * Math.random()), 1)[0];
    }
}

function displayNextQuestion() {
    console.log(currentQuestionNum, quizLength);
    currentQuestionNum++;
    if (currentQuestionNum <= quizLength) {
        displayNewQuestion();
    } else {
        console.log("end");
    }
}

function randomKana() {
    return kanaList[Math.floor((kanaList.length - 1) * Math.random())];
}