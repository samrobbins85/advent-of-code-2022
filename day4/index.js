import { fileToArray } from "../common/utils.js";

const preProcess = (array) =>
  array.map((item) =>
    item
      .split(",")
      .map((item) => item.split("-").map((item) => parseInt(item, 10)))
  );

export function problem1(array) {
  return preProcess(array).filter(
    ([[first_start, first_end], [second_start, second_end]]) =>
      (first_start <= second_start && first_end >= second_end) ||
      (first_start >= second_start && first_end <= second_end)
  ).length;
}

export function problem2(array) {
  return preProcess(array).filter(
    ([[first_start, first_end], [second_start, second_end]]) =>
      (second_start >= first_start && second_start <= first_end) ||
      (second_end >= first_start && second_end <= first_end) ||
      (first_start >= second_start && first_start <= second_end) ||
      (first_end >= second_start && first_end <= second_end)
  ).length;
}

console.log(problem1(fileToArray("day4/input.txt")));
console.log(problem2(fileToArray("day4/input.txt")));
