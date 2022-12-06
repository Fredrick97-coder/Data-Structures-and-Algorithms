function plusMinus(arr) {
  // Write your code here
  let numPos = 0;
  let numNeg = 0;
  let numZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      numPos++;
    } else if (arr[i] < 0) {
      numNeg++;
    } else {
      numZero++;
    }
  }
  console.log((numPos / arr.length).toFixed(6));
  console.log((numNeg / arr.length).toFixed(6));
  console.log((numZero / arr.length).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);
