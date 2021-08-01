/**
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first. An anagram is a word, phrase, or name formed by
 * rearranging the letters of another, such as cinema, formed from iceman.
 */

/**
 * Understand the problem:
 * Can I restate the problem in my own words?
 * Compare two input strings and determine if they're anagrams.
 *
 * What are the inputs to this problem?
 * Two strings of variable length n, where n >= 0 and n <= 10,000.
 * We're not concerned with capitalization or with spaces, numbers or
 * punctuation.
 *
 * What are the outputs that should come from the solution to the problem?
 * A boolean value that answers the question is input string 2 an anagram of
 * input string 1.
 *
 * Can the outputs be determined from the inputs? Yes.
 *
 * How should I label the important pieces of data that are part of the problem?
 * const validAnagram = (str1, str2) => {}
 */

/**
 * Concrete examples:
 * validAnagram('', '') => true
 * validAnagram('rat', 'car') => false
 * validAnagram('race', 'car') => false
 * validAnagram('anagram', 'nagaram') => true
 * validAnagram('listen', 'silent') => true
 */

/**
 * Break it down:
 * Explicitly write out the steps you need.
 */

const validAnagram = (str1, str2) => {
  // Check to see if the input strings are the same length.
  if (str1.length !== str2.length) return false;
  // Create an object to keep track of the frequency of characters encountered.
  const dictionary = {};
  // Loop over str1 and count the frequency of each character then store in
  // the dictionary object.
  for (char of str1) {
    dictionary[char] ? dictionary[char]++ : dictionary[char] = 1;
  }

  // Loop over str2 and for each character encountered subtract one from
  // the dictionary for the specified key.
  // return false if the dictionary object does not contain the character as
  // a key.
  for (char of str2) {
    if (!dictionary[char]) return false;
    dictionary[char] -= 1;
  }
  return true;
};

validAnagram('', '');
validAnagram('rat', 'car');
validAnagram('race', 'car');
validAnagram('anagram', 'nagaram');
validAnagram('listen', 'silent');
