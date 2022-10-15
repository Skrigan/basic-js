const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let res = matrix[0].reduce( (sum, item) => +sum + +item, '' )
  for (let subArray = 1; subArray < matrix.length; subArray++) {
      for (let item = 0; item < matrix[subArray].length; item++) {
          if (matrix[subArray-1][item] !== 0) res += +matrix[subArray][item];
      }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
