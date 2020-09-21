const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date)
    return 'Unable to determine the time of year!';

  if (!+date)
    throw new Error('Not a Date');

  let seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    fall: [8, 9, 10],
  };

  return Object.keys(seasons).find(key => seasons[key].includes(date.getMonth()));
};
