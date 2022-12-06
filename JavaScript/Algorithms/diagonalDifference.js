function diagonalDifference(arr) {
  let lsum = 0;
  let rsum = 0;
  let absDiff = 0;
  for (let i = 0; i < arr.length; i++) {
    lsum += arr[i][i];
    rsum += arr[i][arr.length - 1 - i];
  }

  absDiff = Math.abs(lsum - rsum);
  return absDiff;
}
