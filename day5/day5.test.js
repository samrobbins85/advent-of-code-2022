import { problem1, problem2 } from ".";
test("Problem 1 works successfully", () => {
  expect(problem1("day5/input.txt")).toBe("BWNCQRMDB");
});

test("Problem 2 works successfully", () => {
  expect(problem2("day5/input.txt")).toBe("NHWZCBNBF");
});
