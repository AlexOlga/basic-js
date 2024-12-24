const { NotImplementedError } = require("../extensions/index.js");

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
  const dnsStats = {};

  for (let i = 0; i < domains.length; i++) {
    const levels = domains[i].split(".").reverse();
    let currentDNS = "";

    for (let j = 0; j < levels.length; j++) {
      currentDNS += `.${levels[j]}`;
      if (!dnsStats[currentDNS]) {
        dnsStats[currentDNS] = 0;
      }
      dnsStats[currentDNS]++;
    }
  }

  return dnsStats;

  // remove line with error and write your code here
}

module.exports = {
  getDNSStats,
};
