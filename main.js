const readline = require("readline-sync");

let userInput;

do {
    userInput = readline.question("Please enter a string below: ");

    if (userInput === "") {
        console.log("You did not enter a valid string. Please try again.");
    }

} while (userInput === "");

console.log("Your input: " + userInput);

let index;

do {
    index = readline.questionInt(
        "Please enter an index number to retrieve the character at that index: "
    );

    if (index < 0 || index >= userInput.length) {
        console.log("The index you entered is out of range. Please enter a valid index.");
    }

} while (index < 0 || index >= userInput.length);

console.log("Your index: " + index);
console.log("The character at the index you entered is: " + userInput[index]);
