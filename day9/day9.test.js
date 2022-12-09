import { problem1, problem2 } from ".";
import { fileToArray } from "../common/utils";
test("Problem 1 works successfully", () => {
  expect(problem1(fileToArray("day9/input.txt"))).toBe(5683);
});

test("Problem 2 works successfully", () => {
  expect(problem2(fileToArray("day9/input.txt"))).toBe(2372);
});
