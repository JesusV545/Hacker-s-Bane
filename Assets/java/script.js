// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creating arrays for various characters to be included in password 
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "{", "}", "|", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "\\", "]", "[", ";", ":", "/", ".", ",", "?", ">", "<"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCase = ["instead of writing them all out again upper case I could use methods"]
var upperCase = [];
var makeUpper = function(x) {
  return x.toUpperCase();
}
upperCase = lowerCase.map(makeUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//different prompts vars
var passLength;
var conNum;
var conSpecial;
var conLower;
var conUpper;
var userChoice;

//need to define generatePassword
generatePassword() {

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
