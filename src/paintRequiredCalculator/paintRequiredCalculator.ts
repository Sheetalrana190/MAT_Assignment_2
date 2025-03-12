export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  if (area < 0){
    throw new Error("area should be possitive");
}
if (area == 0){
  throw new Error("area should not be zero");
}
if (area > 625){
  throw new Error("area should not be more then 625");
}
if (coveragePerLiter < 0){
  throw new Error("coveragePerLiter value should be possitive");
}

if (coveragePerLiter == 0){
  throw new Error("coveragePerLiter should not be zero");
}

  return area / coveragePerLiter;
}
