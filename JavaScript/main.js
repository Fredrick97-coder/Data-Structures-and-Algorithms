function findDigits(n) {
  let count = 0;
  let digits = n.toString();
  for (let i = 0; i < digits.length; i++) {
    if (n % digits[i] === 0) {
      count++;
    }
  }
  return count;
}

console.log(findDigits(124));

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

function viralAdvertising(n) {
  let people = 5;
  let likes = 0;
  for (let i = 0; i < n; i++) {
    let half = Math.floor(people / 2);
    likes += half;
    people = half * 3;
  }
  return likes;
}

console.log(viralAdvertising(3));
