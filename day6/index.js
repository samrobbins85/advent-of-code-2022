import fs from "fs";

const genericProblem = (path, size) =>
  fs
    .readFileSync(path)
    .toString()
    .split("")
    .findIndex(
      (_, index, array) =>
        index >= size &&
        new Set(array.slice(Math.max(0, index - size), index)).size === size
    );

export const problem1 = (path) => genericProblem(path, 4);
export const problem2 = (path) => genericProblem(path, 14);

console.log(problem1("day6/input.txt"));
console.log(problem2("day6/input.txt"));
