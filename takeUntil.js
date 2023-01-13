const takeUntil = function (array, callback) {
  let result = [];

  for (let item of array) {
    // if (item === callback(item)) {
    if (!callback(item)) {
      // result = array.slice(0, array.indexOf(item));
      result.push(item);
    } else {
      return result;
    }
  }

  /* 
  In the callback function when it defined like x < 0 ; so the function will return a boolean. if it was like (x) => {x < 0}, so after iterating the numbers the function will return the number that will satisfy the cundition. if instead of operators we had a letter like x , then it will return that.
  */
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);

console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
