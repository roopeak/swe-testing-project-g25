import reduce from "../src/reduce.js";
describe("reduce with an iteratee", () => {
  test("reduces an array of numbers using a sum iteratee", () => {
    const input = [1, 2, 3];
    const result = reduce(input, (acc, n) => acc + n, 0);
  
    expect(result).toBe(6);
  });
  
  test("reduces an array of strings using a concatenation iteratee", () => {
    const input = ["Hello, ", "world", "!"];
    const result = reduce(input, (acc, str) => acc + str, "");
  
    expect(result).toBe("Hello, world!");
  });
});

test("reduces an array of objects to sum a specific property", () => {
  const input = [{ value: 10 }, { value: 20 }, { value: 30 }];
  const result = reduce(input, (acc, obj) => acc + obj.value, 0);

  expect(result).toBe(60);
});

test("reduces an empty array with an initial value", () => {
  const input = [];
  const result = reduce(input, (acc, n) => acc + n, 100);

  expect(result).toBe(100);
});

test("reduces an array without an initial value", () => {
  const input = [5, 10, 15];
  const result = reduce(input, (acc, n) => acc + n);

  expect(result).toBe(30);
});