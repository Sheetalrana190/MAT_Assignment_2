import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
  test("should throw an error when entered area is negative", () => {
      expect(() => paintRequiredCalculator(-50, 10)).toThrow("area should be possitive");
    });
  test("should throw an error when entered coveragePerLiter value is negative", () => {
      expect(() => paintRequiredCalculator(50, -10)).toThrow("coveragePerLiter value should be possitive");
    });
  test("should throw an error when entered area is zero", () => {
    expect(() => paintRequiredCalculator(0, 10)).toThrow("area should not be zero");
  });
  test("should throw an error when coveragePerLiter value is zero.", () => {
    expect(() => paintRequiredCalculator(50, 0)).toThrow("coveragePerLiter should not be zero");
  });
  test("should give correct result for decimal area", () => {
    expect(() => paintRequiredCalculator(50.5, 10)).toEqual(5.05);
  });
  test("should give correct resultt for decimal coveragePerLiter ", () => {
    expect(() => paintRequiredCalculator(50, 10.5)).toEqual(4.76);
  });
  //assume we are going to use only A4 size paper: A4 format size is 625 cm²  -the standard format for personal printers
  test("should throw an error if the area value go beyond 625 sq cm standard value", () => {
    expect(() => paintRequiredCalculator(626, 10)).toThrow("area should not be more then 625");
  });
  
});
