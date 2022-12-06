function compareTriplets(a, b) {
  let point1 = 0;
  let point2 = 0;
  let i = 0;
  while (i < a.length && i < b.length) {
    if (a[i] > b[i]) {
      point1++;
    }
    if (a[i] < b[i]) {
      point2++;
    }
    i++;
  }
  return [point1, point2];
}
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
