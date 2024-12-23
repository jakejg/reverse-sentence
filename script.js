let sentence = prompt('Enter a sentence to reverse word by word:');
// let sentence = 'Test sentence';

// Split the sentence into an array of words
let words = sentence.split(' ');
console.log({ words });

// create a new array to hold the reversed sentence
let reversedSentence = [];

// loop over the array and reverse each word
for (const word of words) {
  // create an array of characters
  const characters = word.split('');
  // reverse the array
  const reversedChars = characters.reverse();
  // smush the array back into a string
  const reversedWord = reversedChars.join('');
  // add the reversed word to the new array
  reversedSentence.push(reversedWord);
}

// Join the reversed array of words back into a sentence
let result = reversedSentence.join(' '); // Pay attention to the blank space in the string in the join here.

// Display the result
console.log('Reversed sentence: ' + result);

/*
Added challenge for Jonathin or anyone else,
Reverse only the vowels
*/
