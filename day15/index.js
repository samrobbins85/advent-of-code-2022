import { fileToArray } from "../common/utils.js";

function manhattanDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

export function problem1(array) {
  const height = 2000000;
  const input = array.map((item) =>
    [...item.matchAll(/-?\d+/g)].map((i) => parseInt(i[0], 10))
  );
  let notBeacon = new Set();
  input.forEach((data) => {
    const mDist = manhattanDistance(...data);
    const yFromSensor = Math.abs(data[1] - height);
    for (
      let i = data[0] - mDist + yFromSensor;
      i < data[0] + mDist - yFromSensor;
      i++
    ) {
      notBeacon.add(i);
    }
  });
  return notBeacon.size;
}

export function problem2(array) {
  const bound = 4000000;
  const input = array.map((item) =>
    [...item.matchAll(/-?\d+/g)].map((i) => parseInt(i[0], 10))
  );
  const processed = input.map((item) => ({
    x: item[0],
    y: item[1],
    mDist: manhattanDistance(...item),
  }));
  // With positive gradient
  const posYInt = new Set();
  // With negative gradient
  const negYInt = new Set();
  processed.forEach(({ x, y, mDist }) => {
    posYInt.add(y - x + mDist + 1);
    posYInt.add(y - x - mDist - 1);
    negYInt.add(y + x + mDist + 1);
    negYInt.add(y + x - mDist - 1);
  });
  let result = 0;
  posYInt.forEach((pIntercept) => {
    negYInt.forEach((nIntercept) => {
      const intersection = [
        Math.floor((nIntercept - pIntercept) / 2),
        Math.floor((nIntercept + pIntercept) / 2),
      ];
      if (
        intersection[0] < bound &&
        intersection[0] > 0 &&
        intersection[1] < bound &&
        intersection[1] > 0 &&
        processed.every(
          (scanner) =>
            manhattanDistance(...intersection, scanner.x, scanner.y) >
            scanner.mDist
        )
      ) {
        result = bound * intersection[0] + intersection[1];
      }
    });
  });
  return result;
}

console.log(problem1(fileToArray("day15/input.txt")));
console.log(problem2(fileToArray("day15/input.txt")));
