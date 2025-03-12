export default function calculateCanvasSize(
  length: string,
  width: string
) {
  if (parseInt(length) < 0){
    throw new Error("Canvas Length should be possitive");
  }
  if (parseInt(width) < 0){
    throw new Error("Canvas Length should be possitive");
  }
  return parseInt(length) * parseInt(width);
  
}
