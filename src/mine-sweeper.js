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
  const matrixOfNums = matrix.map(item => item.map(subitem => 0));
  for (let i = 0; i < matrix[0].length; i++){
    for(let j = 0; j < matrix.length; j++){
      let cellCounter = 0;
      if (j == 0 && i == 0) {
        if (j + 1 < matrix.length - 1){
          cellCounter += matrix[j + 1][i] ? 1 : 0;
          cellCounter += matrix[j + 1][i + 1] ? 1 : 0;
        }  
        cellCounter += matrix[j][i + 1] ? 1 : 0;
      } else if (j == 0 && i == matrix[0].length) {
        if (j + 1 < matrix.length){
          cellCounter += matrix[j + 1][i] ? 1 : 0;
          cellCounter += matrix[j + 1][i - 1] ? 1 : 0;
        }
        cellCounter += matrix[j][i - 1] ? 1 : 0;  
      } else if (j == matrix.length && i == matrix[0].length) {
        if (j - 1 >= 0){
          cellCounter += matrix[j - 1][i] ? 1 : 0;
          cellCounter += matrix[j - 1][i - 1] ? 1 : 0;
        }
        cellCounter += matrix[j][i - 1] ? 1 : 0;
      } else if (j == matrix.length && i == 0) {
        if (j - 1 >= 0){
          cellCounter += matrix[j - 1][i] ? 1 : 0;
          cellCounter += matrix[j - 1][i - 1] ? 1 : 0;
        }
        cellCounter += matrix[j][i - 1] ? 1 : 0;
      } else if (j == 0) {
        if (j + 1 < matrix.length){
          cellCounter += matrix[j + 1][i] ? 1 : 0;
          cellCounter += matrix[j + 1][i - 1] ? 1 : 0;
          cellCounter += matrix[j + 1][i + 1] ? 1 : 0;
        }
        cellCounter += matrix[j][i - 1] ? 1 : 0;
        cellCounter += matrix[j][i + 1] ? 1 : 0;
      } else if (j == matrix.length) {
        if (j - 1 >= 0){
          cellCounter += matrix[j - 1][i] ? 1 : 0;
          cellCounter += matrix[j - 1][i - 1] ? 1 : 0;
          cellCounter += matrix[j - 1][i + 1] ? 1 : 0;
        }
        cellCounter += matrix[j][i - 1] ? 1 : 0;
        cellCounter += matrix[j][i + 1] ? 1 : 0;
      } else if (i == 0) {
        if (j - 1 >= 0){
          cellCounter += matrix[j - 1][i] ? 1 : 0;
          cellCounter += matrix[j - 1][i + 1] ? 1 : 0;
        }
        if (j + 1 < matrix.length){
          console.log(j + 1);
          console.log(matrix.length);
          console.log(matrix[j + 1]);
          cellCounter += matrix[j + 1][i] ? 1 : 0;
          cellCounter += matrix[j + 1][i + 1] ? 1 : 0;
        }
        cellCounter += matrix[j][i + 1] ? 1 : 0;
      } else if (i == matrix[0].length) {
        if (j - 1 >= 0){
          cellCounter += matrix[j - 1][i] ? 1 : 0;
          cellCounter += matrix[j - 1][i - 1] ? 1 : 0;
        }
        if (j + 1 < matrix.length){
          cellCounter += matrix[j + 1][i] ? 1 : 0;
          cellCounter += matrix[j + 1][i - 1] ? 1 : 0;
        }
        cellCounter += matrix[j][i - 1] ? 1 : 0;
      } else {
        if (j - 1 >= 0){
          cellCounter += matrix[j - 1][i - 1] ? 1 : 0;
          cellCounter += matrix[j - 1][i + 1] ? 1 : 0;
          cellCounter += matrix[j - 1][i] ? 1 : 0;
        }
        if (j + 1 < matrix.length){
          cellCounter += matrix[j + 1][i - 1] ? 1 : 0;
          cellCounter += matrix[j + 1][i + 1] ? 1 : 0;
          cellCounter += matrix[j + 1][i] ? 1 : 0;
        }
        cellCounter += matrix[j][i - 1] ? 1 : 0;
        cellCounter += matrix[j][i + 1] ? 1 : 0;
      }
      matrixOfNums[j][i] = cellCounter;
    }
  }
  return matrixOfNums;
}

module.exports = {
  minesweeper
};
