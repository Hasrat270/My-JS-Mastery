// First Example : Sum numbers
const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
    const userNumberInputElement = document.getElementById("user-number");
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }
}

calculateSumButtonElement.addEventListener("click", calculateSum);