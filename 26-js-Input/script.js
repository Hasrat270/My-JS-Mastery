let inputElement = document.querySelector("input");

function retrieveUserInput() {
    let userInput = inputElement.value;
    console.log(userInput);
}
    

inputElement.addEventListener("input", retrieveUserInput);