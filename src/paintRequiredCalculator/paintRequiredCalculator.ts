export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  if (area < 0){
    throw new Error("area should be possitive");
}
if (coveragePerLiter < 0){
  throw new Error("coveragePerLiter value should be possitive");
}
  return area / coveragePerLiter;
}
