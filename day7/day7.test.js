import { problem1, problem2 } from ".";
import { fileToArray } from "../common/utils";
test("Problem 1 works successfully", () => {
  expect(problem1(fileToArray("day7/input.txt"))).toBe(1611443);
});

test("Problem 2 works successfully", () => {
  expect(problem2(fileToArray("day7/input.txt"))).toBe(2086088);
});
