const alphabet = "abcdefghijklmnopqrstuvwxyz";
const message = "Head to the mountan in the north";
const shiftValue = 3;

function encrypt (message, shiftValue)
{
  let encryptedMessage = "";
  // loop for the message
  for (let i = 0; i < message.length; i++)
  {
    // get the character at the current index
    let char = message[i];
    // check if the character is a letter
    if (alphabet.includes(char))
    {
      // get the index of the character in the alphabet
      let index = alphabet.indexOf(char);
      // get the new index by adding the shift value and taking the modulo of the length of the alphabet
      let newIndex = (index + shiftValue) % alphabet.length;
      // get the character at the new index
      let newChar = alphabet[newIndex];
      // add the new character to the encrypted message
      encryptedMessage += newChar;
    }
    else
    {
      // add the non-letter character as it is
      encryptedMessage += char;
    }
    // add a random character
    if (i + 2 < message.length){
        let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        encryptedMessage += randomLetter;
    }
  }
  return encryptedMessage;
}

function decrypt (encryptedMessage, shift)
{
    let decryptedMessage = "";
        // Remove random letters from encrypted message
    let cleanEncryptedMessage = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
        if (i % 3 !== 2) { // Skip every third character (which is the random letter)
            cleanEncryptedMessage += encryptedMessage[i];
        }
    }
    
        // Decrypt the cleaned encrypted message
    for (let i = 0; i < cleanEncryptedMessage.length; i++) {
         let char = cleanEncryptedMessage[i];
    
        if (alphabet.includes(char)) {
            let index = alphabet.indexOf(char);
            let newIndex = (index - shiftValue + alphabet.length) % alphabet.length;
            let originalChar = alphabet[newIndex];
            decryptedMessage += originalChar;
         } 
         else 
         {
            decryptedMessage += char;
        }
    }
  return decryptedMessage;
}