function solution(A) {
  const sorted = [...new Set(A.sort())];
  if (sorted[sorted.length - 1] < 0) return 1;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] > 0 && sorted[i] + 1 !== sorted[i + 1]) return sorted[i] + 1;
  }
  return sorted[sorted.length - 1] + 1;
}
