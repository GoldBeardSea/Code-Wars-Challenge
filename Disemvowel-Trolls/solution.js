function disemvowel(str) {
  let newStr = str.replace(/[aeiouAEIOU]/gm, '');
  return newStr;
}

// While the pseudocode detailed a map solution I couldn't get the .map to work for me so I ended up solving with a regex and will refactor later.
