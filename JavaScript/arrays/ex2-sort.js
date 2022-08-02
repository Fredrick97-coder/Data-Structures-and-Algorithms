//If num[0] > num[1], then we store temporarily num[0],
//then we assign num[1] to num[0],(thus num[1] -> num[0])
//then  we assign again temp to num[1], (thus temp -> num[j])
//

/**
 *
 * Example num[] = {2, 1, 3, 4}
 * num[0] = 2
 * num[1] = 1
 * Check if num[0] > num[1] //true
 * then temp = 2
 * then num[0] = num[1] // num[0] = 1
 * then num[1] = temp // num[1] = 2
 * now new array // {1,2,3,4}
 * worst time complexity is O(n^2)
 *
 */

const num = [3, 17, 0, 14, 19, 16];
let temp;

for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] > num[j]) {
      temp = num[i];
      num[i] = num[j];
      num[j] = temp;
      console.log(`This is iteration: ${i} -> ${num[i]}  && ${num[j]}`);
      //first iteration: {0,17,3,14,19,16} //0&3
      //second iteration: {0,3,17,14,19,16} //3&17
      //third iteration: {0,3,14,17,19,16} //14&17
      //fourth iteration: {0,3,14,16,19,17} //16&17
      //fifth iteration: {0,3,14,16,17,19} //17&19
    }
  }
}

console.log(num);
