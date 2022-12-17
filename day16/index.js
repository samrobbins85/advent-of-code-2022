import { fileToArray } from "../common/utils.js";

function problem1(array) {
  const input = array
    .map((item) => [...item.matchAll(/-?\d+|\s[A-Z]+/g)].map((i) => i[0]))
    .map((item) => ({
      valve: item[0].replace(/\s/g, ""),
      flow: parseInt(item[1], 10),
      tunnels: item.slice(2).map((item) => item.replace(/\s/g, "")),
    }));
  console.log(input);
  const unstuck = input.filter((item) => item.flow > 0);
  const paths = {};
  // Initialise paths
  input.forEach((i) => {
    paths[i.valve] = {};
    input.forEach((j) => {
      if (i.valve !== j.valve) {
        paths[i.valve][j.valve] = i.tunnels.includes(j.valve) ? 1 : Infinity;
      } else {
        paths[i.valve][i.valve] = 0;
      }
    });
  });
  console.log(paths);
  input.forEach((i) => {
    input.forEach((j) => {
      input.forEach((k) => {
        paths[i.valve][j.valve] = Math.min(
          paths[i.valve][j.valve],
          paths[i.valve][k.valve] + paths[k.valve][j.valve]
        );
      });
    });
  });
  console.log(paths);
}

console.log(problem1(fileToArray("day16/exampleInput.txt")));
