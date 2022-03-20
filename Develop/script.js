// Arrays of characters
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*()";
var numbers = "1234567890";
var includeLower;
var includeUpper;
var includeSpecial;
var includeNumber;
var numberOfChars; 


//Global Variable
var passwordInfo =  {
  array: "",
  reset: function() {
    this.array = "";
  }
};

//If then statements to combine CharacterArray
function getCombinedArrays() {

  var finalCharacterArray = [];

  if (includeLower) {
    finalCharacterArray = finalCharacterArray.concat(lowerCaseLetters.split(""));
  }

  if (includeUpper) {
    finalCharacterArray = finalCharacterArray.concat(upperCaseLetters.split(""));
  }

  if (includeSpecial) {
    finalCharacterArray = finalCharacterArray.concat(specialChars.split(""));
  }

  if (includeNumber) {
    finalCharacterArray = finalCharacterArray.concat(numbers.split(""));
  }

  return finalCharacterArray;
}

function init() {
  passwordInfo.reset();

  includeLower = confirm("Include lowercase?");
  includeUpper = confirm("Include uppercase?");
  includeSpecial = confirm("Include special characers?");
  includeNumber = confirm("Include numbers?");
  numberOfChars = prompt("How many characters?");
  
  var arrayOfChars = getCombinedArrays();

  var intNumberOfChars = parseInt(numberOfChars);

  for (var i = 0; i < intNumberOfChars; i++) {
    var randomIndex = Math.floor(Math.random() * arrayOfChars.length);

    passwordInfo.array = passwordInfo.array + arrayOfChars[randomIndex];
  }

  return passwordInfo.array;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = init();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);