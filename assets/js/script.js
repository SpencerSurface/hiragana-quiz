// Variables
let currentQuestionNum = 1;
const quizLength = 20;
const mcOptions = 4;
let quizScore = 0;
let questionKana = [];
let isAnswered = false;

// Select and create elements
const startButton = document.querySelector("#start-button");
const startDiv = document.querySelector("#start-div");
const mainEl = document.querySelector("main");
let nextButton;
let mcButtons;
let alertEl;
const quizDiv = createQuizDiv();
let returnButton;
let scoreSpan;
const endDiv = createEndDiv();


// Event listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", displayNextQuestion);
quizDiv.addEventListener("click", handleQuizDivClick);
returnButton.addEventListener("click", returnToStart);


// Function definitions
// Starts the quiz
function startQuiz() {
    // Remove the start screen
    startDiv.remove();

    // Append the quiz screen
    mainEl.append(quizDiv);

    // Reset the question number, score, and question kana
    currentQuestionNum = 1;
    quizScore = 0;
    questionKana = [];

    // Pick random kana for the questions
    for (let i = 0; i < quizLength; i++) {
        questionKana.push(randomKana());
    }

    // Display the first question
    displayNewQuestion();
}

// Ends the quiz
function endQuiz() {
    // Remove the quiz screen
    quizDiv.remove();
    // Display the final score
    scoreSpan.textContent = quizScore;
    // Append the game over screen
    mainEl.append(endDiv);
}

// Creates the div element for the quiz
function createQuizDiv() {
    let quizDiv = document.createElement("div");
    quizDiv.id = "quiz-div";
    let kanaDiv = document.createElement("div");

    let kanaSpan = document.createElement("span");
    kanaSpan.id = "kana-span";
    kanaDiv.append(kanaSpan);
    quizDiv.append(kanaDiv);

    let mcDiv = document.createElement("div");
    mcDiv.classList.add("mc-div");

    for (let i = 0; i < mcOptions; i++) {
        let mcButton = document.createElement("button");
        mcButton.classList.add("mc-button");
        mcDiv.append(mcButton);
    }

    quizDiv.append(mcDiv);

    // Note: global scope
    nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
    quizDiv.append(nextButton);

    return quizDiv;
}

// Creates the div element for the game over screen
function createEndDiv() {
    let endDiv = document.createElement("div");
    endDiv.id = "end-div";
    let headingEl = document.createElement("h2");
    headingEl.textContent = "Game Over";
    let scoreEl = document.createElement("p");
    // Note: global scope
    scoreSpan = document.createElement("span");
    scoreSpan.id = "score-span";
    scoreEl.append("Your score is ", scoreSpan, "/" + quizLength);
    // Note: global scope
    returnButton = document.createElement("button");
    returnButton.textContent = "Go Back";
    returnButton.id = "return-button";
    endDiv.append(headingEl, scoreEl, returnButton);

    return endDiv;
}

// Displays a question
function displayNewQuestion() {
    // Select the multiple choice buttons if necessary
    // Note: global scope
    if (!mcButtons) {
        mcButtons = document.querySelectorAll(".mc-button");
    }

    // Update flag
    isAnswered = false;
    // Disable the next button
    nextButton.disabled = true;
    // Remove styling from the multiple choice buttons
    if (mcButtons) {
        console.log("hi")
        for (let i = 0; i < mcButtons.length; i++) {
            mcButtons[i].classList.remove("correct-answer");
            mcButtons[i].classList.remove("wrong-answer");
        }
    }

    // Get the current question's kana and romanization
    let currentKana = questionKana[currentQuestionNum - 1].kana;
    let currentRomaji = questionKana[currentQuestionNum - 1].romaji;
    // Display the kana to the screen
    document.querySelector("#kana-span").textContent = currentKana;

    // Get additional, incorrect romanizations
    let romajiList = [currentRomaji];
    let tempRomaji = "";
    while (romajiList.length < mcOptions) {
        tempRomaji = randomKana().romaji;
        if (!romajiList.includes(tempRomaji)) {
            romajiList.push(tempRomaji);
        }
    }

    // Display and save as data the romanizations in the multiple choice buttons
    for (let i = 0; i < mcButtons.length; i++) {
        tempRomaji = romajiList.splice(Math.floor(romajiList.length * Math.random()), 1)[0]
        mcButtons[i].textContent = (i + 1) + ". " + tempRomaji;
        mcButtons[i].setAttribute("data-romaji", tempRomaji);
    }
}

// Displays the next question
function displayNextQuestion() {
    // Increment the question number
    currentQuestionNum++;
    // Display the question for the updated question number or end the quiz
    if (currentQuestionNum <= quizLength) {
        displayNewQuestion();
    } else {
        endQuiz();
    }
}

// Handles the event in which the quiz div is clicked
function handleQuizDivClick(event) {
    // Only interested in clicks on the multiple choice buttons
    if (event.target.classList.contains("mc-button")) {
        // Only interested if the question hasn't already been answered
        if (!isAnswered) {
            // Update the score and display whether the user was correct
            if (checkAnswer(event.target.dataset.romaji)) {
                quizScore = quizScore + 1;
                alert("Correct!");
            } else {
                alert("Wrong!");
            }
            // Update flag
            isAnswered = true;
            // Enable the next button
            nextButton.disabled = false;
            // Add classes to style the mc buttons based on the user's answer
            for (let i = 0; i < mcButtons.length; i++) {
                if (mcButtons[i].dataset.romaji === questionKana[currentQuestionNum - 1].romaji) {
                    mcButtons[i].classList.add("correct-answer");
                } else {
                    mcButtons[i].classList.add("wrong-answer");
                }
            }
        }
    }
}

// Checks whether a given answer is correct
function checkAnswer(answeredRomaji) {
    // Note: based on the current question number
    return answeredRomaji === questionKana[currentQuestionNum - 1].romaji;
}

// Returns to the start screen
function returnToStart() {
    // Remove the game over screen
    endDiv.remove();
    // Append the start screen
    mainEl.append(startDiv);
}

// Picks a random kana from the list of kana
function randomKana() {
    return kanaList[Math.floor((kanaList.length - 1) * Math.random())];
}