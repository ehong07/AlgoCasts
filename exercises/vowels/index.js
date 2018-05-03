// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = str => {
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelArr.indexOf(str[i].toLowerCase()) !== -1) {
      vowelCount++;
    }
  }
  return vowelCount;
};

module.exports = vowels;
