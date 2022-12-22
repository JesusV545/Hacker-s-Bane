// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creating arrays and prompt vars for various characters to be included in password 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//need to define generatePassword
function generatePassword() {

  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["~", "{", "}", "|", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "\\", "]", "[", ";", ":", "/", ".", ",", "?", ">", "<"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = [];// var upperCase = ["instead of writing them all out again upper case I could use methods"]

  var makeUpper = function(x) {
    return x.toUpperCase();
  }
  upperCase = lowerCase.map(makeUpper);

  var passLength;
  passLength = prompt("How many characters would you like your password to be? Must between 8 and 128 characters.");
  console.log("Password length " + passLength);

  var conNum = confirm("Would you like this password to contain numbers?");;
  var conSpecial = confirm("Would you like this password to contain special characters?");;
  var conLower = confirm("Would you like this password to contain lower case letters?");;
  var conUpper = confirm("Would you like this password to contain upper case letters?");;
  var userChoice = [];
  var password = '';

  if (!passLength) {
    alert('Required value!');
  }
  else if (passLength < 8 || passLength > 128) {
    passLength = prompt('Password must be between 8 and 128!');
  } 

//concat will let me join two arrays together. in this case it'll merge it with userChoice
  if (conNum) {
    userChoice = userChoice.concat(num); 
  }
  if (conSpecial) {
    userChoice = userChoice.concat(specialChar);
  }
  if (conLower) {
    userChoice = userChoice.concat(lowerCase);
  }
  if (conUpper) {
    userChoice = userChoice.concat(upperCase);
  }
//need a for loop to go through all arrays and choose by random
  for (var i = 0; i < passLength; i++)
    password += userChoice[Math.floor(Math.random() * userChoice.length)];

//now just return password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
