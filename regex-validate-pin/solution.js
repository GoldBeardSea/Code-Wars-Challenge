function validatePIN (pin) {
  let four = /^[0-9]{4}$/gm.test(pin);
  let six = /^[0-9]{6}$/gm.test(pin);
  if (four || six === true) {
    return true;
  } else {
    return false;
  }
}