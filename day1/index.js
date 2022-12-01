import { fileToArray } from "../common/utils.js";

export const preProcess = (fileName) =>
  fileToArray(fileName).map((item) => parseInt(item, 10));

export function problem1(array) {
  return Math.max(
    ...array
      .reduce(
        (curr, next) => {
          !next ? curr.push([]) : curr[curr.length - 1].push(next);
          return curr;
        },
        [[]]
      )
      .map((item) => item.reduce((a, b) => a + b, 0))
  );
}

export function problem2(array) {
  return array
    .reduce(
      (curr, next) => {
        !next ? curr.push([]) : curr[curr.length - 1].push(next);
        return curr;
      },
      [[]]
    )
    .map((item) => item.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
}
console.log(problem1(preProcess("day1/exampleInput.txt")));
console.log(problem2(preProcess("day1/exampleInput.txt")));
