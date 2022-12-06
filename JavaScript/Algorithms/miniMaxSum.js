// function miniMaxSum(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     sum += arr[i];
//   }
//   console.log(sum - max, sum - min);
// }
// miniMaxSum([1, 2, 3, 4, 5]);

function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  min = sum - Math.max(...arr);
  max = sum - Math.min(...arr);
  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]);
