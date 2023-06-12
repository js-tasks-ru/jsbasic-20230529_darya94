function getMinMax(str) {
  str = str.split(' ')
           .map((value) => Number(value))
           .filter((value) => !isNaN(value))
  let minValue = Math.min(...str);
  let maxValue = Math.max(...str);
  let finalObj = {
    min: minValue,
    max: maxValue,
  }
  return finalObj
}
