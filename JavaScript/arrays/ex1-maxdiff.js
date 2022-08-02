let scores = [23, 45, 15, 67, 89, 12, 34, 56, 78, 90];

// const sortedArray = scores.sort((a, b) => a - b);
// const maxElement = sortedArray[sortedArray.length - 1];
// const minElement = sortedArray[0];
// function maxDiff() {
//   let maxDiff = maxElement - minElement;
//   return maxDiff;
// }

// console.log(maxDiff());

function maxDifference(arr) {
  let maxDiff = -1;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min && maxDiff < arr[i] - min) {
      maxDiff = arr[i] - min;
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxDiff;
}

console.log(maxDifference(scores));
