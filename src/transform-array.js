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
  if (arr[0] == '--double-prev' || arr[0] == '--discard-prev' ){
    arr.splice(0,1);
  }
  if (arr[arr.length-1] == '--discard-next' || arr[arr.length-1] == '--double-next'){
    arr.splice(arr.length-1,0)
  }
  arr.forEach((value, index, array) => {
    if (value == '--double-prev') arr[index] == arr[index - 1];
    else if (value == '--discard-prev') arr.splice(index-1) ;
    else if (value ==  '--discard-next') arr.splice(index,2);
    else if (value == '--double-next') arr[index] == arr[index+1];

  }
  )
}

module.exports = {
  transform
};
