const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  list: [],
  getLength() {
    return this.list.length;
  },
  addLink(value) {
    this.list.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != "number" ||
      position > this.list.length ||
      position <= 0
    ) {
      this.list = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.list.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.list = this.list.reverse();
    return this;
  },
  finishChain() {
    let str = this.list.join("~~");
    this.list = [];
    return str;
  },
};

module.exports = {
  chainMaker,
};
