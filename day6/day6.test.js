import { problem1, problem2 } from ".";
test("Problem 1 works successfully", () => {
  expect(problem1("day6/input.txt")).toBe(1723);
});

test("Problem 2 works successfully", () => {
  expect(problem2("day6/input.txt")).toBe(3708);
});
