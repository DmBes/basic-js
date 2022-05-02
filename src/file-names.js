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
function renameFiles( names ) {

  let mset  = new Set();
  let result = [];

  for (let i = 0; i < names.length; i++) {

    if (!mset.has(names[i])){
      result.push(names[i])
      mset.add(names[i])

    }
    else {
      let temple = names[i]
      let up = 1;

      while (mset.has(names[i]+'(' + `${up}`+ ')'))
      {
          //temple = names[i]+'(' + `${up}`+ ')';
          up++;
      }
      mset.add(names[i]+'(' + `${up}`+ ')')
      result.push(names[i]+'(' + `${up}`+ ')')
      up = 1;
    }


  }

  return result;






}

module.exports = {
  renameFiles
};
