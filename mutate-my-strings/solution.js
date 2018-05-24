function mutateMyStrings(stringOne, stringTwo){
  let stringOneSp = stringOne.split('');
  let stringTwoSp = stringTwo.split('');
  let resultArray = [];
  resultArray.push(stringOne + '\n');
  for (let i = 0; i < stringOneSp.length; i++) {
    if (stringOneSp[i] !== stringTwoSp[i]) {
      stringOneSp[i] = stringTwoSp[i];
      resultArray.push(stringOneSp.join('') + '\n');
    }
  }
  return resultArray.join('');
}