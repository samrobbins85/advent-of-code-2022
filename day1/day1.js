import { fileToArray } from "../common/utils.js";

const preProcess = (fileName) =>
  fileToArray(fileName).map((item) => parseInt(item, 10));

function problem1(array) {
  const data = {};
  let index = 0;
  array.forEach((item) => {
    if (!item) {
      index += 1;
    } else {
      if (data[index]) {
        data[index].push(item);
      } else {
        data[index] = [item];
      }
    }
  });
  return Math.max(
    ...Object.values(data).map((item) => item.reduce((a, b) => a + b, 0))
  );
}

function problem2(array) {
  const data = {};
  let index = 0;
  array.forEach((item) => {
    if (!item) {
      index += 1;
    } else {
      if (data[index]) {
        data[index].push(item);
      } else {
        data[index] = [item];
      }
    }
  });
  return Object.values(data)
    .map((item) => item.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
}
console.log(problem1(preProcess("day1/input.txt")));
console.log(problem2(preProcess("day1/input.txt")));
