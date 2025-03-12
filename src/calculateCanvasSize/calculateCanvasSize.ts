export default function calculateCanvasSize(
  length: string,
  width: string
) {
  if (parseInt(length) < 0){
    throw new Error("Canvas Length should be possitive");
  }
  if (parseInt(length) == 0){
    throw new Error("Length should not be zero");
  }
  if (parseInt(width) < 0){
    throw new Error("Canvas width should be possitive");
  }
  if (parseInt(width) == 0){
    throw new Error("width should not be zero");
  }
  return parseInt(length) * parseInt(width);
 
  
}
