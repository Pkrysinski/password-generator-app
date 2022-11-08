// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = parseInt(window.prompt("Enter a numeric password length between 8 and 132 characters!"));
  var tryAgain;

  // This IF/ELSE statement is to get the length of the password the user wants.
  // If shorter than 8, notify of invalid choice and prompt to try again.
  if (passwordLength < 8){
    tryAgain = window.confirm("Password length too short.  Try again?");
    if (tryAgain){
      generatePassword();
    }
    else {
      return;
    }
  // If longer than 132, notify of invalid choice and prompt to try again.
  } else if (passwordLength > 132) {
    tryAgain = window.confirm("Password length too long.  Try again?");
    if (tryAgain){
      generatePassword();
    }
    else {
      return;
    }    
  // If length entered is NaN ("not a number)", notify of invalid choice and prompt to try again.)
  } else if (Number.isNaN(passwordLength)) {
    tryAgain = window.confirm("Password length invalid, must be a number.  Try again?");
    if (tryAgain){
      generatePassword();
    }
    else {
      return;
    }    
  }
    else {
    console.log("Password length: " + passwordLength);
  }

  // Prompt yes/no for lowercase
  var lowercaseYN = window.confirm("Would you like lowercase characters?");

  // Prompt yes/no for uppercase
  var uppercaseYN = window.confirm("Would you like uppercase characters?");

  // Prompt yes/no for numeric values
  var numericYN = window.confirm("Would you like numeric values?");

  // Prompt yes/no for special characters
  var specialYN = window.confirm("Would you like special characters?");

  // Now that we have all our criteria, we need to actually build the password.

  return;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
