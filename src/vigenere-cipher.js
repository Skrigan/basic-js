const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = reverse
  }

  encrypt(word, key) {
    if ((word && key) === undefined) throw new Error('Incorrect arguments!')
    word = word.toUpperCase();
    key = key.toUpperCase();
    let res = ''
    for (let i = 0, j = 0; i < word.length; i++, j++) {
        if (j == key.length) j = 0;
        if (word.charCodeAt(i) > 90 || word.charCodeAt(i) < 65) {
            res += word[i]
            j--
            continue;
        }
        let char = word.charCodeAt(i) + key.charCodeAt(j) - 65;
        console.log(char)
        res += char > 90 ? String.fromCharCode(char - 26) : String.fromCharCode(char);
    }
    return this.reverse ? res : res.split('').reverse().join('')
  }

  decrypt(word, key) {
    if ((word && key) === undefined) throw new Error('Incorrect arguments!')
    key = key.toUpperCase();
    let res = ''
    for (let i = 0, j = 0; i < word.length; i++, j++) {
        if (j == key.length) j = 0;
        let char = word.charCodeAt(i) - key.charCodeAt(j) + 65;
        console.log(char, word[i])
        if (word.charCodeAt(i) > 90 || word.charCodeAt(i) < 65) {
            res += word[i]
            j--
            continue;
        }
        res += char < 65 ? String.fromCharCode(char + 26) : String.fromCharCode(char);
    }
    return this.reverse ? res : res.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
