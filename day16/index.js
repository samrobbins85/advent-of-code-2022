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
  // Get shortest paths
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
  let routes = [];
  function move(node, visited, timeRemaining) {
    const options = unstuck
      .map((item) => item.valve)
      .filter((item) => !visited.includes(item));
    if (visited.length === unstuck.length + 1) {
      routes.push(visited);
    } else {
      options.forEach((valve) => {
        if (timeRemaining - paths[node][valve] < 0) {
          routes.push(visited);
        } else {
          move(valve, [...visited, valve], timeRemaining - paths[node][valve]);
        }
      });
    }
  }
  move("AA", ["AA"], 30);
  return routes
    .map(
      (route) =>
        route.reduce(
          (prev, curr, i, arr) => {
            if (i === 0) return prev;
            const minute = prev.minute + paths[arr[i - 1]][curr] + 1;
            return {
              pressure:
                prev.pressure +
                input.find((i) => i.valve === curr).flow * (30 - minute),
              minute,
            };
          },
          { pressure: 0, minute: 0 }
        ).pressure
    )
    .sort((a, b) => b - a)[0];
}

console.log(problem1(fileToArray("day16/input.txt")));
