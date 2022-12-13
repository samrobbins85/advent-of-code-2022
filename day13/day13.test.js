import { problem1, problem2 } from ".";
test("Problem 1 works successfully", () => {
  expect(problem1("day13/input.txt")).toBe(5340);
});

test("Problem 2 works successfully", () => {
  expect(problem2("day13/input.txt")).toBe(21276);
});
