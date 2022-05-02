const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {




  let array = n.split('-');
  if (array < 5) return false;


  const regex = new RegExp(/[0-9]|[A-F]/);

  for (let i = 0; i < array.length; i++) {

    let first = array[i][0];
    let second  = array[i][1];

    let IsFirst = regex.test(first);
    let IsSecond = regex.test(second);


     let b = regex.test(first) & regex.test(array[i][1])
    if (!b){
      return false;
    }

  }
  return true;




}
module.exports = {
  isMAC48Address
};
