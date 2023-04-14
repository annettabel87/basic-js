const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  if (typeof (sampleActivity) !== 'string' || +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY || isNaN(parseFloat(sampleActivity))) {
    return false
  } else {
    let n = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
    const k = 0.693 / HALF_LIFE_PERIOD;
    let result = Math.ceil(n / k);
    if (result > 0 && result != Infinity) {
      return (result)
    } else {
      return false
    }
  }
}

module.exports = {
  dateSample
};
