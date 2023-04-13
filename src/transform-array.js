const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    if (arr.length > 0) {
      const resultArr = [];
      const arrOfObjects = [...arr].map(item => ({value: item, action: 'add'}));
      arr.forEach((item, idx) => {
        if (item == '--discard-next') {
          arrOfObjects[idx].action = 'discard';
          if (!!arrOfObjects[idx + 1]) {
            if ((arrOfObjects[idx + 1].action == 'add')) {
              arrOfObjects[idx + 1].action = 'discard';
            } else if ((arrOfObjects[idx + 1].action == 'double') || (arrOfObjects[idx + 1].action == 'discard')) {
              arrOfObjects[idx + 1].action += 'discard';
            }
          }
        } else if (item == '--discard-prev') {
          arrOfObjects[idx].action = 'discard';
          if (!!arrOfObjects[idx - 1]) {
            if ((arrOfObjects[idx - 1].action == 'add')) {
              arrOfObjects[idx - 1].action = 'discard';
            } else if ((arrOfObjects[idx - 1].action == 'double') || (arrOfObjects[idx - 1].action == 'discard')) {
              arrOfObjects[idx - 1].action += 'discard';
            }
          }
        } else if (item == '--double-next') {
          arrOfObjects[idx].action = 'discard';
          if (!!arrOfObjects[idx + 1]) {
            if ((arrOfObjects[idx + 1].action == 'add')) {
              arrOfObjects[idx + 1].action = 'double';
            } else if ((arrOfObjects[idx + 1].action == 'double') || (arrOfObjects[idx + 1].action == 'discard')) {
              arrOfObjects[idx + 1].action += 'double';
            }
          }
        } else if (item == '--double-prev') {
          arrOfObjects[idx].action = 'discard';
          if (!!arrOfObjects[idx - 1]) {
            if ((arrOfObjects[idx - 1].action == 'add')) {
              arrOfObjects[idx - 1].action = 'double';
            } else if ((arrOfObjects[idx - 1].action == 'double') || (arrOfObjects[idx - 1].action == 'discard')) {
              arrOfObjects[idx - 1].action += 'double';
            }
          }
        }
      });

      arrOfObjects.forEach(item => {
        if (item.action == 'add'){
          resultArr.push(item.value);
        } else if (item.action == 'double') {
          resultArr.push(item.value);
          resultArr.push(item.value);
        } else if (item.action == 'doubledouble') {
          resultArr.push(item.value);
          resultArr.push(item.value);
          resultArr.push(item.value);
        } else if (item.action == 'doublediscard') {
          resultArr.push(item.value);
        }
      })
      return resultArr;
    } else {
      return [];
    }
  } else {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
}

module.exports = {
  transform
};
