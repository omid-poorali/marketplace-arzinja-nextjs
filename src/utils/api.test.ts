import { createQueryString } from './api';

it("should convert object to the query string", () => {
    expect(createQueryString({ a: "a" })).toBe("?a=a")
});