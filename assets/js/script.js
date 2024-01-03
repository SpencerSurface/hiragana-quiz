const startButton = document.querySelector("#start-button");
const startDiv = document.querySelector("#start-div");
const mainEl = document.querySelector("main");
const quizDiv = createQuizDiv();

let quizRunning = true;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startDiv.remove();

    mainEl.append(quizDiv);

    // document.querySelector("main").append(startDiv);
}

function createQuizDiv() {
    let quizDiv = document.createElement("div");
    quizDiv.id = "quiz-div";
    let kanaDiv = document.createElement("div");

    let kanaSpan = document.createElement("span");
    kanaSpan.id = "kana-span";
    kanaSpan.textContent = "ぁ";
    kanaDiv.append(kanaSpan);
    quizDiv.append(kanaDiv);

    for (let i = 0; i < 4; i++) {
        let mcButton = document.createElement("button");
        mcButton.classList.add("mc-button");
        mcButton.textContent = i + 1;
        quizDiv.append(mcButton);
    }

    return quizDiv;
}