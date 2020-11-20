const reverse = require("./reverse.js");

test("Reverse String", () => {
  expect(reverse("test")).toBe("tset");
});
