const { TestScheduler } = require("jest");
const caesar = require("./caesar.js");

test("Word start alphabet", () => {
  expect(caesar(1, "abc")).toBe("bcd");
});

test("Word end alphabet", () => {
  expect(caesar(1, "xyz")).toBe("yza");
});

test("Phrase start alphabet", () => {
  expect(caesar(1, "a b c")).toBe("b c d");
});

test("Phrase end alphabet", () => {
  expect(caesar(1, "x y z")).toBe("y z a");
});
