const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount( s1, s2 ) {

  let length = s1.length;
  let arr = s1.split('');
  for (let letter of s2) {
      for (let i = arr.length - 1; i >= 0; i--) {
          if (letter == arr[i]) {
              arr.splice(i, 1);
              break;
          }
      }
  }
  return length - arr.length;
}

module.exports = {
  getCommonCharacterCount
};
