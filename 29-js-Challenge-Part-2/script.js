const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedCharacters = productNameInputElement.maxLength;


function updateRemainingCharacters(event) {
    // Get the text that was just typed in
    const enteredText = event.target.value;

    // Calculate the length of the entered text
    const enteredTextLength = enteredText.length;

    // Calculate the remaining characters
    const remainingCharacters = maxAllowedCharacters - enteredTextLength;

    // Update the display
    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters)