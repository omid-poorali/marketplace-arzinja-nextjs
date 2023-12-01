import { generate } from './uuid';

it("should not generate equal id", () => {
    expect(generate()).not.toBe(generate());
});