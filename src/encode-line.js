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

  let arr = [];
  let step = 0;
  while (step < str.length)
  {
    let count = 1;

    for (let j = step+1; j < str.length ; j++) {
      if (str[step] === str[j]) {
        count ++;
      }
      else {
        break;
      }
    }
    if (count == 1) {arr.push(str[step])}
    else {
      arr.push([count+ str[step]])
    }

    step +=count;
  }
  let x = arr.join('').toString()

  return x;

}

module.exports = {
  encodeLine
};
