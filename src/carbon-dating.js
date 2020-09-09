const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let N = parseFloat(sampleActivity),
      k = (0.693 / HALF_LIFE_PERIOD);
  
  if (typeof sampleActivity !== 'string' || Object.is(NaN, N) || N <= 0 || 15 <= N)
    return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / N) / k);
};
