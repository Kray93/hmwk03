// Assignment Code
var lower = ['abcdefghijklmnopqrstuvwxyz']
var upper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var number = ['0123456789']
var special = ['!@#$%^&*()_+=-<>/?']
var generateBtn = document.querySelector("#generate");

// ask password length
var passwordLength = prompt ("Please choose password length between 6-20 characters!")
// ask if user want to use lower case letters
var askLower = prompt("Do you want lower case letters?")
// ask if user wants upper case letters
var askUpper = prompt("Do you want upper case letters?")
// ask if user wants numbers
var askNumber = prompt("Do you want numbers?")
// ask if user wants special characters
var askSpecial = prompt("Do you want special characters?")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    
    
    
    
    
    return compilation
}


"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
