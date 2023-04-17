const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const resultsArr = [];
  
  nString = String(n);
  
  for(let i = 0; i < nString.length; i++) {
    let nArr = nString.split('');
    nArr.splice(i, 1);
    resultsArr.push(nArr.join(''));
  }
  return resultsArr.map(item => Number(item)).sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
