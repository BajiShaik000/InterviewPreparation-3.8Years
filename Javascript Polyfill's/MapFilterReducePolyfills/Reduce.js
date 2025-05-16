//Polyfill for Reduce

Array.prototype.newReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const arr = [1, 2, 3, 4, 5];

console.log(
  arr.reduce((acc, val) => {
    return acc + val;
  })
);
console.log(
  arr.newReduce((acc, val) => {
    return acc + val;
  })
);
