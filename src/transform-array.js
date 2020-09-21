const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error('Not an array');

  let methods = {
    '--discard-next': (arr, index) => arr.slice(0, index).concat([undefined], arr.slice(index + 2)),
    '--discard-prev': (arr, index) => arr.slice(0, index - 1).concat([undefined], arr.slice(index + 1)),
    '--double-next': (arr, index) => arr.slice(0, index).concat([arr[index + 1]], arr.slice(index + 1)),
    '--double-prev': (arr, index) => arr.slice(0, index).concat([arr[index - 1]], arr.slice(index + 1)),
  };

  for (let index = 0; index < arr.length; index++) {
    let item = arr[index];

    if (typeof methods[item] === 'function'
      && ((item.includes('next') && arr[index + 1] !== undefined)
        || (item.includes('prev') && arr[index - 1] !== undefined))
    )
      return transform(methods[item](arr, index));
  }

  return arr.filter((item) => item !== undefined && !Object.keys(methods).includes(item));
};