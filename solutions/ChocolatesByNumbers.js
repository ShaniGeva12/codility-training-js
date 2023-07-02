function solution(N, M) {
  const eat = new Set();
  let position = 0;
  while (!eat.has(position)) {
    eat.add(position);

    position = position + M;
    if (position >= N) {
      position = position - N;
    }
  }

  return eat.size;
}
