function solution(N, A) {
  const counters = new Array(N).fill(0);
  let currentMax = 0,
    lastUpdate = 0;
  A.forEach((operation) => {
    if (operation === N + 1) {
      lastUpdate = currentMax;
    } else {
      if (counters[operation - 1] < lastUpdate) {
        counters[operation - 1] = lastUpdate + 1;
      } else {
        counters[operation - 1]++;
      }

      if (counters[operation - 1] > currentMax) {
        currentMax = counters[operation - 1];
      }
    }
  });
  return counters.map((counter) =>
    counter < lastUpdate ? lastUpdate : counter
  );
}
