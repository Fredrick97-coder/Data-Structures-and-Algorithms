/**
 * example usage:
 * let arr = [5, 4, 3, 2, 1];
 * min = 0;
 * j = 1;
 * arr[1] < arr[0] //true
 * min = 1;
 * j = 2;
 */

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i; //min is the index of the smallest number in the unsorted portion of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(SelectionSort([100, 43, 22, 5, 4, 0, 1]));
