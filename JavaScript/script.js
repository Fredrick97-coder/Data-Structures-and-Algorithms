// function extraLongFactorials(n) {
//   let result = BigInt(1);
//   for (let i = 2; i <= n; i++) {
//     result *= BigInt(i);
//   }
//   console.log(result.toString());
// }

// extraLongFactorials(25);
// function utopianTree(n) {
//   let height = 1;
//   for (let i = 1; i <= n; i++) {
//     // if (i % 2 === 0) {
//     //   height++;
//     // } else {
//     //   height *= 2;
//     // }
//   }
//   return height;
// }

// console.log(utopianTree(5));

// function pivotIndex(nums) {
//   let leftSum = 0;
//   let rightSum = nums.reduce((a, b) => a + b);
//   for (let i = 0; i < nums.length; i++) {
//     rightSum -= nums[i];
//     if (leftSum === rightSum) {
//       return i;
//     }
//     leftSum += nums[i];
//   }
//   return -1;
// }

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
