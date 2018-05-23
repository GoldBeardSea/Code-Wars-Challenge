function high(x){
  let splitString = x.split(' ');
  let maxVal = 0;
  let maxString = '';
  for(let i = 0; i < splitString.length; i++){
    let val = 0;
    for(let j = 0; j < splitString[i].length; j++){
      val += (splitString[i].charCodeAt(j) - 96);
    }
    if(val > maxVal){
      maxVal = val;
      maxString = splitString[i];
    }
  }
  return maxString;
}