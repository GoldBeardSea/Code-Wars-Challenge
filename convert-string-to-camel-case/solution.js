function toCamelCase(str){
  if (str === '') {
    return str;
  } else {
    let strArray = str.split(/_|-/g);
    let i = 1;
    while (i < strArray.length) {
      strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
      //  strArray[2] = strArray[2][0].toUpperCase() + strArray[2].slice(1);
      console.log(strArray);
      i++;
    }
    strArray.join('');
    return strArray;
  }
}