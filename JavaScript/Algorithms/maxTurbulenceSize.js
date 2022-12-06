function maxTurbulenceSize(arr) {
  let result = 1;
  let anchor = 0;
  for (let i = 1; i < arr.length; i++) {
    let c = compare(arr[i - 1], arr[i]);
    if (c === 0) {
      anchor = i;
    } else if (i === arr.length - 1 || c * compare(arr[i], arr[i + 1]) !== -1) {
      result = Math.max(result, i - anchor + 1);
      anchor = i;
    }
  }
  return result;
}

function compare(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]));
