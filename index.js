const brn = require('brn');

const T = function() {
  return true;
};
const F = function() {
  return false;
};

module.exports = function negate(predicate) {
  return brn(predicate, F, T);
};
