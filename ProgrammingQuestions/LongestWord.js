const sentence =
  "We want to ensure that you always have access to your files apps settings and passwords";

const words = sentence.replace(/[^\w\s]/g, "").split(/\s+/);

const maxLength = Math.max(...words.map((word) => word.length));

const allLongest = words.filter((word) => word.length === maxLength);

const longest = words.reduce(
  //   (acc, curr) => (acc.length < curr.length ? curr : acc),//first matched max length string
  (acc, curr) => (acc.length <= curr.length ? curr : acc), //last matched max length string
  ""
);

console.log(longest);
console.log(allLongest);
