import { fileToArray } from "../common/utils.js";
import fs from "fs";
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

// Method inspired by Andrew Roberts https://github.com/andrew-cybsafe

function shortPreProcess(fileName) {
  return fs
    .readFileSync(fileName)
    .toString()
    .split("\n\n")
    .map((item) => item.split("\n").map((item) => parseInt(item, 10)))
    .map((item) => item.reduce((a, b) => a + b, 0));
}
const shortProblem1 = (fileName) => Math.max(...shortPreProcess(fileName));

function shortProblem2(fileName) {
  return shortPreProcess(fileName)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
}

console.log(problem1(preProcess("day1/exampleInput.txt")));
console.log(problem2(preProcess("day1/exampleInput.txt")));
console.log(shortProblem1("day1/exampleInput.txt"));
console.log(shortProblem2("day1/exampleInput.txt"));
