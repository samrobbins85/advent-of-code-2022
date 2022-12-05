import { fileToArray } from "../common/utils.js";

export function problem1(data) {
  const result = data.filter((item) => item.includes("[")).reverse();
  const stacks = data[result.length].split("").reduce((prev, curr, index) => {
    curr !== " " &&
      (prev[curr] = result
        .map((item) => item[index])
        .filter((item) => item !== " "));
    return prev;
  }, {});
  data
    .filter((item) => item.includes("move"))
    .map((item) => item.split("move ")[1].split(/\sfrom\s|\sto\s/))
    .forEach(([number, from, to]) => {
      stacks[to] = [
        ...stacks[to],
        ...stacks[from]
          .splice(stacks[from].length - number, stacks[from].length)
          .reverse(),
      ];
    });
  return Object.values(stacks)
    .map((item) => item[item.length - 1])
    .join("");
}

export function problem2(data) {
  const result = data.filter((item) => item.includes("[")).reverse();
  const stacks = data[result.length].split("").reduce((prev, curr, index) => {
    curr !== " " &&
      (prev[curr] = result
        .map((item) => item[index])
        .filter((item) => item !== " "));
    return prev;
  }, {});
  data
    .filter((item) => item.includes("move"))
    .map((item) => item.split("move ")[1].split(/\sfrom\s|\sto\s/))
    .forEach(([number, from, to]) => {
      stacks[to] = [
        ...stacks[to],
        ...stacks[from].splice(
          stacks[from].length - number,
          stacks[from].length
        ),
      ];
    });
  return Object.values(stacks)
    .map((item) => item[item.length - 1])
    .join("");
}

console.log(problem1(fileToArray("day5/input.txt")));
console.log(problem2(fileToArray("day5/input.txt")));
