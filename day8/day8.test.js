import { problem1, problem2, preProcess } from ".";

test("Problem 1 works successfully", () => {
  expect(problem1(preProcess("day8/input.txt"))).toBe(1546);
});

test("Problem 2 works successfully", () => {
  expect(problem2(preProcess("day8/input.txt"))).toBe(519064);
});
