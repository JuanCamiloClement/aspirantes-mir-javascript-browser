const error = "No es palindroma";

function palindrome(string) {
    const preparedString = string.toLowerCase();
    const array = preparedString.split("");
    let newText = "";
    for(i = array.length - 1; i > -1; i = i - 1){
        let capturedElement = array[i];
        newText = newText + capturedElement;
    } if (newText == preparedString) {
        return newText;
    } else {
        return error;
    }
}

console.log(palindrome("jUan"));