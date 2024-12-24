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

   constructor(isDirect = true) {
    this.isDirect = isDirect; // Тип машины: прямая (true) или обратная (false)
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
    // Метод для проверки аргументов
    validateArgs(message, key) {
      if (!message || !key) {
        throw new Error('Incorrect arguments!');
      }
    }
  encrypt(message, key) {
    this.validateArgs(message, key); // Проверка аргументов

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (this.alphabet.includes(messageChar)) {
        const messageIndex = this.alphabet.indexOf(messageChar);
        const keyChar = key[keyIndex % key.length];
        const keyIndexShift = this.alphabet.indexOf(keyChar);
        const encryptedIndex = (messageIndex + keyIndexShift) % 26;
        result += this.alphabet[encryptedIndex];
        keyIndex++;
      } else {
        result += messageChar; // Символы вне алфавита остаются неизменными
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
  decrypt( encryptedMessage, key) {
    this.validateArgs(encryptedMessage, key);
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];
      if (this.alphabet.includes(encryptedChar)) {
        const encryptedIndex = this.alphabet.indexOf(encryptedChar);
        const keyChar = key[keyIndex % key.length];
        const keyIndexShift = this.alphabet.indexOf(keyChar);
        const messageIndex = (encryptedIndex - keyIndexShift + 26) % 26;
        result += this.alphabet[messageIndex];
        keyIndex++;
      } else {
        result += encryptedChar; // Символы вне алфавита остаются неизменными
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
