const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;

  matrix.forEach(firstLevel => {
    firstLevel.forEach((secondLevel) => {
      if (secondLevel === "^^")
        count += 1;
    });
  });

  return count;
};
