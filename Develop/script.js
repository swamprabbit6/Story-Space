// Assignment code here
//create 4 variables with an array for uppercase letters, lowercase letters, numbers and special characters
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = [];
//create gloabl array to hold all possible options
var possibleChar = [numbers, lowerCase, upperCase];

//final array for password string
var passwordString = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  //prompt for password length


  //IF ELSE condition to check if password length is between 8 and 128

  //within ELSE
  //4 confirms to confirm uppercase, lowercase, numbers and special characters options

  //4 IF conditions to check for user responses to confirms and push options array to global array
  /* 
    if(confirmUpper)
    {
      possibleChar = possiblrChar.concat(upperCase);
    }
  */

    //FOR loop to loop over password length and generate ramdom number to pick random character from possibleChar array
    //push each character picked randomly into passwordString array

  //return passwordString
  //return passwordString.join("");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
