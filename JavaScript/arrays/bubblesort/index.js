//first function
let arr1 = [100, 39, 0, 1, 0, 2, 4, 2, 1];
let len1 = arr1.length;
let temp1 = 0;

//second function
let arr2 = [100, 39, 0, 1, 0, 2, 4, 2, 1];
let len2 = arr2.length;
let temp2 = 0;

/**
 * this implementation is not efficient
 * since it has time complexity of O(n^2)
 */

function BubbleSort(arr1, len1, temp1) {
  let sortedArray = [];
  for (let i = 0; i < len1; i++) {
    for (let j = i + 1; j < len1; j++) {
      if (arr1[i] > arr1[j]) {
        // swap elements
        temp1 = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp1;
      }
    }
    if (sortedArray.includes(arr1[i])) {
      continue;
    } else {
      sortedArray.push(arr1[i]);
    }
  }
  return sortedArray;
}

console.log(BubbleSort(arr1, len1, temp1));

/**
 * this implementation has a time complexity of O(n)
 */

function BubbleSortImproved(arr2, len2, temp2) {
  let sortedArray = [];
  let swapped = false;
  for (let i = 0; i < len2; i++) {
    swapped = false;
    for (let j = i + 1; j < len2; j++) {
      if (arr2[i] > arr2[j]) {
        // swap elements
        temp2 = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp2;
        swapped = true;
      }
    }
    if (sortedArray.includes(arr2[i])) {
      continue;
    } else {
      sortedArray.push(arr2[i]);
    }
    if (!swapped) {
      break;
    }
  }
  return sortedArray;
}

console.log(BubbleSortImproved(arr2, len2, temp2));
