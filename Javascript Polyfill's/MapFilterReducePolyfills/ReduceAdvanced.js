Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this == null) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }

  if (typeof callbackFn != "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const array = Object(this);
  const length = array.length >>> 0;

  let accumulator;
  let startIndex = 0;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    while (startIndex < length && !(startIndex in array)) {
      startIndex++;
    }
    if (startIndex >= length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[startIndex++];
  }
  for (let i = startIndex; i < length; i++) {
    if (i in array) {
      accumulator = callbackFn(accumulator, array[i], i, array);
    }
  }
  return accumulator;
};
