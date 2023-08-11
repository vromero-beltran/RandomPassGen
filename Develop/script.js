//my input should be validated and at least one character type should be selected
var characterLength = [];
var choiceArray = [];
var spChar = ['!','@','#','$','%','^','&','*','(',')','/','?','<','>'];
var lcChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var ucChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var nmChar = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
function writePassword() {
  var correctprompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if(correctprompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}
// make generatePassword function
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomLetter = Math.random() * choiceArray.length;
    password = password + choiceArray[randomIndex];
  }
  return password
}

function getPrompts() { //I am presented with a series of prompts for password criteria and confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? 8 - 128.")); // choicing length of at least 8 characters and no more than 128 characters
// making sure it isn't a string, lower than 8, higher then 128.
  if(isNaN(characterLength)|| characterLength < 8 || characterLength > 128) {
    alert('Must use numbers and/or character length has to be 8-128 digites.');
    return false;
  }
  if (prompt("Would you like lowercase letters?")) { //checking if they want lowercase letters in password.
    choiceArray = choiceArray.concat(lcChar);
  } 
  if (prompt("Would you like upperrcase letters?")) { //checking if they want uppercase letters in password.
    choiceArray = choiceArray.concat(ucChar);
  } 
  if (prompt("Would you like special letters?")) { // checking if they want special letters in password.
    choiceArray = choiceArray.concat(spChar);
  }
  if (prompt("Would you like numbers letters?")) { // checking if they want numbers in password.
    choiceArray = choiceArray.concat(nmChar);
  }
  return true;
}