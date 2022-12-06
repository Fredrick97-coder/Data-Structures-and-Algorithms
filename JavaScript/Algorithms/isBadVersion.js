function isBadVersion(n) {
  return n >= 4;
}

function firstBadVersion(n) {
  let left = 1;
  let right = n;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    console.log("middle:", mid);
    if (isBadVersion(mid)) {
      right = mid;
      console.log("right", right);
    } else {
      left = mid + 1;
      console.log("left", left);
    }
  }
  return left;
}

console.log(firstBadVersion(10));
