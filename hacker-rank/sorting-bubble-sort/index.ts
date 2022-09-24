"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a: number[]): void {
  // Write your code here
  const n = a.length;
  let numSwaps = 0;
  const sortedArr = [...a];

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (sortedArr[i] > sortedArr[j]) {
        const temp = sortedArr[i];
        sortedArr[i] = sortedArr[j];
        sortedArr[j] = temp;
        numSwaps++;
      }
    }
  }
  console.log(`Array is sorted in ${numSwaps} swaps.
First Element: ${sortedArr[0]}
Last Element: ${sortedArr[sortedArr.length - 1]}`);
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  const a: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  countSwaps(a);
}
