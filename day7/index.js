import { fileToArray } from "../common/utils.js";

function preProcess(array) {
  const fileSystem = { "/": 0 };
  let path = [];
  array.forEach((line) => {
    if (line.startsWith("$ cd")) {
      let command = line.split("$ cd ")[1];
      if (command === "/") {
        path = ["/"];
      } else if (command === "..") {
        path.pop();
      } else {
        path.push(command);
      }
    }
    if (/^\d/.test(line)) {
      path.forEach((_, index) => {
        const currPath = path.slice(0, index + 1).join("/");
        fileSystem[currPath]
          ? (fileSystem[currPath] += parseInt(line.split(" ")[0], 10))
          : (fileSystem[currPath] = parseInt(line.split(" ")[0], 10));
      });
    }
  });
  return fileSystem;
}

export function problem1(array) {
  return Object.values(preProcess(array)).reduce(
    (prev, curr) => (curr <= 100000 ? prev + curr : prev),
    0
  );
}

export function problem2(array) {
  const fileSystem = preProcess(array);
  return Object.values(fileSystem)
    .sort((a, b) => a - b)
    .find((item) => fileSystem["/"] - item <= 40000000);
}

console.log(problem1(fileToArray("day7/input.txt")));
console.log(problem2(fileToArray("day7/input.txt")));
