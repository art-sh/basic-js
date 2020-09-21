const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabetCount = 26;
  charCodeStart = 65;
  charCodeEnd = 90;
  isDirect = true;

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(str, code) {
    return this.out(this.genCodedString(str.toUpperCase(), code.toUpperCase(), true));
  }

  decrypt(str, code) {
    return this.out(this.genCodedString(str.toUpperCase(), code.toUpperCase()));
  }

  genCodedString(str, code, encrypt = false) {
    let coded = this.fillStringByCode(str, code);

    return str.split('').reduce((o, l, i) => o + this.encryptLetter(l, coded[i], encrypt), '');
  }

  fillStringByCode(str, code) {
    let codeIndex = 0;

    return str.split('').reduce((out, letter, i) => {
      return out += this.isCharIsLetter(letter)
        ? code[((codeIndex++ === code.length) ? codeIndex -= code.length : codeIndex) - 1]
        : str[i];
    }, '');
  }

  isCharIsLetter(char) {
    let charCode = char.charCodeAt(0);

    return this.charCodeStart <= charCode && charCode <= this.charCodeEnd;
  }

  encryptLetter(letterString, letterCode, isEncrypt = false) {
    if (!this.isCharIsLetter(letterString))
      return letterString;

    let newCharPosition = (isEncrypt)
      ? (letterString.charCodeAt(0) + letterCode.charCodeAt(0) - (2 * this.charCodeStart))
      : (letterString.charCodeAt(0) - letterCode.charCodeAt(0));

    newCharPosition += (newCharPosition < 0) ? this.alphabetCount : 0;
    newCharPosition -= (newCharPosition >= this.alphabetCount) ? this.alphabetCount : 0;

    return String.fromCharCode(this.charCodeStart + newCharPosition);
  }

  out(str) {
    return (this.isDirect) ? str : str.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
