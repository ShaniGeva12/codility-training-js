function solution(A) {
  const sortSet = new Set(A.sort());
  const sorted = [...sortSet];
  const length = sorted.length;
  if (sorted[length - 1] < 0) return 1;
  for (let i = 0; i < length - 1; i++) {
    if (sorted[i] > 0 && sorted[i] + 1 !== sorted[i + 1]) return sorted[i] + 1;
  }

  if (sortSet.has(sorted[length - 1] - 1) || sorted[length - 1] - 1 <= 0)
    return sorted[length - 1] + 1;
  return sorted[length - 1] - 1;
}
