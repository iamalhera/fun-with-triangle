const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers =
    ["90°",
    "right-angled",
    "yes",
    "yes",
    "yes",
    "Equilateral Triangles",
    "a+b+c",
    "Scalene Triangle",
    "3cm",
    "30°"];

function submitButtonhandler() {
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {

        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }

    output.innerText = "Your Score is : " + score;
}

submitButton.addEventListener("click", submitButtonhandler);
