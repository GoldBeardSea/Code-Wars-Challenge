function isNice(arr){
  if (arr.length === 0) return false;
  for (let n of arr) {
    if (!arr.includes(n -1) && !arr.includes(n +1)) {
      return false;
    }
  }
  return true;
}