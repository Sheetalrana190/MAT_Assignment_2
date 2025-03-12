import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
  test.todo("should throw an error when entered area is negative");
  test.todo("should throw an error when entered coveragePerLiter value is negative");
  test.todo("should throw an error when coveragePerLiter value is zero.");
  test.todo("should give correct result for decimal area");
  test.todo("should give correct resultt for decimal coveragePerLiter ");
  //assume we are going to use only A4 size paper: A4 format size is 625 cm²  -the standard format for personal printers
  test.todo("should throw an error if the area value go beyond 625 sq cm standard value");
  
});
