let arr = [100, 39, 0, 1, 0, 2, 4, 2, 1];
let len = arr.length;
let temp = 0;

function BubbleSort(arr, len, temp) {
  let sortedArray = [];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        // swap elements
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    if (sortedArray.includes(arr[i])) {
      continue;
    } else {
      sortedArray.push(arr[i]);
    }
  }
  return sortedArray;
}

console.log(BubbleSort(arr, len, temp));
