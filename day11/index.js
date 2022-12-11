import fs from "fs";

const operation = (number, string) =>
  eval(string.replaceAll("old", number.toString()));

export function genericProblem(fileName, size, generateRiskLevel) {
  let input = fs
    .readFileSync(fileName)
    .toString()
    .split("\n\n")
    .map((item) => item.split("\n"))
    .map((item) => ({
      starting: item[1]
        .split(": ")[1]
        .split(", ")
        .map((item) => parseInt(item, 10)),
      testDivisible: parseInt(item[3].split("by ")[1], 10),
      ifTrue: parseInt(item[4].split("monkey ")[1]),
      ifFalse: parseInt(item[5].split("monkey ")[1]),
      operation: item[2].split("= ")[1],
      numberOfItemsInspected: 0,
    }));
  const modulo = input.reduce((prev, curr) => prev * curr.testDivisible, 1);
  for (let i = 0; i < size; i++) {
    input.forEach((monkey) => {
      monkey.numberOfItemsInspected += monkey.starting.length;
      monkey.starting.forEach((item) => {
        const riskLevel = generateRiskLevel(item, monkey.operation, modulo);
        input[
          riskLevel % monkey.testDivisible === 0
            ? monkey.ifTrue
            : monkey.ifFalse
        ].starting.push(riskLevel);
      });
      monkey.starting = [];
    });
  }
  return input
    .map((item) => item.numberOfItemsInspected)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((prev, curr) => prev * curr, 1);
}

export const problem1 = (fileName) =>
  genericProblem(fileName, 20, (item, opString) =>
    Math.floor(operation(item, opString) / 3)
  );

export const problem2 = (fileName) =>
  genericProblem(
    fileName,
    10000,
    (item, opString, modulo) => operation(item, opString) % modulo
  );

console.log(problem1("day11/input.txt"));
console.log(problem2("day11/input.txt"));
