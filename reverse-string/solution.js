function solution(str){
  let result = [];
  for (let i in str) {
    result.unshift(str[i]);
  }
  return result.join('');
}

function solution(str){
  let splitStr = str.split('');
  let i = splitStr.length;
  let strArray = [];
  while (i > 0) {
    strArray.push(splitStr[i-1]);
    i--;
  }
  return strArray.join('');
}