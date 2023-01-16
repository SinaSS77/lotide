const assertEqual = require("./assertEqual");

const tail = function(array) {
  let arr = [];
  if (array) {
    arr = array.slice(1);
  }
  return arr;
};

module.exports = tail;