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

const AlphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(isDirect) {
    if(isDirect == false) {
      this.isDirect = false;
    } else {
      this.isDirect = true;
    }
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!');
    } else {
      let messageArr = message.toUpperCase().split('').map(item => {
        if (AlphabetString.includes(item)) {
          return AlphabetString.search(`[${item}]`) + 1 > 26 ? AlphabetString.search(`[${item}]`) - 26 + 1: AlphabetString.search(`[${item}]`) + 1;
        } else {
          return 0;
        }
      });
      let keyArr = key.toUpperCase().split('').map(item => {
        if (AlphabetString.includes(item)) {
          return AlphabetString.search(`[${item}]`) + 1 > 26 ? AlphabetString.search(`[${item}]`) - 26 + 1: AlphabetString.search(`[${item}]`) + 1;
        } else {
          return 0;
        }
      });
      
      let keyArrLength = keyArr.length;
      let zeroCounter = 0;

      for (let i = 0; i < messageArr.length; i++) {
        if(messageArr[i] > 0) {
          if(i - zeroCounter >= keyArrLength) {
            if((i - zeroCounter) / keyArrLength >= 2){
              let letterIdx = messageArr[i] + keyArr[(i - zeroCounter) % keyArrLength] - 2;
              letterIdx = letterIdx + 1 > 26 ? letterIdx - 26 : letterIdx;
              messageArr[i] = AlphabetString[letterIdx];
            } else {
              let letterIdx = messageArr[i] + keyArr[i - zeroCounter - keyArrLength] - 2;
              letterIdx = letterIdx + 1 > 26 ? letterIdx - 26 : letterIdx;
              messageArr[i] = AlphabetString[letterIdx];
            }
          } else {
            let letterIdx = messageArr[i] + keyArr[i - zeroCounter] - 2;
            letterIdx = letterIdx + 1 > 26 ? letterIdx - 26 : letterIdx;
            messageArr[i] = AlphabetString[letterIdx];
          }
        } else {
          messageArr[i] = message[i];
          zeroCounter += 1;
        }
      }
      
      return this.isDirect ? messageArr.join('') : messageArr.reverse().join('');
    }
  }

  decrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!');
    } else {
      let messageArr = message.toUpperCase().split('').map(item => {
        if (AlphabetString.includes(item)) {
          return AlphabetString.search(`[${item}]`) + 1 > 26 ? AlphabetString.search(`[${item}]`) - 26 + 1: AlphabetString.search(`[${item}]`) + 1;
        } else {
          return 0;
        }
      });
      let keyArr = key.toUpperCase().split('').map(item => {
        if (AlphabetString.includes(item)) {
          return AlphabetString.search(`[${item}]`) + 1 > 26 ? AlphabetString.search(`[${item}]`) - 26 + 1: AlphabetString.search(`[${item}]`) + 1;
        } else {
          return 0;
        }
      });
      
      let keyArrLength = keyArr.length;
      let zeroCounter = 0;

      for (let i = 0; i < messageArr.length; i++) {
        if(messageArr[i] > 0) {
          if(i - zeroCounter >= keyArrLength) {
            if((i - zeroCounter) / keyArrLength >= 2){
              let letterIdx = messageArr[i] - keyArr[(i - zeroCounter) % keyArrLength];
              letterIdx = letterIdx < 0 ? 26 + letterIdx : letterIdx;
              messageArr[i] = AlphabetString[letterIdx];
            } else {
              let letterIdx = messageArr[i] - keyArr[i - zeroCounter - keyArrLength];
              letterIdx = letterIdx < 0 ? 26 + letterIdx : letterIdx;
              messageArr[i] = AlphabetString[letterIdx];
            }
          } else {
            let letterIdx = messageArr[i] - keyArr[i - zeroCounter];
            letterIdx = letterIdx < 0 ? 26 + letterIdx : letterIdx;
            messageArr[i] = AlphabetString[letterIdx];
          }
        } else {
          messageArr[i] = message[i];
          zeroCounter += 1;
        }
      }
      
      return this.isDirect ? messageArr.join('') : messageArr.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
