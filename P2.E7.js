const friend = "BRUTUS"
const shiftValue = 3;

//step 1:
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//step 2:
let encryptedName = ""; // This will become the encrypted name
for (let i = 0; i < friend.length; i++) // this makes i index of 0 to ensure it goes through the full name, as it loops it goes up by 1
{
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}

//Q1: Reduces the amount of code needed to generate and process each letter

//Q2: This function allows the algorithm to loop through the letters

