import fs from "fs";

export function problem1(path) {
  return fs
    .readFileSync(path)
    .toString()
    .split("")
    .findIndex(
      (_, index, array) =>
        index >= 4 &&
        array.slice(Math.max(0, index - 4), index).length ===
          new Set(array.slice(Math.max(0, index - 4), index)).size
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
        array.slice(Math.max(0, index - 14), index).length ===
          new Set(array.slice(Math.max(0, index - 14), index)).size
    );
}

console.log(problem1("day6/input.txt"));
console.log(problem2("day6/input.txt"));
