const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {

  let result = 0;
  for (let cycle = 0; cycle < matrix.length ; cycle++) {
    let arr = matrix[cycle]
    for (let i = 0; i < arr.length ; i++) {
      if (arr[i] != 0) result+= arr[i];
      else {
        deleteArr(matrix,cycle,matrix.length,i)
        i--;
      }
    }
  }
  return result;
}


function deleteArr(matrix, startIndex, endIndex, position){
  if (endIndex >= startIndex)
  {
    for (let index = startIndex; index < endIndex ; index++)
    {
      matrix[index].splice(position,1)
    }
  }
}


module.exports = {
  getMatrixElementsSum
};
