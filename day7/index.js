import { fileToArray } from "../common/utils.js";
export function problem1(array) {
  const fileSystem = {};
  let path = [];
  array.forEach((line) => {
    if (line.startsWith("$")) {
      let command = line.split("$ ")[1];
      if (command === "cd /") {
        path = ["/"];
      } else if (command === "cd ..") {
        path.pop();
      } else if (command.startsWith("cd")) {
        path.push(command.split("cd ")[1]);
        fileSystem[path.join("/")] = 0;
      }
    }
    if (/^\d/.test(line)) {
      path.forEach((_, index) => {
        fileSystem[path.slice(0, index + 1).join("/")] += parseInt(
          line.split(" ")[0],
          10
        );
      });
    }
  });
  return Object.values(fileSystem).reduce(
    (prev, curr) => (curr <= 100000 ? prev + curr : prev),
    0
  );
}

export function problem2(array) {
  const fileSystem = { "/": 0 };
  let path = [];
  array.forEach((line) => {
    if (line.startsWith("$")) {
      let command = line.split("$ ")[1];
      if (command === "cd /") {
        path = ["/"];
      } else if (command === "cd ..") {
        path.pop();
      } else if (command.startsWith("cd")) {
        path.push(command.split("cd ")[1]);
        fileSystem[path.join("/")] = 0;
      }
    }
    if (/^\d/.test(line)) {
      path.forEach((_, index) => {
        fileSystem[path.slice(0, index + 1).join("/")] += parseInt(
          line.split(" ")[0],
          10
        );
      });
    }
  });
  return Object.values(fileSystem)
    .sort((a, b) => a - b)
    .find((item) => fileSystem["/"] - item <= 40000000);
}

console.log(problem1(fileToArray("day7/input.txt")));
console.log(problem2(fileToArray("day7/input.txt")));
