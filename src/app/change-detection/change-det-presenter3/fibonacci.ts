export const fibonacciPoorPerformance = (n: number): number => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacciPoorPerformance(n - 1) + fibonacciPoorPerformance(n - 2);
  }
}