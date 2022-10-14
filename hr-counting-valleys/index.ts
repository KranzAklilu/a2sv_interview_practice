/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps: number, path: string): number {
  // Write your code here
  let output = 0;
  let tracker = 0;
  let aboveSeaLevel = true;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      tracker++;
    }
    if (path[i] === "D") {
      tracker--;
    }
    if (tracker === -1 && aboveSeaLevel) {
      output++;
    }
    if (tracker < 0) {
      aboveSeaLevel = false;
    } else {
      aboveSeaLevel = true;
    }
  }

  return output;
}
countingValleys(8, "UDDDUDUU");
