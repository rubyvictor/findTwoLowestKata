const sumTwoSmallestNumbers = require("./script");

describe("Function tests", () => {
  it("sumTwoSmallestNumbers([5, 8, 12, 19, 22]) should return 13", () => {
    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toEqual(13);
  });

  it("sumTwoSmallestNumbers([15, 28, 4, 2, 43]) should return 6", () => {
    expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toEqual(6);
  });

  it("sumTwoSmallestNumbers([3, 87, 45, 12, 7]) should return 10", () => {
    expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toEqual(10);
  });

  it("sumTwoSmallestNumbers([23, 71, 33, 82, 1]) should return 24", () => {
    expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toEqual(24);
  });
});
