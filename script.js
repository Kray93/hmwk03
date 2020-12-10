// Assignment Code
var lower = ['abcdefghijklmnopqrstuvwxyz']
var upper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var number = ['0123456789']
var special = ['!@#$%^&*()_+=-<>/?']
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    // ask password length
    var passwordLength = prompt ("Please choose password length between 6-20 characters!")
    
    
    
    
    return compilation
}


"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
