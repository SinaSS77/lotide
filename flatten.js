
const flatten = (array) => {
  let result = [];
  for (let item of array) {
    (Array.isArray(item))
      ? item.forEach((element) => {
        result.push(element);
      })
      : result.push(item);
  }
  console.log(result);
};


module.exports = flatten;

