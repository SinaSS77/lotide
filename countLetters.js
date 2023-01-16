const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

countLetters("sinasin");


