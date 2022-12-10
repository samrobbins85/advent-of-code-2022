import { fileToArray } from "../common/utils.js";

export function problem1(array) {
  let pendingInstruction = null;
  let X = 1;
  let counter = 0;
  let arrayIndex = 0;
  for (let i = 1; arrayIndex < array.length; i++) {
    if ((i - 20) % 40 === 0) {
      counter += X * i;
    }
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
  return counter;
}

function problem2(array) {
  let pendingInstruction = null;
  let X = 1;
  let arrayIndex = 0;
  let screen = Array(6)
    .fill(null)
    .map(() => Array(40).fill("."));
  for (let i = 1; arrayIndex < array.length; i++) {
    let virtualI = (i - 1) % 40;
    if (X + 1 === virtualI || X - 1 === virtualI || X === virtualI) {
      screen[Math.floor(i / 40)][virtualI] = "#";
    }
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
  return screen;
}

console.log(problem1(fileToArray("day10/input.txt")));
console.table(problem2(fileToArray("day10/input.txt")));
