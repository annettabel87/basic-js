const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  return domains.reduce((result, domain) => {
		let domainStr = "";
		const reverseArray =  domain.split(".").reverse()

		for (arr of reverseArray) {
			domainStr += `.${arr}`
			if (!result[domainStr]) result[domainStr] = 0
			result[domainStr]++
		}

		return result
	}, {})
}
getDNSStats([
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ])
module.exports = {
  getDNSStats
};
