export function fibonacciIterative(n: number) {
  if (n < 1) { return 0; }
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    // n >= 2
    fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}

export function fibonacci(n: number): number {
  if (n < 1) { return 0; } // {1}
  if (n <= 2) { return 1; } // {2}
  return fibonacci(n - 1) + fibonacci(n - 2); // {3}
}