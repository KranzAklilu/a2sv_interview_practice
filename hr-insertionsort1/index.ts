/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n: number, arr: number[]): void {
  // Write your code here
  const temp = arr[arr.length - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > temp) {
      arr[i + 1] = arr[i];
      if (i === 0) {
        console.log(arr.join(" "));
        arr[0] = temp;
        console.log(arr.join(" "));
        break;
      }
    }
    if (arr[i] < temp) {
      arr[i + 1] = temp;
      console.log(arr.join(" "));
      break;
    }
    console.log(arr.join(" "));
  }
}

insertionSort1(5, [2, 4, 6, 8, 3]);
