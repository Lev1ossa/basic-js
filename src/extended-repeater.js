const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let additionSep = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  let strSep = options.separator !== undefined ? options.separator : '+';
  repAddition = '';
  if (options.addition !== undefined) {
    if (options.additionRepeatTimes > 1) {
      for (let i = 0; i < options.additionRepeatTimes; i++){
        if (i == 0) {
          repAddition += options.addition;
        } else {
          repAddition += 'ADDITIONSEP' + options.addition;
        }
      }
    } else {
      repAddition = options.addition;
    }
  };

  repStr = '';
  if (options.repeatTimes > 1) {
    for (let i = 0; i < options.repeatTimes; i++){
      if (i == 0) {
        repStr += str + repAddition;
      } else {
        repStr += 'STRSEP' + str + repAddition;
      }
    }
  } else {
    repStr = str + repAddition;
  }

  return repStr.split('ADDITIONSEP').join(additionSep).split('STRSEP').join(strSep);
}

module.exports = {
  repeater
};
