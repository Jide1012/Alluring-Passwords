// Arrays of characters
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*()";
var numbers = "1234567890";
var includeLower = confirm("Include lowercase?");
var includeUpper = confirm("Include uppercase?");
var includeSpecial = confirm("Include special characers?");
var includeNumber = confirm("Include numbers?");

var numberOfChars = prompt("How many characters?");

var password = "";

function getCombinedArrays() {
  var finalCharacterArray = [];

  if (includeLower) {
    finalCharacterArray = finalCharacterArray.concat(
      lowerCaseLetters.split("")
    );
  }

  if (includeUpper) {
    finalCharacterArray = finalCharacterArray.concat(
      upperCaseLetters.split("")
    );
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
  var arrayOfChars = getCombinedArrays();

  console.log("FINAL ARRAY OF CHARS:", arrayOfChars);
  var intNumberOfChars = parseInt(numberOfChars);

  for (var i = 0; i < intNumberOfChars; i++) {
    var randomIndex = Math.floor(Math.random() * arrayOfChars.length);

    password = password + arrayOfChars[randomIndex];
  }

  generatevar.addEventListener ('click', () => {
    const length=length.value
    
  } )


  console.log("RANDOM PASSWORD IS: ", password);
}

init();
