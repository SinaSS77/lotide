const assertEqual = require('./assertEqual');

const countLetters = function (anyString) {
  let arrayString = anyString.split("");
  let resultObject = {};
  for (let letter of anyString) {
    if (!resultObject["letter"]) {
      let container = 0;
      arrayString.forEach((element) => {
        if (element === letter) {
          container++;
        }
      });
      resultObject[letter] = container;
    }
  }
  console.log(resultObject);
};

module.exports = countLetters;
// countLetters("sinasin");


