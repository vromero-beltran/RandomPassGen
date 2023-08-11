//my input should be validated and at least one character type should be selected

var spChar = ['!','@','#','$','%','^','&','*','(',')','/','?','<','>'];
var lcChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var ucChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var nmChar = ['1','2','3','4','5','6','7','8','9','0'];

function getPrompts() { //I am presented with a series of prompts for password criteria and confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  // making sure it isn't a string, lower than 8, higher then 128.
  var characterLength = parseInt(prompt("How many characters do you want your password to be? 8 - 128.")); // choicing length of at least 8 characters and no more than 128 characters
  if(isNaN(characterLength)|| characterLength < 8 || characterLength > 128) {
    alert('Must use numbers and/or character length has to be 8-128 digites.');
    return false;
  }
  var haslcChar = confirm("Do you accept lowercase letters? Click OK if you do, Cancel if you don't"); //checking if they want lowercase letters in password.
    console.log(haslcChar);
  var hasucChar = confirm("Do you accept upperrcase letters? Click OK if you do, Cancel if you don't"); //checking if they want uppercase letters in password.
    console.log(hasucChar);
  var hasspChar = confirm("Do you acceot special letters? Click OK if you do, Cancel if you don't"); // checking if they want special letters in password.
    console.log(hasspChar);
  var hasnmChar = confirm("Do you accept numbers in your password? Click OK if you do, Cancel if you don't"); // checking if they want numbers in password.
    console.log(hasnmChar);
    if (haslcChar === false && hasucChar === false && hasspChar === false && hasnmChar === false){
      alert("Enter at least one character.")
      return null;
    }
    var passwordprompts = {
      lowerChar: haslcChar,
      upperChar: hasucChar,
      specChar: hasspChar,
      numbChar: nmChar,
      length: characterLength
    }
    return passwordprompts;
}

// 
function writePassword() {
  var passwordText = document.querySelector("#password");
    var newPassword = generatePassword();
    passwordText.value = newPassword;
}
// make generatePassword function
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  var correctprompts = getPrompts();
  var choiceArray = [];
  var randomArray = [];
  var result = [];
  if (correctprompts.lowerChar) { // If lowercase letters accepted, get random lowercase letters.
    choiceArray = choiceArray.concat(lcChar);
    console.log(choiceArray);
    randomArray.push(getRandom(lcChar));
    console.log(randomArray)
  }
  if (correctprompts.upperChar) {
    choiceArray = choiceArray.concat(ucChar);
    console.log(choiceArray);
    randomArray.push(getRandom(ucChar));
    console.log(randomArray)
  }
  if (correctprompts.specChar) {
    choiceArray = choiceArray.concat(spChar);
    console.log(choiceArray);
    randomArray.push(getRandom(spChar));
    console.log(randomArray)
  }
  if (correctprompts.numbChar) {
    choiceArray = choiceArray.concat(nmChar);
    console.log(choiceArray);
    randomArray.push(getRandom(nmChar));
    console.log(randomArray)
  }

  for(var i = 0; i < correctprompts.length; i++) {
    var randomChar = getRandom(choiceArray);
    result.push(randomChar);
  }
  
  for (var i=0; i< randomArray.length; i++) {
    result[i] = randomArray[i];
  }
  return result.join('');
}

function getRandom(arr) { // sends the random characters to the console.
  var randomIndex = Math.floor(Math.random() * arr.length);
  console.log(randomIndex);
  var randomChar = arr[randomIndex];
  return randomChar;
}