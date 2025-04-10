const l = require("lodash");

const fn = (arr) => {
  return l.flatten(arr);
};

const ultimo = (arr) => {
  return l.last(arr);
};

module.exports = { fn, ult: ultimo };
