import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  });
  test("should throw an error when entered length of Canvas is negative", () => {
    expect(() => calculateCanvasSize("-10", "100")).toThrow("Canvas Length should be possitive");
  });
  test.todo("should throw an error when entered width of Canvas is negative");
  test.todo("should throw an error when entered length of Canvas is zero");
  test.todo("should throw an error when entered width of Canvas is zero");
  test.todo("should give correct result for decimal length");
  test.todo("should give correct resultt for decimal width");
});
