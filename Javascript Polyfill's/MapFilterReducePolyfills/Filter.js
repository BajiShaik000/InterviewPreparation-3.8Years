//Polyfill for Filter

Array.prototype.newFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const arr = [1,2,3,4];

const filterArr = arr.filter((value,index,arr)=>{
    return value > 2;
})

const newfilterArr = arr.newFilter((value,index,arr)=>{
    return value > 2;
})

console.log(filterArr);
console.log(newfilterArr);