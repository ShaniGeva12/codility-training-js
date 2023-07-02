function solution(A) {
  const sortedArr = A.sort();
  let i = 0;
  while (i < A.length) {
    const current = sortedArr[i];
    const next = sortedArr[i + 1];

    if (current !== next) return current;

    i += 2;
  }
}
