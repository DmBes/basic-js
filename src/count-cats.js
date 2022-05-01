const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats() {
  let arr  = [...arguments];


  return  arr.reduce(function (sum, current){
    let fff = current.reduce (function (prev, curr) {
      let a = curr.reduce(function (p,c){
        if (c == '^^') {
          return p + 1;
        }
        else {
          return p  + 0;
        }

      }, 0)
      return +prev+a;
    }, 0)
    return sum+ fff
  } , 0);



}

module.exports = {
  countCats
};
