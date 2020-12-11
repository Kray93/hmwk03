// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate password function
function generatePassword() {
    // list of variables and arrays
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "<", ">", "_", "-"];
    var userLength = 0;
    var okayChar = [];
    var randomPass = [];
    var generateBtn = document.querySelector("#generate");

    // ask password length
    while (userLength < 8 || userLength > 128) {
        userLength = prompt("Please choose password length between 8-128 characters!");
        console.log("user selection: " + userLength);
        // alert("Please select valid number!");
    }


    // ask if user want to use lower case letters
    var askLower = confirm("Do you want lower case letters?")

    // add or exclude lower case letters in password
    if (askLower === true) {
        // okayChar.push(lowerCase)
        okayChar=okayChar.concat(lowerCase)
        console.log("Lower case OK: " + true);
    } else {
        console.log("Lower case OK: " + false);
    }


    // ask if user wants upper case letters
    var askUpper = confirm("Do you want upper case letters?")

    // add or exclude upper case letters in password
    if (askUpper === true) {
        // okayChar.push(upperCase)
        okayChar=okayChar.concat(upperCase)
        console.log("Upper case OK: " + true);
    } else {
        console.log("Upper case OK: " + false);
    }


    // ask if user wants numbers
    var askNumber = confirm("Do you want numbers?")

    // add or exclude numbers in password
    if (askNumber === true) {
        // okayChar.push(numbers)
        okayChar=okayChar.concat(numbers)
        console.log("Numbers OK: " + true);
    } else {
        console.log("Numbers OK: " + false);
    }


    // ask if user wants special characters
    var askSpecial = confirm("Do you want special characters?")

    // add or exclude special characters in password
    if (askSpecial === true) {
        // okayChar.push(specialChar)
        okayChar=okayChar.concat(specialChar)
        console.log("Special characters OK: " + true);
    } else {
        console.log("Special characters OK: " + false);
    }
console.log(okayChar);
    // TODO: add edge case prompt if user does not accept at least on selection

    // loop to randomly select okayChar for randomPass
    for (var i = 0; i < userLength; i++) {
        randomPass.push(okayChar[Math.floor(Math.random() * okayChar.length)]);
    }
    //array concatenate. create a string from array randomPass
    return randomPass.join("")
    

}
