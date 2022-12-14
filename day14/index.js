import { fileToArray } from "../common/utils.js";
export function problem1(data) {
  const input = data.map((item) =>
    item
      .split(" -> ")
      .map((coord) => coord.split(",").map((pos) => parseInt(pos, 10)))
  );
  const max = input.reduce(
    (prev, curr) => {
      const res = curr.reduce(
        (p, c) => [
          [Math.min(p[0][0], c[0]), Math.max(p[0][1], c[0])],
          [Math.min(p[1][0], c[1]), Math.max(p[1][1], c[1])],
        ],
        [
          [Infinity, 0],
          [Infinity, 0],
        ]
      );
      return [
        [Math.min(res[0][0], prev[0][0]), Math.max(res[0][1], prev[0][1])],
        [Math.min(res[1][0], prev[1][0]), Math.max(res[1][1], prev[1][1])],
      ];
    },
    [
      [Infinity, 0],
      [Infinity, 0],
    ]
  );
  var arr = Array.from({ length: max[1][1] + 1 }, () =>
    Array.from({ length: max[0][1] - max[0][0] + 1 }, () => ".")
  );
  input.forEach((row) => {
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i][0] === row[i + 1][0]) {
        // Moving vertically
        for (
          let y = Math.min(row[i][1], row[i + 1][1]);
          y <= Math.max(row[i][1], row[i + 1][1]);
          y++
        ) {
          arr[y][row[i][0] - max[0][0]] = "#";
        }
      } else {
        // Moving horizontally
        for (
          let x = Math.min(row[i][0], row[i + 1][0]) - max[0][0];
          x <= Math.max(row[i][0], row[i + 1][0]) - max[0][0];
          x++
        ) {
          arr[row[i][1]][x] = "#";
        }
      }
    }
  });
  let sandCount = 0;
  mainLoop: while (true) {
    // Drop sand
    let check_index = [0, 500 - max[0][0]];
    while (true) {
      if (
        check_index[1] < 0 ||
        check_index[1] > arr[0].length ||
        check_index[0] > arr.length ||
        arr[0][500 - max[0][0]] === "o"
      ) {
        break mainLoop;
      }
      if (
        arr[check_index[0] + 1]?.[check_index[1]] === "." ||
        arr[check_index[0] + 1]?.[check_index[1]] === undefined
      ) {
        check_index[0] += 1;
      } else if (
        arr[check_index[0] + 1]?.[check_index[1] - 1] === "." ||
        arr[check_index[0] + 1]?.[check_index[1] - 1] === undefined
      ) {
        check_index[0] += 1;
        check_index[1] -= 1;
      } else if (
        arr[check_index[0] + 1]?.[check_index[1] + 1] === "." ||
        arr[check_index[0] + 1]?.[check_index[1] + 1] === undefined
      ) {
        check_index[0] += 1;
        check_index[1] += 1;
      } else {
        arr[check_index[0]][check_index[1]] = "o";
        break;
      }
    }
    sandCount++;
  }
  return sandCount;
}

console.table(problem1(fileToArray("day14/input.txt")));
