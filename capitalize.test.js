const capitalize = require("./capitalize.js");

test("Capitalize String", () => {
  expect(capitalize("test")).toBe("Test");
});
