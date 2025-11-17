import capitalize from '../src/capitalize.js'

test("capitalizes a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});