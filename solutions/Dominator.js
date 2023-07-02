function solution(A) {
  const counterMap = new Map();
  let dominator;
  A.forEach((item) => {
    let count = counterMap.get(item);
    if (!count) {
      count = 0;
    }
    counterMap.set(item, count + 1);
  });

  counterMap.forEach((val, key) => {
    if (val > A.length / 2) {
      dominator = key;
    }
  });

  if (dominator) return A.indexOf(dominator);
  return -1;
}
