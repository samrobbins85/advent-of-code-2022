import { problem1, problem2 } from ".";
import { fileToArray } from "../common/utils";
test("Problem 1 works successfully", () => {
  expect(problem1(fileToArray("day2/input.txt"))).toBe(8392);
});

test("Problem 2 works successfully", () => {
  expect(problem2(fileToArray("day2/input.txt"))).toBe(10116);
});
