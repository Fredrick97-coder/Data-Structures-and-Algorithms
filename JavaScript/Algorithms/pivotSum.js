const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

function pivotIndex(arr) {
  let leftSum = 0;
  let rightSum = sumArr(arr);
  let pivot = 0;
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 2, 5, 6]));
