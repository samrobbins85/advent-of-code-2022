import { fileToArray } from "../common/utils.js";

const postProcess = (array) =>
  array
    .flat()
    .map((item) =>
      item.charCodeAt(0) >= 97
        ? item.charCodeAt(0) - 96
        : item.charCodeAt(0) - 38
    )
    .reduce((prev, curr) => prev + curr, 0);

export function problem1(array) {
  return postProcess(
    array.map((item) =>
      item
        .split("")
        .slice(0, item.length / 2)
        .filter((char) =>
          item.slice(item.length / 2, item.length).includes(char)
        )
        .filter((v, i, a) => a.indexOf(v) === i)
    )
  );
}

export function problem2(array) {
  return postProcess(
    Array.from({ length: array.length / 3 }, () => array.splice(0, 3))
      .map((item) => item.map((arr) => arr.split("")))
      .map((item) =>
        item
          .reduce((prev, curr) => prev.filter((char) => curr.includes(char)))
          .filter((v, i, a) => a.indexOf(v) === i)
      )
  );
}

console.log(problem1(fileToArray("day3/input.txt")));
console.log(problem2(fileToArray("day3/input.txt")));
