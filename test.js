const sum = require("./index")

describe("simple math test", () => {
  it("sum test", () => {
    expect(sum(1, 2)).toBe(3)
  })
})