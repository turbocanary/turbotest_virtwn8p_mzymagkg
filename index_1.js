function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var randomArray = new Uint32Array(1);
  crypto.getRandomValues(randomArray);
  var suffix = randomArray[0] * Math.pow(2, -32);
  var password = "sssAAAA" + suffix;
  return password;
}