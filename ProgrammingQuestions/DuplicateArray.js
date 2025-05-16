const arr = [1, 2, 1, 4, 5, 7, 8, 4, 4, 5];

// const newArr = [...new Set(arr)];
const newArr = Array.from(new Set(arr));

const arr2 = arr.reduce((acc, curr) => {
  acc.includes(curr) ? acc : acc.push(curr);
  return acc;
}, []);

const unique = arr.filter((value, index) => arr.indexOf(value) === index);

const removeDuplicates = (array) => {
  const map = new Map();
  return array.filter((val) => !map.has(val) && map.set(val, true));
};

console.log(newArr);
console.log(arr2);
console.log(unique);
console.log(removeDuplicates(arr));
