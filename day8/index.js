import { fileToArray } from "../common/utils.js";
export const preProcess = (input) =>
  fileToArray(input).map((item) =>
    item.split("").map((item) => parseInt(item))
  );

export function problem1(input) {
  let count = input[0].length * 2 + (input.length - 2) * 2;
  for (let y = 1; y < input.length - 1; y++)
    for (let x = 1; x < input[1].length - 1; x++) {
      const verticalArr = input.map((item) => item[x]).flat();
      if (
        input[y].slice(0, x).every((tree) => tree < input[y][x]) ||
        input[y].slice(x + 1).every((tree) => tree < input[y][x]) ||
        verticalArr.slice(0, y).every((tree) => tree < input[y][x]) ||
        verticalArr.slice(y + 1).every((tree) => tree < input[y][x])
      ) {
        count += 1;
      }
    }
  return count;
}

function reducerProblem1(input) {
  return input.reduce(
    (prev, curr, y) =>
      prev +
      curr.reduce((p, c, x) => {
        const verticalArr = input.map((item) => item[x]).flat();
        return input[y].slice(0, x).every((t) => t < c) ||
          input[y].slice(x + 1).every((t) => t < c) ||
          verticalArr.slice(0, y).every((t) => t < c) ||
          verticalArr.slice(y + 1).every((t) => t < c)
          ? p + 1
          : p;
      }, 0),
    0
  );
}

const lengthIfNotFound = (array, c) =>
  array.findIndex((t) => t >= c) + 1 || array.length;

export function problem2(input) {
  let maxScore = 0;
  for (let y = 1; y < input.length - 1; y++)
    for (let x = 1; x < input[1].length - 1; x++) {
      const verticalArr = input.map((item) => item[x]).flat();
      const score =
        lengthIfNotFound(input[y].slice(0, x).reverse(), input[y][x]) *
        lengthIfNotFound(input[y].slice(x + 1), input[y][x]) *
        lengthIfNotFound(verticalArr.slice(0, y).reverse(), input[y][x]) *
        lengthIfNotFound(verticalArr.slice(y + 1), input[y][x]);
      maxScore = Math.max(score, maxScore);
    }
  return maxScore;
}

function reducerProblem2(input) {
  return input.reduce(
    (prev, curr, y) =>
      Math.max(
        prev,
        curr.reduce((p, c, x) => {
          const verticalArr = input.map((item) => item[x]).flat();
          return Math.max(
            p,
            lengthIfNotFound(input[y].slice(0, x).reverse(), c) *
              lengthIfNotFound(input[y].slice(x + 1), c) *
              lengthIfNotFound(verticalArr.slice(0, y).reverse(), c) *
              lengthIfNotFound(verticalArr.slice(y + 1), c)
          );
        }),
        0
      ),
    0
  );
}

console.log(problem1(preProcess("day8/exampleInput.txt")));
console.log(reducerProblem1(preProcess("day8/exampleInput.txt")));
console.log(problem2(preProcess("day8/exampleInput.txt")));
console.log(reducerProblem2(preProcess("day8/exampleInput.txt")));
