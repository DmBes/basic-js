const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
    let arr = arguments[0];
    if (Array.isArray(arr)){
        let f = arr.filter(x => typeof(x) == 'string').map((val) => val.replace(/[^a-zA-Z]/gi,',').toUpperCase()[0]).sort();
        //console.log(f)
        if (f.length > 0) return f.join('');
    }

    return false;

}


module.exports = {
  createDreamTeam
};
