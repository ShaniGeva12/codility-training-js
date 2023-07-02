function solution(A) {
  const sorted = A.sort();
  let left = 0,
    right = A.length - 1;
  let minAbsSum = Math.abs(sorted[left] + sorted[left]);

  while (left <= right) {
    let sum = sorted[right] + sorted[left];
    minAbsSum = Math.min(minAbsSum, Math.abs(sum));

    if (sum <= 0) {
      left++;
    } else {
      right--;
    }
  }
  return minAbsSum;
}

// for some reason this still gets only 54%
