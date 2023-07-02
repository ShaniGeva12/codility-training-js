function solution(A) {
  let i = 0,
    j = 0;
  let minAbsSum = Math.abs(A[0] + A[0]);

  for (i = 0; i < A.length; i++) {
    for (j = 0; j < A.length; j++) {
      let sum = Math.abs(A[i] + A[j]);
      if (sum < minAbsSum) {
        minAbsSum = sum;
      }
    }
  }

  return minAbsSum;
}
