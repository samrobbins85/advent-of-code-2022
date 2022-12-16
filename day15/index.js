import { fileToArray } from "../common/utils.js";

function problem1(array) {
  const height = 10;
  const input = array.map((item) =>
    [...item.matchAll(/\d+/g)].map((i) => parseInt(i[0], 10))
  );
  //   const beaconOnRow = input.filter((item) => item[3] === 10).length;
  const beaconOnRow = new Set();
  input.forEach((item) => {
    if (item[3] === height) {
      beaconOnRow.add(item[2]);
    }
  });
  const max = Math.max(
    ...input
      .map(
        (item) =>
          item[0] + (Math.abs(item[0] - item[2]) + Math.abs(item[1] - item[3]))
      )
      .flat()
  );
  const min = Math.min(
    ...input.map(
      (item) =>
        item[0] - (Math.abs(item[0] - item[2]) + Math.abs(item[1] - item[3]))
    )
  );
  console.log(min);
  console.log(max);
  const processed = array
    .map((item) => [...item.matchAll(/\d+/g)].map((i) => parseInt(i[0], 10)))
    .map((item) => ({
      sensor: [item[0], item[1]],
      beacon: [item[2], item[3]],
      radius: Math.abs(item[0] - item[2]) + Math.abs(item[1] - item[3]),
      distanceScanned: Math.sqrt(
        Math.abs(item[0] - item[2]) ** 2 + Math.abs(item[1] - item[3]) ** 2
      ),
    }));
  // .filter((item) => Math.abs(item.sensor[1] - height) <= item.radius);
  // .filter((item) =>
  //   item.sensor[1] <= height
  //     ? item.sensor[1] + item.distanceScanned >= height
  //     : item.sensor[1] - item.distanceScanned <= height
  // );
  let count = 0;
  for (let i = Math.floor(min); i < Math.ceil(max); i++) {
    // For each cell
    if (
      processed.some((item) => {
        return (
          Math.abs(item.sensor[0] - height) + Math.abs(item.sensor[1] - i) <
          item.radius
        );
      })
    ) {
      count++;
    }
  }
  return count - beaconOnRow.size;
}

console.log(problem1(fileToArray("day15/input.txt")));
// Too low
