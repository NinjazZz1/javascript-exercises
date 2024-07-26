const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;;
};

const sum = function (numbers) {
  return numbers.reduce((total, current) => total + current, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, current) => total * current);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (number) {
  if (number === 0) return 1;
  let product = 1;
  for (let i = number; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
