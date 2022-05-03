const sum = require("./index")


describe("A math test", () => {
  it("sum test", () => {
    expect(sum(1, 2)).toBe(3)
  })
})