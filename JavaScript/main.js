function findDigits(n) {
  let count = 0;
  let digits = n.toString().split("");
  console.log(digits);
  for (let i = 0; i < digits.length; i++) {
    if (n % digits[i] === 0) {
      count++;
    } else {
      console.log(`${digits[i]} is not divisible`);
    }
  }
  return count;
}

console.log(findDigits(123));

// function findDigits(n) {
//   let count = 0;
//   let digits = n.toString().split("");
//   console.log(digits);
//   while (digits.length > 0) {
//     let digit = digits.shift();
//     if (n % digit === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findDigits(124));
