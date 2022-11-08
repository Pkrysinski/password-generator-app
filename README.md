# password-generator-app

## Purpose

The purpose of this weeks' challenge is to try to have us complete the starter code for a password generator application.  The application must utilize JavaScript logic to prompt the user for various password criteria options, handle scenarios where invalid choices are given (according to our business logic), and handle control flow throughout the whole process.  The application must be responsive, error-free, and meet all the below acceptence criteria.

## Link to Deployed Application
https://pkrysinski.github.io/password-generator-app/

![Alt text](https://github.com/Pkrysinski/password-generator-app/blob/main/assets/images/GitHub-project-screenshot.PNG)

## Acceptence Criteria Notes

GIVEN I need a new, secure password...

- - - - -
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
>Prompts have been added to gather user input.

- - - - -
WHEN prompted for password criteria
THEN I select which criteria to include in the password
>The prompts have been configured to gather user input and store the values for password builder logic.

- - - - -
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
>First prompt gathers numeric input from the user to ensure the password is no less than 8 characters and no more than 132 characters.  The prompt also checks the data type of the input coming in, to make sure that alphabetic characters aren't entered in and attempted to be saved.  If so, the user is notified that the choice is invalid and is re-prompted to start again.

- - - - -
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
>User prompts have been set up to gather info on all ov the character types specified in the acceptence criteria.

- - - - -
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
>Logic has been added to the getPasswordCharTypes() function (which has been added and broken out into a function of it's own so it's logic could be looped through if no character type was selected).  This logic is making sure the user selects at least one character type.  If not, they're promped to go through those 4 selections again.

- - - - -
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

- - - - -
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
