function solution(A) {
  const isNumbers = new Array(A.length + 1).fill(false);
  let i = 1;
  if (A.length === 0 || (A.length === 1 && (A[0] > 1 || A[0] <= 0))) {
    return 1;
  }

  A.forEach((item) => {
    if (item > 0 && item < isNumbers.length) isNumbers[item] = true;
  });

  while (i < isNumbers.length) {
    if (isNumbers[i] === false) {
      return i;
    } else i++;
  }

  return i;
}
