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
function repeater(str, options) {
  const repeatTimes = options.repeatTimes ?  options.repeatTimes : 1
  const separator = options.separator? options.separator : '+'
  const addition = String(options.addition !== undefined ? options.addition : '')
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|'

  let sumAddition = []
  let result = []
  for (let i = 0; i < additionRepeatTimes; i++) {
    sumAddition.push(addition)
  }
  let resultAddition = sumAddition.join(additionSeparator)

  
  for (let i = 0; i < repeatTimes; i++) {
    result.push(`${str}${resultAddition}`)
  }

  return result.join(separator)
}

module.exports = {
  repeater
};
