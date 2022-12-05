import fs from "fs";

export function problem1(path) {
  const data = fs.readFileSync(path).toString().split("\n");
  const result = data.filter((item) => item.includes("[")).reverse();
  const indices = {};
  const stacks = {};
  data[result.length].split("").forEach((element, index) => {
    if (element !== " ") {
      indices[index] = element;
      stacks[element] = [];
    }
  });
  result.forEach((str) => {
    Object.keys(indices).forEach((index) => {
      if (str[index] !== " ") {
        stacks[indices[index]].push(str[index]);
      }
    });
  });
  data
    .filter((item) => item.includes("move"))
    .map((item) =>
      item
        .split("move ")[1]
        .replaceAll(" from ", "$")
        .replaceAll(" to ", "$")
        .split("$")
    )
    .forEach(([number, from, to]) => {
      const removed = stacks[from].splice(
        stacks[from].length - number,
        stacks[from].length
      );
      stacks[to] = [...stacks[to], ...removed.reverse()];
    });
  return Object.values(stacks)
    .map((item) => item[item.length - 1])
    .join("");
}

export function problem2(path) {
  const data = fs.readFileSync(path).toString().split("\n");
  const result = data.filter((item) => item.includes("[")).reverse();
  const indices = {};
  const stacks = {};
  data[result.length].split("").forEach((element, index) => {
    if (element !== " ") {
      indices[index] = element;
      stacks[element] = [];
    }
  });
  result.forEach((str) => {
    Object.keys(indices).forEach((index) => {
      if (str[index] !== " ") {
        stacks[indices[index]].push(str[index]);
      }
    });
  });
  data
    .filter((item) => item.includes("move"))
    .map((item) =>
      item
        .split("move ")[1]
        .replaceAll(" from ", "$")
        .replaceAll(" to ", "$")
        .split("$")
    )
    .forEach(([number, from, to]) => {
      const removed = stacks[from].splice(
        stacks[from].length - number,
        stacks[from].length
      );
      stacks[to] = [...stacks[to], ...removed];
    });
  return Object.values(stacks)
    .map((item) => item[item.length - 1])
    .join("");
}

console.log(problem1("day5/input.txt"));
console.log(problem2("day5/input.txt"));
