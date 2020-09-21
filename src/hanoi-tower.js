const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoiResponse = {};

  hanoiResponse.turns = (2 ** disksNumber) - 1;
  hanoiResponse.seconds = Math.floor(hanoiResponse.turns * (3600 / turnsSpeed));

  return hanoiResponse;
};
