import { numberWithCommas } from './string';

it("should includes comma for the 4 digit number", () => {
    expect(numberWithCommas("1000")).toBe("1,000");
});

it("should includes comma for the 5 digit number", () => {
    expect(numberWithCommas("10000")).toBe("10,000");
});

it("should includes comma for the 6 digit number", () => {
    expect(numberWithCommas("100000")).toBe("100,000");
});

it("should includes comma for the 7 digit number", () => {
    expect(numberWithCommas("1000000")).toBe("1,000,000");
});