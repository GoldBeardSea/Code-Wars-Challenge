function insertDash(num) {
  let s = num.toString();
  let r = s.replace(/([13579])([13579])/g, '$1-$2');
  r = r.replace(/([13579])([13579])/g, '$1-$2');
  return r;
}

// Needs to be refactored with a while



function insertDash(num) {
  let numStr = num.toString();
  let i = 0;
  let resStr = '';
  while (numStr[i]) {
    resStr += numStr[i];
    if (numStr[i] % 2) { //digit is odd
      if (numStr[i+1] && numStr[i+1] % 2) resStr += '-';
    }
    i++;
  }
  return resStr;
}