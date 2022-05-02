const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {

  let additionsSeparator = (options.additionSeparator)? options.additionSeparator: '|';
  let optioonSeparator = options.separator ? options.separator: '+';
  let Repereat = options.repeatTimes? options.repeatTimes: 1;

  let optionsAddtions = aaaaa(options.addition)





 // let optionsAddtions = options.addition ? options.addition : options.addition == null ? 'null' :options.addition == undefined? '': options.addition.toString().length > 0 ? options.addition.toString() : "";
  let RepereatAddition = options.additionRepeatTimes;
  let result = ''


  for (let cycle = 0; cycle < Repereat ; cycle++) {
    result += str;
    result += additionStr(optionsAddtions, additionsSeparator,RepereatAddition)
    if (!(cycle+ 1 == Repereat)) result += optioonSeparator;

  }
  return result;
}


function additionStr(addition, AdditionSeparator, count){
  let result = '';
  if (count){
    for (let i = 0; i < count; i++) {
      if (i+1 == count){
        result+=addition
      }
      else {
        result += addition+ AdditionSeparator
      }

    }
    return result;
  }
  if (addition.length  != 0){
    return addition;
  }
  return result;

}

function  aaaaa (variable){
  if (typeof variable == "object") return  variable;
  if(typeof  variable == 'boolean')  return variable.toString();
  if (variable == '') return '';
  if (variable == undefined) return '';
  if (variable == null) return 'null';


  return variable.toString();

}



module.exports = {
  repeater
};
