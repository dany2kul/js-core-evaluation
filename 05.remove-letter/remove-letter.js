/**
 * The function takes two parameters: a sentence and a letter
 * it will return a new sentence with all instances of the letter removed
 *
 * Hint: this is similar to removeVowels EXCEPT that we don't remove  vowels
 * instead, we remove whatever letter is passed to the function
 */
function removeLetter(sentence, letter) {
  return sentence.split(letter).join("");
  // code
}

module.exports = removeLetter;
