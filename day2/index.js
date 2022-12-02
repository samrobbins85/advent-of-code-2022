import { fileToArray } from "../common/utils.js";

const scoremap = {
  X: 1,
  Y: 2,
  Z: 3,
};

export function problem1(array) {
  return array
    .map((item) => item.split(" "))
    .map(([first, second]) => {
      let winningScore = 0;
      if (
        (first === "A" && second === "Y") ||
        (first === "B" && second === "Z") ||
        (first === "C" && second === "X")
      ) {
        //   Win

        winningScore = 6;
      } else if (
        (first === "A" && second === "X") ||
        (first === "B" && second === "Y") ||
        (first === "C" && second === "Z")
      ) {
        // Draw
        winningScore = 3;
      }
      return winningScore + scoremap[second];
    })
    .reduce((a, b) => a + b, 0);
}

const part2 = {
  X: {
    A: 3,
    B: 1,
    C: 2,
  },
  Y: {
    A: 1,
    B: 2,
    C: 3,
  },
  Z: {
    A: 2,
    B: 3,
    C: 1,
  },
};

const scoreMap2 = {
  X: 0,
  Y: 3,
  Z: 6,
};

export function problem2(array) {
  return array
    .map((item) => item.split(" "))
    .map(([first, second]) => part2[second][first] + scoreMap2[second])
    .reduce((a, b) => a + b, 0);
}

console.log(problem2(fileToArray("day2/input.txt")));
