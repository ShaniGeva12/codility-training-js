function solution(A, K) {
  const res = [...A];
  let position = K;
  A.forEach((item, index) => {
    position = index + K;
    while (position >= A.length) {
      position = position - A.length;
    }
    res[position] = item;
  });

  return res;
}
