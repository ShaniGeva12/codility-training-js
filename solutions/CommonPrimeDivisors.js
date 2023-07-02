function solution(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (hasSamePrimeDivisors(A[i], B[i])) {
      count++;
    }
  }
  return count;
}

function gcdByDivision(A, B) {
  if (A % B == 0) return B;
  else return gcdByDivision(B, A % B);
}

function hasSamePrimeDivisors(a, b) {
  let gcdValue = gcdByDivision(a, b);
  let gcdA, gcdB;
  while (a != 1) {
    gcdA = gcdByDivision(a, gcdValue);
    if (gcdA == 1) break;
    a = a / gcdA;
  }
  if (a != 1) {
    return false;
  }
  while (b != 1) {
    gcdB = gcdByDivision(b, gcdValue);
    if (gcdB == 1) break;
    b = b / gcdB;
  }
  return b == 1;
}
