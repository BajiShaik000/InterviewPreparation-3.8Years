const isPalindrome = (word) => {
    let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g,"")
  return cleanWord.split("").reverse().join("") === word;
};

const isPalindromeNative = (word) => {
  let reverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse === word;
};

const isPalindromeTwoPointer = (word) => {
  let l = 0;
  let r = word.length - 1;
  while (l < r) {
    if (word[l] !== word[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

console.log(isPalindrome("cat"));
console.log(isPalindrome("deied"));

console.log(isPalindromeNative("cat"));
console.log(isPalindromeNative("deied"));

console.log(isPalindromeTwoPointer("cat"));
console.log(isPalindromeTwoPointer("deied"));
