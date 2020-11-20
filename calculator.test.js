const calculator = require("./calculator.js");

test("Calc Sum", () => {
  expect(calculator.sum(5, 5)).toBe(10);
});

test("Calc Sub", () => {
  expect(calculator.sub(5, 5)).toBe(0);
});

test("Calc Div", () => {
  expect(calculator.div(5, 5)).toBe(1);
});

test("Calc Mult", () => {
  expect(calculator.mult(5, 5)).toBe(25);
});
