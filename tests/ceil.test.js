import ceil from '../src/ceil.js'

describe("Rounding up with different precisions", () => {
    test("Precision not specified", () => {
        expect(ceil(4.006)).toBe(5);
    });

    test("Rounding up with two decimal precision", () => {
        expect(ceil(6.004, 2)).toBe(6.01);
    });

    test("Rounding up to the next hundred", () => {
        expect(ceil(6040, -2)).toBe(6100);
    });
});

describe("Rounding up very small and negative numbers", () => {
    test("Rounding up extremely small number", () => {
        expect(ceil(0.0000001, 6)).toBe(0.000001);
    });

    test("Attempting to round up zero", () => {
        expect(ceil(0, 2)).toBe(0);
    });

    test("Rounding up negative number", () => {
        expect(ceil(-4.2)).toBe(-4);
    });
})

describe("Invalid and unexpected inputs", () => {
    test("Non-numeric string returns NaN", () => {
        expect(ceil('abc')).toBeNaN();
    });

    test("NaN input returns NaN", () => {
        expect(ceil(NaN)).toBeNaN();
    });

    test("Infinity values are preserved", () => {
        expect(ceil(Infinity)).toBe(Infinity);
        expect(ceil(-Infinity)).toBe(-Infinity);
    });
});