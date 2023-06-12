function filterRange(arr, a, b) {
  return (arr.filter(arrElem => {
    if ((arrElem <= b) && (arrElem >= a)) return true
  }));
};
