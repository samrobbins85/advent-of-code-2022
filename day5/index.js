import { fileToArray } from "../common/utils.js";

export function genericProblem(data, process) {
  const result = data.filter((item) => item.includes("[")).reverse();
  const stacks = data[result.length].split("").reduce((prev, curr, index) => {
    curr !== " " &&
      (prev[curr] = result
        .map((item) => item[index])
        .filter((item) => item !== " "));
    return prev;
  }, {});
  process(
    data
      .filter((item) => item.includes("move"))
      .map((item) => item.split("move ")[1].split(/\sfrom\s|\sto\s/)),
    stacks
  );
  return Object.values(stacks)
    .map((item) => item[item.length - 1])
    .join("");
}

export const problem1 = (data) =>
  genericProblem(data, (data, stacks) =>
    data.forEach(([number, from, to]) => {
      stacks[to] = [
        ...stacks[to],
        ...stacks[from]
          .splice(stacks[from].length - number, stacks[from].length)
          .reverse(),
      ];
    })
  );

export const problem2 = (data) =>
  genericProblem(data, (data, stacks) =>
    data.forEach(([number, from, to]) => {
      stacks[to] = [
        ...stacks[to],
        ...stacks[from].splice(
          stacks[from].length - number,
          stacks[from].length
        ),
      ];
    })
  );

console.log(problem1(fileToArray("day5/input.txt")));
console.log(problem2(fileToArray("day5/input.txt")));
