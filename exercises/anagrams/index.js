// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (strA, strB) => {
  const sortedA = sortArrToStr(cleanStrToArr(strA));
  const sortedB = sortArrToStr(cleanStrToArr(strB));

  return sortedA === sortedB;
};

const cleanStrToArr = str => {
  return str.toLowerCase().replace(/[^\w]/g, '').split('');
}

const sortArrToStr = arr => {
  return arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })
  .join('');
}

// const anagrams = (strA, strB) => {
//   const objA = createMap(strA);
//   const objB = createMap(strB);
//
//   if (Object.keys(objA).length !== Object.keys(objB).length) return false;
//
//   for (let key in objA) {
//     if (objA[key] !== objB[key]) {
//       return false;
//     }
//   }
//
//   return true;
// };
//
// const createMap = str => {
//   const obj = {};
//
//   for (let char of str.toLowerCase().replace(/[^\w]/g, '')) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//
//   return obj;
// }

module.exports = anagrams;
