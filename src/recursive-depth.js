const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr))
      throw new Error('It\'s not an array');

    let depthBranchMax = 0;

    return arr.reduce((depthOverall, item) => {
      if (!Array.isArray(item))
        return depthOverall;

      let depthBranch = this.calculateDepth(item);

      if ((depthBranch + (depthOverall - depthBranchMax)) > depthOverall) {
        depthOverall = depthBranch + (depthOverall - depthBranchMax);
        depthBranchMax = depthBranch;
      }

      return depthOverall;
    }, 1);
  }
};