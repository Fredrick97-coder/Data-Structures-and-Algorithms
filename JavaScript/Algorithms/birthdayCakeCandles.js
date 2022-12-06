// function maxEle(arr) {
//   let maxElement = arr.reduce((a, b) => (a > b ? a : b));
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === maxElement) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(maxEle([3, 5, 5, 2, 1, 3]));

const birthdayCakeCandles = (arr) => {
  let max = Math.max(...arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      count++;
    }
  }
  return `Occurrence of max element ${max} is: ` + count;
};

console.log(birthdayCakeCandles([3, 5, 5, 2, 1, 3]));
