//If num[0] > num[1], then we store temporarily num[0],
//then we assign num[1] to num[0],(thus num[1] -> num[0])
//then  we assign again temp to num[1], (thus temp -> num[j])
/**
 * Example num[] = {2,1,3,4}
 * num[0] = 2
 * num[1] = 1
 * Check if num[0] > num[1] //true
 * then temp = 2
 * then num[0] = num[1] // num[0] = 1
 * then num[1] = 2
 *
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
    }
  }
}

console.log(num);
