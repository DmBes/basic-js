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

  let arr = String(n).split('');
  let array = []
  for (let i = 0; i < arr.length ; i++) {
    let x = []
    arr.forEach(t => x.push(t))
    x.splice(i,1)
    let result = +x.join('')
    array.push(result)
  }

  let num = Math.max(...array);
  return num




/*

  arr.forEach(i =>0+(i))

  let index = arr.indexOf(num);

  arr.splice(index,1);
*/





//  arr.sort((a, b) => b-a);
//  arr.pop();
 /* return +arr.join('');

*/


}

module.exports = {
  deleteDigit
};
