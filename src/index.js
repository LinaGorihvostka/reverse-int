module.exports = function reverse (n) {
  let reversedString = n.toString().split('').reverse().join('');
  let reversedNumber = parseInt(parseFloat(reversedString));
  return reversedNumber;
}
