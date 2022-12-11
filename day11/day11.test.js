import { problem1, problem2 } from ".";
test("Problem 1 works successfully", () => {
  expect(problem1("day11/input.txt")).toBe(50830);
});

test("Problem 2 works successfully", () => {
  expect(problem2("day11/input.txt")).toBe(14399640002);
});
