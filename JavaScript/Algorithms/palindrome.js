/***
 * Algorithm - Palindrome
 *
 * @description - the main purpose of a palindrome
 * is that it takes in a string as an parameter and the
 * reverse of that string should be the same as the
 * original format of the string.
 *
 *
 */

const isPalindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    var revStr = str.length - 1 - i;
    if (str[i] !== str[revStr]) {
      return false;
    }
    return true;
  }
};

console.log(isPalindrome("happy"));
