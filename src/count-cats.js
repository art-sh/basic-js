const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((out, level) => out + level.filter((item) => item === '^^').length, 0);
};
