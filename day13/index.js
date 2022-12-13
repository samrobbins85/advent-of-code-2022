import fs from "fs";

function compare([left, right]) {
  if (typeof left === "number" && typeof right === "number") {
    if (left === right) return;
    return left < right;
  }

  if (Array.isArray(left) && Array.isArray(right)) {
    for (let i = 0; i < left.length; i++) {
      if (i < right.length) {
        const result = compare([left[i], right[i]]);
        if (result !== undefined) return result;
      } else {
        return false;
      }
    }
    if (left.length < right.length) return true;
    return;
  }

  return typeof left === "number"
    ? compare([[left], right])
    : compare([left, [right]]);
}

export function problem1(fileName) {
  return fs
    .readFileSync(fileName)
    .toString()
    .split("\n\n")
    .map((item) => item.split("\n").map((item) => JSON.parse(item)))
    .reduce(
      (prev, curr, currIndex) => prev + (compare(curr) ? currIndex + 1 : 0),
      0
    );
}

export function problem2(fileName) {
  const sortedResult = [
    ...fs
      .readFileSync(fileName)
      .toString()
      .split("\n\n")
      .map((item) => item.split("\n").map((item) => JSON.parse(item)))
      .flat(),
    [[2]],
    [[6]],
  ].sort((a, b) => compare([b, a]) - compare([a, b]));
  return (
    (sortedResult.findIndex((item) => item[0]?.[0] === 2) + 1) *
    (sortedResult.findIndex((item) => item[0]?.[0] === 6) + 1)
  );
}

console.log(problem1("day13/input.txt"));
console.log(problem2("day13/input.txt"));
