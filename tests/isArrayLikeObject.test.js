import isArrayLikeObject from "../src/isArrayLikeObject";

test("Valid array-like object (array)", () => {
    const value = [1, 2, 3];
    expect(isArrayLikeObject(value)).toBe(true);
});

test("Valid array-like object (array of objects)", () => {
    const value = [{}, {}, {}];
    expect(isArrayLikeObject(value)).toBe(true);
});

test("Invalid array-like object (string)", () => {
    const value = "abc";
    expect(isArrayLikeObject(value)).toBe(false);
});

test("Invalid array-like object (function)", () => {
    const value = function() {};
    expect(isArrayLikeObject(value)).toBe(false);
});

test("Invalid array-like object (object of arrays)", () => {
    const value = { a: [1, 2], b: [3, 4] };
    expect(isArrayLikeObject(value)).toBe(false);
});
