import { problem1, problem2 } from ".";
import { fileToArray } from "../common/utils";
test("Problem 1 works successfully", () => {
  expect(problem1(fileToArray("day15/input.txt"))).toBe(4951427);
});

test("Problem 2 works successfully", () => {
  expect(problem2(fileToArray("day15/input.txt"))).toBe(13029714573243);
});
