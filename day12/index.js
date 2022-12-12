import { fileToArray } from "../common/utils.js";

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

export function problem1(array) {
  let start;
  let end;
  let input = array.map((item, y) =>
    item.split("").map((char, x) => {
      if (char === "S") {
        start = [y, x];
        return 0;
      } else if (char === "E") {
        end = [y, x];
        return 25;
      }
      return char.codePointAt(0) - 97;
    })
  );
  let visited = input.map((row) => row.map(() => 0));
  let queue = [{ position: start, steps: 0 }];
  while (queue.length) {
    const {
      position: [y, x],
      steps,
    } = queue.shift();
    if (visited[y][x]) {
      continue;
    }
    if (y === end[0] && x === end[1]) {
      return steps;
    }
    directions.forEach(([dx, dy]) => {
      if (
        !(
          input[y + dy]?.[x + dx] === undefined ||
          input[y + dy]?.[x + dx] > input[y][x] + 1 ||
          !!visited[y][x]
        )
      ) {
        queue.push({
          position: [y + dy, x + dx],
          steps: steps + 1,
        });
      }
    });
    visited[y][x] = 1;
  }
}

export function problem2(array) {
  let start = [];
  let end;
  let input = array.map((item, y) =>
    item.split("").map((char, x) => {
      if (char === "a") {
        start.push([y, x]);
        return 0;
      } else if (char === "E") {
        end = [y, x];
        return 25;
      }
      return char.codePointAt(0) - 97;
    })
  );
  let visited = input.map((row) => row.map(() => 0));
  let queue = start.map((item) => ({ position: item, steps: 0 }));
  while (queue.length) {
    const {
      position: [y, x],
      steps,
    } = queue.shift();
    if (visited[y][x]) {
      continue;
    }
    if (y === end[0] && x === end[1]) {
      return steps;
    }
    directions.forEach(([dx, dy]) => {
      if (
        !(
          input[y + dy]?.[x + dx] === undefined ||
          input[y + dy]?.[x + dx] > input[y][x] + 1 ||
          !!visited[y][x]
        )
      ) {
        queue.push({
          position: [y + dy, x + dx],
          steps: steps + 1,
        });
      }
    });
    visited[y][x] = 1;
  }
}

console.log(problem1(fileToArray("day12/input.txt")));
console.log(problem2(fileToArray("day12/input.txt")));
