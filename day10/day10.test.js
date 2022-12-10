import { problem1 } from ".";
import { fileToArray } from "../common/utils";
test("Problem 1 works successfully", () => {
  expect(problem1(fileToArray("day10/input.txt"))).toBe(11820);
});
