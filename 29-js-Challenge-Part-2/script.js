const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedCharacters = productNameInputElement.maxLength;


function updateRemainingCharacters(event) {

    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const remainingCharacters = maxAllowedCharacters - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters > 10 && remainingCharacters => 0) {
        remainingCharsElement.style.color = "red";
    }

}

productNameInputElement.addEventListener("input", updateRemainingCharacters)