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
function deleteDigit( n ) {
  const array = n.toString().split('')
  const arrayVariants = array.map((item, i, arr) => {
  return arr.filter((num, index) => i !== index).join('')})

  return +arrayVariants.sort((a,b) => +b - +a)[0]
}

module.exports = {
  deleteDigit
};
