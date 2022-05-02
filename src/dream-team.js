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

        let f = arr.filter(x => typeof(x) == 'string')


        const regex2 = new RegExp('/[^a-zA-Z]/gi');
        let hghgh = f.map((item) => item.replaceAll(' ', ''));
        let b = hghgh.map((val) => val.replace(regex2,',').toUpperCase()[0])


    //    let b = f.map((val) => val.replace(/[^a-zA-Z]/gi,',').toUpperCase()[0])
            let c = b.sort();
        //console.log(f)
        if (f.length > 0) return c.join('');
    }

    return false;

}


module.exports = {
  createDreamTeam
};
