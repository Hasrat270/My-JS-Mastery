// First Example : Sum numbers
const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
    const userNumberInputElement = document.getElementById("user-number");
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById("calculated-sum");

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// For Loop
const highlightLinksButtonElement = document.querySelector("#highlight-links button");

function highlightLinks() {
    const anchorElements = document.querySelectorAll("#highlight-links a");

    for (const element of anchorElements) {
        element.classList.add("highlight");
    }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);