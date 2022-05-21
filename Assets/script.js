// Array of special characters
var Specials = [
'!',
'@',
'#',
'$',
'%',
'^',
'&',
'*',
'(',
')',
'*',
'+',
',',
'-',
'.',
'/',
'\\',
';',
':',
'?',
'>',
'<',
'~',
"'",
]

// array of numbers 
var Numbers = ['0', '1', '2', '3', '4', '5','6','7', '8', '9'];

// array of lowercase alpha
var Lowers =[
  'a', 
  'b', 
  'c',
  'd', 
  'e', 
  'f', 
  'g', 
  'h', 
  'i', 
  'j', 
  'k', 
  'l', 
  'm', 
  'n', 
  'o', 
  'p', 
  'q', 
  'r', 
  's', 
  't', 
  'u', 
  'v', 
  'w', 
  'x', 
  'y', 
  'z',
];

// array of uppercase alpha
var Uppers = [
  'A', 
  'B', 
  'C', 
  'D', 
  'E', 
  'F', 
  'G', 
  'H', 
  'I', 
  'J', 
  'K', 
  'L', 
  'M', 
  'N', 
  'O', 
  'P', 
  'Q', 
  'R', 
  'S', 
  'T', 
  'U', 
  'V', 
  'W', 
  'X', 
  'Y', 
  'Z', 
]

// Password Length
function getlength(){

  prompt('Password must be between 8 and 128 characters.')
};


// Password contains specials
var hasSpecials = confirm(
  'Click OK to confirm include special characters'
);
// Password contains numbers
var hasnumbers = confirm(
  'Click OK to confirm include numeric characters'
);

// Password contacts lowers
var hasLowers = confirm(
  'Click OK to confirm include LowerCase characters'
);

// Password contains UPPERS
var hasUppers = confirm(
  'Click OK to confirm include UpperCase characters'
);



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
