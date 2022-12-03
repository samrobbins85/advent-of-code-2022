import { fileToArray } from "../common/utils.js";

export function problem1(array) {
  return array
    .map((item) =>
      item
        .split("")
        .slice(0, item.length / 2)
        .filter((char) =>
          item.slice(item.length / 2, item.length).includes(char)
        )
        .filter((v, i, a) => a.indexOf(v) === i)
    )
    .flat()
    .map((item) =>
      item.charCodeAt(0) >= 97
        ? item.charCodeAt(0) - 96
        : item.charCodeAt(0) - 38
    )
    .reduce((prev, curr) => prev + curr, 0);
}

export function problem2(array) {
  return Array.from({ length: array.length / 3 }, () => array.splice(0, 3))
    .map((item) => item.map((arr) => arr.split("")))
    .map((item) =>
      item
        .reduce((prev, curr) => prev.filter((char) => curr.includes(char)))
        .filter((v, i, a) => a.indexOf(v) === i)
    )
    .flat()
    .map((item) =>
      item.charCodeAt(0) >= 97
        ? item.charCodeAt(0) - 96
        : item.charCodeAt(0) - 38
    )
    .reduce((prev, curr) => prev + curr, 0);
}

console.log(problem1(fileToArray("day3/input.txt")));
console.log(problem2(fileToArray("day3/input.txt")));
