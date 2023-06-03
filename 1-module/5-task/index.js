function truncate(str, maxlength) {
  let cutStr;
  if (str.length > maxlength){
      cutStr = str.substr( 0, (maxlength-1)) + "…";
    return cutStr;
    }
  return str;
}
