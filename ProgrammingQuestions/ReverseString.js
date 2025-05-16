const str = "HelloWorld";

const reverseStr = str.split("").reverse().join("");

const nativeReverse = (val) => {
  let rev = "";
  for (let i = val.length - 1; i >= 0; i--) {
    rev += val[i];
  }
  return rev;
};

const recursiveReverse = (val) => {
  if (val === "") return "";
  return recursiveReverse(val.slice(1)) + val[0];
};

const reduceReverse = str.split("").reduce((rev, curr) => curr + rev, "");

const twoPointerReverse = (val) => {
  let arr = val.split("");
  let l = 0;
  let r = val.length - 1;
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr.join("");
};

const stackReverse = (val) => {
  const stack = [];
  for (const char of val) {
    stack.push(char);
  }
  let rev = "";
  while (stack.length) {
    rev += stack.pop();
  }
  return rev;
};

console.log(reverseStr);
console.log(nativeReverse(str));
console.log(recursiveReverse(str));
console.log(reduceReverse);
console.log(stackReverse(str));
console.log(twoPointerReverse(str));
