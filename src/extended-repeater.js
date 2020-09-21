const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let config = {
    str: '',
    repeatTimes: 0,
    separator: '+',
    addition: '',
    additionSeparator: '|',
    additionRepeatTimes: 0,
  }

  config = Object.assign(config, {str}, options);

  ['str', 'separator', 'addition', 'additionSeparator']
    .forEach((item) => config[item] = '' + config[item]);

  return Array(config.repeatTimes)
    .fill(config.str
      + Array(config.additionRepeatTimes)
        .fill(config.addition)
        .join(config.additionSeparator))
    .join(config.separator);
};
