const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    this.chain.split('~~').length;
  },
  addLink(value) {
    let arr = this.chain == '' ? [] : this.chain.split('~~');
    let link = value !== undefined ? `( ${String(value)} )` : `(  )`;

    arr.push(link);

    this.chain = arr.join('~~');
    return this;
  },
  removeLink(position) {
    let arr = this.chain.split('~~');
    console.log(typeof(position) !== 'number' || position > arr.length || position < 1 || Math.floor(position) !== position);
    if (typeof(position) !== 'number' || Math.floor(position) !== position || position > arr.length || position < 1 || Math.floor(position) !== position) {
      this.chain = '';
      throw new Error('You can\'t remove incorrect link!');
    }
    arr.splice((position - 1), 1);
    this.chain = arr.join('~~');
    
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let chainContainer = this.chain;
    this.chain = '';
    return chainContainer;
  }
};

module.exports = {
  chainMaker
};
