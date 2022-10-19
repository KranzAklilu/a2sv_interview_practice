/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a: number[]): void {
  // Write your code here
  let swaps = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        swaps++;
      }
    }
  }
  console.log(`Array is sorted in ${swaps} swaps.
First Element: ${a[0]}
Last Element: ${a[a.length - 1]}`);
}

countSwaps([1, 2, 3]);
