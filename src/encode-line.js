const { keyIn } = require('readline-sync');
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
function encodeLine(str) {
  let counter = 0;
  let prevChar = str[0];
  let resultStr = '';
  if (str) {
    for (let i = 0; i < str.length; i++) {
        if(str[i] == prevChar) {
          counter++;
        } else {
          resultStr = resultStr + (counter == 1 ? '' : counter) + prevChar;
          counter = 1;
          prevChar = str[i];
        }
    }
    resultStr = resultStr + (counter == 1 ? '' : counter) + prevChar;
  }
  
  return resultStr;
}

module.exports = {
  encodeLine
};
