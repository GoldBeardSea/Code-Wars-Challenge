function validateUsr(username) {
  console.log(username);
  let res = /^[a-z0-9_]{4,16}$/gm.test(username);
  return res;
}