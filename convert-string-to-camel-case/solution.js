function toCamelCase(str){
  if (str === '') {
    return str;
  } else {
    let strArray = str.split(/_|-/g);
    let i = 1;
    while (i < strArray.length) {
      strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
      console.log(strArray);
      i++;
    }
    strArray = strArray.join('');
    return strArray;
  }
}