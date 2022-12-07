import fs from "fs";

export function problem1(path) {
  return fs
    .readFileSync(path)
    .toString()
    .split("")
    .findIndex(
      (_, index, array) =>
        index >= 4 &&
        new Set(array.slice(Math.max(0, index - 4), index)).size === 4
    );
}

export function problem2(path) {
  return fs
    .readFileSync(path)
    .toString()
    .split("")
    .findIndex(
      (_, index, array) =>
        index >= 14 &&
        new Set(array.slice(Math.max(0, index - 14), index)).size === 14
    );
}

console.log(problem1("day6/input.txt"));
console.log(problem2("day6/input.txt"));
