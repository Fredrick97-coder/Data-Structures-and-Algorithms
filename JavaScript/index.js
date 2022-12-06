// function rightRotate(arr, n, k) {
//   k = k % n;
//   for (let i = 0; i < n; i++) {
//     if (i < k) {
//       arr.unshift(arr.pop());
//     }
//   }
//   return arr;
// }

// // Driver code
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = arr.length;
// let k = 2;
// console.log(rightRotate(arr, n, k));

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function (nums, k) {
//   k = k % nums.length;
//   for (let i = 0; i < nums.length; i++) {
//     if (i < k) {
//       nums.unshift(nums.pop());
//     }
//   }
//   return nums;
// };

// // Driver code
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = 2;
// console.log(rotate(arr, k));

// implemented function to rotate the array in anticlockwise.
function rotateRight(arrRotate, step) {
  //  adding the new elements to the end of the array based on the step value.
  for (var i = 0; i < step; i++) {
    arrRotate.push(arrRotate[i]);
  }

  // Removing the elements which we recently added to the Array based on the step value.
  for (var i = 0; i < step; i++) {
    arrRotate.shift();
  }
  return arrRotate;
}

// passing two parameters such as [1,2,3,4,5,6,7,8,9] and 3 to the rotateRight function
var finalRotateArray = rotateRight([1, 2, 3, 4, 5, 6, 7], 3);
console.log(finalRotateArray);
// // Output: [4, 5, 6, 7, 8, 9, 1, 2, 3];

// Example: var finalRotateArray = rotateRight([1, -2, 3, 0, 4, 6, -1, 8, 9], 3);
// console.log(finalRotateArray);
// Output: [0, 4, 6, -1, 8, 9, 1, -2, 3];
