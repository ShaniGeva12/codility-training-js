function solution(A) {
  const sorted = A.sort();
  let minVal = 1;
  sorted.forEach((item) => {
    if (item === minVal) minVal++;
  });
  return minVal;
}
