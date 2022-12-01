import { problem1, problem2, preProcess } from ".";

test("Problem 1 works successfully", () => {
  expect(problem1(preProcess("day1/input.txt"))).toBe(64929);
});

test("Problem 2 works successfully", () => {
  expect(problem2(preProcess("day1/input.txt"))).toBe(193697);
});
