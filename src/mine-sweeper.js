const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
      res[i] = [];
  }
  for (let row = 0; row < matrix.length; row++) {
      for (let cell = 0; cell < matrix[row].length; cell++) {
          res[row][cell] = minesNearby(matrix, row-1, cell-1) + minesNearby(matrix, row-1, cell) + minesNearby(matrix, row-1, cell+1)
                         + minesNearby(matrix, row, cell-1)                                      + minesNearby(matrix, row, cell+1)
                         + minesNearby(matrix, row+1, cell-1) + minesNearby(matrix, row+1, cell) + minesNearby(matrix, row+1, cell+1);
      }
  }
  return res;
}

function minesNearby(matrix, row, cell) {
  if (row < 0 || cell < 0 || row > matrix.length - 1 || cell > matrix[row].length - 1) return 0;
  return matrix[row][cell] ? 1 : 0;
}

module.exports = {
  minesweeper
};
