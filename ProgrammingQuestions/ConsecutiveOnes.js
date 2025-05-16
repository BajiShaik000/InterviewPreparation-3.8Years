const arr = [1, 1, 2, 3, 4, 1, 1, 1, 5, 6, 1];
// const arr = [1, 1, 2, 3, 4, 1, 1, 1, 5, 6, 1, 1, 1, 1, 9, 7, 1, 1, 1, 1, 1];

const findMaxLengthofConsecutiveOnes = (arr) => {
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      max = max < count ? count : max;
    } else {
      count = 0;
    }
  }
  return max;
};

const reduceApproach = (arr) => {
  return arr.reduce(
    (acc, curr) => {
      acc.count = curr === 1 ? acc.count + 1 : 0;
      acc.max = Math.max(acc.count, acc.max);
      return acc;
    },
    { max: 0, count: 0 }
  ).max;
};

console.log(findMaxLengthofConsecutiveOnes(arr));
console.log(reduceApproach(arr));
