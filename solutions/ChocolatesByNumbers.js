function solution(N, M) {
  return N / gcdByDivision(N, M);
}

function gcdByDivision(A, B) {
  if (A % B == 0) return B;
  else return gcdByDivision(B, A % B);
}

/*
The problem is to count the number of chocolates you will eat when there are N chocolates in a circle.
The strategy is to divide N by the greatest common divisor of N and M.
*/
