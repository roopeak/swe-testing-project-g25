import clamp from "../src/clamp.js";

test("clamps a number that is below the lower bound", () => {
  const result = clamp(-10, -5, 5);
  expect(result).toBe(-5);
});

test("clamps a number that is above the upper bound", () => {
  const result = clamp(10, -5, 5);
  expect(result).toBe(5);
});

