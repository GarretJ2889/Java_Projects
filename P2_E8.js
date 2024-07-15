const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Function to return the encrypted version of the letter
function encryptLetter (letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

//  Function to return the encrpted version of the entire wor
function encryptMessage (message, shift) {
  let encryptedMessage = "";
  // loop to encrypt the message word by word
  for (let i = 0; i < word.length; i++) {
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
}

// function to decrypt Letter
function decryptLetter (letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

//  function to decrypt message
function decryptMessage (word, shift) {
  let decryptedMessage = "";
  // loop to decrypt the message word by word
  for (let i = 0; i < word.length; i++) {
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}

// Q: He would get BRUTUS back because the two functions would cancel eachother out