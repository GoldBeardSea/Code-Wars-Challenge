var capitalize = function(s, arr) {
  let splitS = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > splitS.length) {continue;}
    splitS.splice(arr[i], 1, splitS[arr[i]].toUpperCase());
  }
  return splitS.join('');
};