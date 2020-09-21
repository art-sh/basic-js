const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainStorage: [],

  getLength() {
    return this.chainStorage.length;
  },
  addLink(value = '') {
    this.chainStorage.push('' + value);

    return this;
  },
  removeLink(position) {
    if (!this.chainStorage[position]) {
      this.clearCurrentChain();

      throw new Error('Wrong link');
    }

    this.chainStorage.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chainStorage.reverse();

    return this;
  },
  finishChain() {
    let out = this.chainStorage.reduce((out, nextValue) => {
      return `${out}( ${nextValue} )~~`;
    }, '').slice(0, -2);

    this.clearCurrentChain();

    return out;
  },
  clearCurrentChain() {
    this.chainStorage.length = 0;
  }
};

module.exports = chainMaker;
