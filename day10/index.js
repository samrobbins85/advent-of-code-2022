import { fileToArray } from "../common/utils.js";

function genericProblem(array, processor, state) {
  let pendingInstruction = null;
  let X = 1;
  let arrayIndex = 0;
  for (let i = 1; arrayIndex < array.length; i++) {
    processor(i, X, state);
    if (array[arrayIndex] === "noop") {
      arrayIndex++;
    } else if (pendingInstruction) {
      X += parseInt(pendingInstruction.split(" ")[1], 10);
      pendingInstruction = null;
      arrayIndex++;
    } else if (array[arrayIndex] !== "noop") {
      pendingInstruction = array[arrayIndex];
    }
  }
  return state;
}
export const problem1 = (array) =>
  genericProblem(
    array,
    (i, X, state) => !((i - 20) % 40) && (state[0] += X * i),
    [0]
  )[0];

export const problem2 = (array) =>
  genericProblem(
    array,
    (i, X, state) => {
      let virtualI = (i - 1) % 40;
      X >= virtualI - 1 &&
        X <= virtualI + 1 &&
        (state[Math.floor(i / 40)][virtualI] = "#");
    },
    Array(6)
      .fill(null)
      .map(() => Array(40).fill("."))
  );

console.log(problem1(fileToArray("day10/input.txt")));
console.table(problem2(fileToArray("day10/input.txt")));
