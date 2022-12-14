import { fileToArray } from "../common/utils.js";

const generate_ranges = (input) =>
  input.reduce(
    (prev, curr) => {
      const res = curr.reduce(
        (p, c) => [Math.max(p[0], c[0]), Math.max(p[1], c[1])],
        [0, 0]
      );
      return [Math.max(res[0], prev[0]), Math.max(res[1], prev[1])];
    },
    [0, 0]
  );
function genericProblem(data, part2, condition) {
  const input = data.map((item) =>
    item
      .split(" -> ")
      .map((coord) => coord.split(",").map((pos) => parseInt(pos, 10)))
  );
  const max = generate_ranges(input);
  var arr = Array.from({ length: max[1] + (part2 ? 2 : 1) }, () =>
    Array.from({ length: max[0] * 2 }, () => ".")
  );
  if (part2) arr.push(Array.from({ length: max[0] * 2 }, () => "#"));

  input.forEach((row) => {
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i][0] === row[i + 1][0]) {
        // Moving vertically
        for (
          let y = Math.min(row[i][1], row[i + 1][1]);
          y <= Math.max(row[i][1], row[i + 1][1]);
          y++
        ) {
          arr[y][row[i][0]] = "#";
        }
      } else {
        // Moving horizontally
        for (
          let x = Math.min(row[i][0], row[i + 1][0]);
          x <= Math.max(row[i][0], row[i + 1][0]);
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
    let check_index = [0, 500];
    while (true) {
      if (condition(check_index, arr)) {
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

export const problem1 = (input) =>
  genericProblem(
    input,
    false,
    (check_index, arr) =>
      check_index[1] < 0 ||
      check_index[1] > arr[0].length ||
      check_index[0] > arr.length ||
      arr[0][500] === "o"
  );

export const problem2 = (input) =>
  genericProblem(input, true, (_, arr) => arr[0][500] === "o");

console.log(problem1(fileToArray("day14/input.txt")));
console.log(problem2(fileToArray("day14/input.txt")));
