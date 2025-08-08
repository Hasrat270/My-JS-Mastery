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

// Dummy user Data

const dummyUserData = {
    firstName: "Hasrat",
    lastName: "Afridi",
    age: 21,
    hobbies: ["Coding", "Gaming", "Watching Movies"]
};

const displayUserDataButtonElement = document.querySelector("#user-data button");

function displayUserData() {

    const outputUserDataElement = document.getElementById("output-user-data");
    
    outputUserDataElement.innerHTML = "";

        for (const key in dummyUserData) {
            const newUserDataListItemElement = document.createElement("li");

            const outputText = key.toUpperCase() + ": " + dummyUserData[key];
            newUserDataListItemElement.textContent = outputText;

            outputUserDataElement.append(newUserDataListItemElement);
        }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// Statistics / Roll the Dice Example

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
    // Math.floor() : 56.3 ==> 56
}

function deriveNumberOfDiceRolls() {

    const targetNumberInputElement = document.getElementById("user-target-number");
    const diceRollsListElement = document.getElementById("dice-rolls");
    const enteredTargetNumber = targetNumberInputElement.value;
    
    diceRollsListElement.innerHTML = "";
    
    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;
    
    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();

        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }

        numberOfRolls++;
        const newRollListItemElement = document.createElement("li");
        const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enteredTargetNumber;

    }

    const outputTotalRollsElement = document.getElementById("output-total-rolls");
    const outputTargetNumberElement = document.getElementById("output-target-number");

    outputTargetNumberElement.textContent = enteredTargetNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
};

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);