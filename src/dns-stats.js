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
function getDNSStats(domains) {
  const resultObj = {};
  domains.map(item => item.split('.').reverse()).forEach(item => {
    let domainStr = '';
    for(let i = 0; i < item.length; i++) {
      domainStr += '.' + item[i];
      !!resultObj[domainStr] ? resultObj[domainStr] += 1 : resultObj[domainStr] = 1;
    }
  })
  return resultObj;
}

module.exports = {
  getDNSStats
};
