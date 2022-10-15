const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine( str ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let counter = 1, res = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i+1]) {
          counter++;
      } else {
          if (counter == 1) {
              res += str.substr(i,1)
          } else {
              res += `${counter}${str.substr(i,1)}`
              counter = 1;
          }
      }
  }
  return res;
}

module.exports = {
  encodeLine
};
