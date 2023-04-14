const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.chain.push(value)
      return this
    } else {
      this.chain.push('( )')
      return this
    }
  },
  removeLink(position) {
    if (position - 1 >= 0 && Number.isInteger(position - 1) && position  < this.chain.length ) {
      this.chain.splice(position - 1, 1)
      return this
    } else {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }

  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const result = this.chain.map(item => `( ${item} )`)
    this.chain = []
    return result.join('~~')
  }
};

module.exports = {
  chainMaker
};
