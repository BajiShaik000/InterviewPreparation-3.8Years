//Debouncing in Javascript
let counter = 0;
function getData() {
  //make a network or api call
  console.log("Fetching Data....", counter++);
}

function debounce(fn, d) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
}

let betterFn = debounce(getData, 300);
