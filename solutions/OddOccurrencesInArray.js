function solution(A) {
  const duplicateSet = new Set(
    A.filter((item, index) => index !== A.indexOf(item))
  );
  return A.find((item) => !duplicateSet.has(item));
}
