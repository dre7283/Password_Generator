// Array of special characters
var Specials = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  "_",
  ".",
  "/",
  "\\",
  ";",
  ":",
  "?",
  ">",
  "<",
  "~",
  "'",
  "{",
  "}",
  "[",
  "]",
];

// array of numbers
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// array of lowercase alpha
var Lowers = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// array of uppercase alpha
var Uppers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Password Options
function getPasswordOptions() {
  var length = parseInt(
    prompt(
      "Enter Length of Password (Password must be between 8 and 128 characters)"
    )
    // 10
  );

  // Checking is length of password provided as a number
  if (Number.isNaN(length)) {
    alert("Please provide password length as a number");
    return null;
  }

  // Alert if password is less than 8 characters
  if (length < 8) {
    alert("Please provide password length with a minimum of 8 characters");
    return null;
  }

  //Alert if password is greater than 128 characters
  if (length > 128) {
    alert("Please provide password length with a maximum of 128 characters");
    return null;
  }

  // Password contains special characters
  var hasSpecials = confirm("Click OK to confirm include special characters");
  // Password contains numbers
  var hasNumbers = confirm("Click OK to confirm include numeric characters");

  // Password contacts lowers
  var hasLowers = confirm("Click OK to confirm include LowerCase characters");

  // Password contains UPPERS
  var hasUppers = confirm("Click OK to confirm include UpperCase characters");

  // alert if user does not enter any characters
  if (
    hasSpecials === false &&
    hasNumbers === false &&
    hasLowers === false &&
    hasUppers === false
  ) {
    alert("You must enter at least one character type");
    return null;
  }

  var PassOptions = {
    length: length,
    hasSpecials: hasSpecials,
    hasNumbers: hasNumbers,
    hasLowers: hasLowers,
    hasUppers: hasUppers,
  };
  return PassOptions;
}

// Function that gets a random element from an array
function getRandom(char) {
  var randIndex = Math.floor(Math.random() * char.length);
  var randElement = char[randIndex];

  return randElement;
}

// Function to generate password based on user input
function generatePassword() {
  var options = getPasswordOptions();
  var output = [];

  // Arrays for possible and approved characters
  var posCharacters = [];

  var approvedCharacters = [];

  // Logic for is options object is there using ! as logical operator
  if (!options) return null;

  // Conditional Array for Specials
  if (options.hasSpecials) {
    posCharacters = posCharacters.concat(Specials);
    // Push new random special character to approvedCharacters
    approvedCharacters.push(getRandom(Specials));
  }
  // Conditional Array for Numbers
  if (options.hasNumbers) {
    posCharacters = posCharacters.concat(Numbers);
    // Push new random Number to approvedCharacters
    approvedCharacters.push(getRandom(Numbers));
  }

  // Conditional Array for Lowers
  if (options.hasLowers) {
    posCharacters = posCharacters.concat(Lowers);
    // Push new random Lowercase character to approvedCharacters
    approvedCharacters.push(getRandom(Lowers));
  }

  // Conditional Array for Uppers
  if (options.hasUppers) {
    posCharacters = posCharacters.concat(Uppers);
    // Push new random Uppercase character to approvedCharacters
    approvedCharacters.push(getRandom(Uppers));
  }

  // For Loop iteration over the password length

  for (var i = 0; i < options.length; i++) {
    var random = getRandom(posCharacters);

    output.push(random);
  }

  // For Loop that will mix in one approved character in the output
  for (var i = 0; i < approvedCharacters.length; i++) {
    output[i] = approvedCharacters[i];
  }

  // make output a string and enters generated password
  return output.join("");
}

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
