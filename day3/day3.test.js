import { problem1, problem2 } from ".";
import { fileToArray } from "../common/utils";
test("Problem 1 works successfully", () => {
  expect(problem1(fileToArray("day3/input.txt"))).toBe(7845);
});

test("Problem 2 works successfully", () => {
  expect(problem2(fileToArray("day3/input.txt"))).toBe(2790);
});
