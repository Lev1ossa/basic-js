const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  names.forEach((item, idx) => {
    let counter = 0;
    for (let i = 0; i < idx; i++) {
      if (item == names[i]) {
        counter++
      }
      if(counter) {
        let newName = item + `(${counter})`;
        if (names.indexOf(newName) !== -1 && names.indexOf(newName) < idx){
          while(names.indexOf(newName) !== -1 && names.indexOf(newName) < idx){
            counter++;
            newName = item + `(${counter})`;
          }
        }
        names[idx] = newName;
      }
    }
  })
  return names;
}

module.exports = {
  renameFiles
};
