const alphabet = "abcdefghijklmnopqrstuvwxyz";
const message = "The mountin 12 degrees south looks BEAutiful this time of year";
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

    // UPDATE: forgot to add .toLowerCase() to the code to ensure it found the correct alphabet index
    if (alphabet.includes(char.toLowerCase())) {
      // get the index of the character in the alphabet
      let index = alphabet.indexOf(char.toLowerCase());
      // get the new index by adding the shift value and taking the modulo of the length of the alphabet
      let newIndex = (index + shiftValue) % alphabet.length;
      // get the character at the new index
      let newChar = alphabet[newIndex];
      // add the new character to the encrypted message

      // UPDATE: the encryption was missing the transformation to keep the original message format for capital and lower case
      if (char === char.toUpperCase()) {
        newChar = newChar.toUpperCase();
      }
      encryptedMessage += newChar;
    }
    else
    {
      // add the non-letter character as it is
      encryptedMessage += char;
    }
    // add a random character.  
    //UPDATE: I didn't think to add the && section the first time around, this ensures it only adds a random letter after every 2 characters
    if ((i + 1) % 2 === 0 && i + 1 < message.length){
        let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        encryptedMessage += randomLetter;
    }
  }
  return encryptedMessage;
}


function decrypt (encryptedMessage, shiftValue)
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
    
        if (alphabet.includes(char.toLowerCase())) {
            let index = alphabet.indexOf(char.toLowerCase());
            let newIndex = (index - shiftValue + alphabet.length) % alphabet.length;
            let originalChar = alphabet[newIndex];
            if (char === char.toUpperCase()) {
              originalChar = originalChar.toUpperCase();
            }
            decryptedMessage += originalChar;
         } 
         else 
         {
            decryptedMessage += char;
        }
    }
  return decryptedMessage;
}

// UPDATE: added the below to help with debugging
const encryptedMessage = encrypt(message, shiftValue);
console.log("Encrypted Message:", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage, shiftValue);
console.log("Decrypted Message:", decryptedMessage);