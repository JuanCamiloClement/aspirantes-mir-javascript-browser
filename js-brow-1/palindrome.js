const initialText = document.querySelector('#text');
const button = document.querySelector('#button');
const resultText = document.querySelector('#resultPalindrome');
const error = "No es palindroma";

button.addEventListener('click',function(){
    const preparedText = initialText.value.toLowerCase();
    const array = preparedText.split("");
    let newText = "";
    for(i = array.length - 1; i > -1; i = i - 1){
        let capturedElement = array[i];
        newText = newText + capturedElement;
    } if (newText == preparedText) {
        resultText.textContent = newText;
    } else {
        resultText.textContent = error
    }
})