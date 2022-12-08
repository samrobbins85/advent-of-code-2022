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

const scoreNormalise = (score, array) =>
  score != -1 ? score + 1 : array.length;

export function problem2(input) {
  let maxScore = 0;
  for (let y = 1; y < input.length - 1; y++)
    for (let x = 1; x < input[1].length - 1; x++) {
      const verticalArr = input.map((item) => item[x]).flat();
      const score =
        scoreNormalise(
          input[y]
            .slice(0, x)
            .reverse()
            .findIndex((tree) => tree >= input[y][x]),
          input[y].slice(0, x)
        ) *
        scoreNormalise(
          input[y].slice(x + 1).findIndex((tree) => tree >= input[y][x]),
          input[y].slice(x + 1)
        ) *
        scoreNormalise(
          verticalArr
            .slice(0, y)
            .reverse()
            .findIndex((tree) => tree >= input[y][x]),
          verticalArr.slice(0, y)
        ) *
        scoreNormalise(
          verticalArr.slice(y + 1).findIndex((tree) => tree >= input[y][x]),
          verticalArr.slice(y + 1)
        );

      score > maxScore && (maxScore = score);
    }
  return maxScore;
}

console.log(problem1(preProcess("day8/input.txt")));
console.log(problem2(preProcess("day8/input.txt")));
