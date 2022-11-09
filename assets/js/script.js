// Assignment Code
var generateBtn = document.querySelector("#generate");
// Making the below variables global so they can be referenced by multiple fuctions
var lowercaseYN;
var lowerCaseChars;
var uppercaseYN;
var upperCaseChars;
var numericYN;
var numericChars;
var specialYN;
var specialChars;
var passwordLength;
var characterSet;
var returnVal;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPasswordLength(){
  passwordLength = parseInt(window.prompt("Enter a numeric password length between 8 and 132 characters!"));

  // If length entered is NaN ("not a number)", notify of invalid choice and prompt to try again.)
  if (Number.isNaN(passwordLength)) {
    var tryAgain = window.confirm("Password length invalid, must be a number.  Try again?");
    if (tryAgain){
      generatePassword();
    } else {
      return;
    }    
  } else if (passwordLength < 8){
      var tryAgain = window.confirm("Password length too short.  Try again?");
      if (tryAgain){
        generatePassword();
      } else {
        return;
      }
    // If longer than 132, notify of invalid choice and prompt to try again.
    } else if (passwordLength > 132) {
      var tryAgain = window.confirm("Password length too long.  Try again?");
      if (tryAgain){
        generatePassword();
      } else {
        return;
      }    
    //Otherwise, continue on to getPasswordCharTypes function!
    } 
      else {
      console.log("Password length: " + passwordLength);
      getPasswordCharTypes();
    };

};

function getPasswordCharTypes(){

  // Prompt yes/no for lowercase
  lowercaseYN = window.confirm("Would you like lowercase characters? \n(Okay for yes, Cancel for no)");
  if (lowercaseYN) {
    lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowerCaseChars = "";
  }

  // Prompt yes/no for uppercase
  uppercaseYN = window.confirm("Would you like uppercase characters? \n(Okay for yes, Cancel for no)");
  if (uppercaseYN) {
    upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    upperCaseChars = "";
  }  

  // Prompt yes/no for numeric values
  numericYN = window.confirm("Would you like numeric values? \n(Okay for yes, Cancel for no)");
  if (numericYN) {
    numericChars = "0123456789";
  } else {
    numericChars = "";
  }  

  // Prompt yes/no for special characters
  specialYN = window.confirm("Would you like special characters? \n(Okay for yes, Cancel for no)");
  if (specialYN) {
    specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else {
    specialChars = "";
  }  

  // Need to make sure at least one character type has been selected before moving on
  if (lowercaseYN == false && uppercaseYN == false && numericYN == false && specialYN == false){
    var tryAgain = window.confirm("At least one character type must be selected.  Retry character type selection?");
    if (tryAgain){
      getPasswordCharTypes();
    } else {
      return;
    }  
  }

  return;
};

function buildPassword() {
  length = passwordLength;
  characterSet = "";
  returnVal = "";

  charSet = lowerCaseChars + upperCaseChars + numericChars + specialChars;

  for (var i = 0, n = charSet.length; i < length; ++i) {
    returnVal = returnVal + charSet.charAt(Math.floor(Math.random() * n));
  }

}

function generatePassword(){

  getPasswordLength();
  buildPassword();

  return returnVal;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
