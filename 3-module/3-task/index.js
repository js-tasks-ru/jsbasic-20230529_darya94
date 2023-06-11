function camelize(str) {
  splitedArr = str.split('-');
  firstElem = splitedArr[0];
  return firstElem + splitedArr
    .slice(1)
    .map((elem) => {
    let firstLetter = elem[0].toUpperCase();
    let newElem = firstLetter;
    for (i = 1; i < elem.length; i++) {
      newElem += elem[i];
    };
    return newElem
  })
    .join('')
}
