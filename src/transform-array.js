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
    let array =arr;


    //arr.forEach((item) => array.push(item))
    if (!Array.isArray(array)){
        throw new Error("'arr' parameter must be an instance of the Array!")
    }
    if (arr.length == 0) return array;
    if (arr[0] == '--double-prev' || arr[0] == '--discard-prev' ){
        arr.splice(0,1);
    }
    if (array[array.length-1] == '--discard-next' || array[array.length-1] == '--double-next'){
        array.splice(array.length-1,0)
    }
    arr.forEach((value, index, array1) => {
            if (value == '--double-prev') array[index] == array[index - 1];
            else if (value == '--discard-prev') array.splice(index-1) ;
            else if (value ==  '--discard-next') array.splice(index,2);
            else if (value == '--double-next') array[index] == array[index+1];
        }
    )


    return arr = array;
}

module.exports = {
  transform
};
