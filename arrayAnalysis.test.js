const { TestScheduler } = require("jest");
const arrayAnalysis = require("./arrayAnalysis.js");

test("Array Analysis", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
