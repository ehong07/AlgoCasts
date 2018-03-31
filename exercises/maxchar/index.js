// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = str => {
  let charObj = {};
  let maxCount = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    // charObj[str[i]] ? charObj[str[i]]++ : charObj[str[i]] = 1;
    charObj[str[i]] = charObj[str[i]] + 1 || 1;
  }
  for (let char in charObj) {
    if (charObj[char] > maxCount) {
      maxCount = charObj[char];
      result = char;
    }
  }
  return result;
};

module.exports = maxChar;
