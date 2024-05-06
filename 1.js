function findWordIndexes(sentence, word) {
  const indexes = [];
  let index = -1;

  // Loop through the sentence to find all occurrences of the word
  do {
    index = sentence.indexOf(word, index + 1); // Find next occurrence of the word
    if (index !== -1) {
      indexes.push(index); // Add index to the array if found
    }
  } while (index !== -1);

  return indexes;
}

// Example usage:
const sentence = "This is a sample sentence with sample words.";
const word = "sample";

const indexes = findWordIndexes(sentence, word);
console.log(`Indexes of "${word}" in the sentence:`, indexes);
