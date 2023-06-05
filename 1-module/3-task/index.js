function ucFirst(str) {
  if (str.length == 0) return '';
  let firstLetter = str[0].toUpperCase();
  let newStr = firstLetter;
  for (i = 1; i < str.length; i++){
     newStr = newStr + str[i];
  }
  return newStr;
}
