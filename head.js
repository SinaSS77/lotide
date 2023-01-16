const assertEqual = require("./assertEqual");

// const head = (array) => array ? array[0] : "undefined";
const head = function (array) {
  if (array) {
    return array[0];
  }
};

console.log(head([]));
module.exports = head;
