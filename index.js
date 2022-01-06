function isPalindrome(word) {
  // Write your algorithm here
  let lastLetterIndex = word.length - 1;
  for (let firstLetterIndex = 0; firstLetterIndex < lastLetterIndex; firstLetterIndex++) {
    if (word[firstLetterIndex] !== word[lastLetterIndex]) {
      return false;
    }
    lastLetterIndex--;
  }
  return true;
}

/* 
  Add your pseudocode here
  Establish a loop to iterate through letters in the word until you get halfway through
  Within the loop, compare each letter with the letter at the other end
  Return false if there is a mismatch
  Return true if the loop completes without any mismatches
*/

/*
  Add written explanation of your solution here
  Compare each letter with its mirror at the other end of the word, one at a time, and check if they match.
  If they do not match, return false; otherwise return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
