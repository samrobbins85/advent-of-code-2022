import { fileToArray } from "../common/utils.js";

const directions = {
  L: [-1, 0],
  R: [1, 0],
  U: [0, 1],
  D: [0, -1],
};

export function problem1(array) {
  return genericProblem(2, array);
}

export function problem2(array) {
  return genericProblem(10, array);
}

function genericProblem(knots, input) {
  let rope = Array.from({ length: knots }, () => [0, 0]);
  let visited = new Set();
  input
    .map((item) => item.split(" "))
    .forEach(([dir, steps]) => {
      for (let i = 0; i < steps; i++) {
        rope[0] = rope[0].map(
          (value, coordinate) => value + directions[dir][coordinate]
        );
        rope.slice(1).forEach((item, index) => {
          rope[index].some(
            (value, coordinate) =>
              Math.abs(value - rope[index + 1][coordinate]) > 1
          ) &&
            (rope[index + 1] = item.map(
              (value, coordinate) =>
                value + Math.sign(rope[index][coordinate] - value)
            ));
        });
        visited.add([...rope].pop().join(","));
      }
    });
  return visited.size;
}

console.log(problem1(fileToArray("day9/input.txt")));
console.log(problem2(fileToArray("day9/input.txt")));
