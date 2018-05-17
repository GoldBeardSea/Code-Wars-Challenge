var gimme = function (inputArray) {
  let sortedArray = inputArray.slice(0);
  let midArray = sortedArray.sort((a,b) => {return a-b;})[1];
  return inputArray.indexOf(midArray);
};