import compact from "../src/compact";

test("Removes falsey values from the array", () => {
    const array = [0, 1, false, 2, '', 3, null, undefined, NaN];
    console.log(compact(array));
    expect(compact(array)).toEqual([1, 2, 3]);
});

test("Removes all falsey values from an array of only falsey values", () => {
    const array = [0, false, '', null, undefined, NaN];
    expect(compact(array)).toEqual([]);
});

test("Returns the same array if there are no falsey values", () => {
    const array = [1, 2, 3, 4, 5];
    expect(compact(array)).toEqual([1, 2, 3, 4, 5]);
});

test("Handles an empty array", () => {
    const array = [];
    expect(compact(array)).toEqual([]);
});