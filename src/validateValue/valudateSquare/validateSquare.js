const validateSquare = (value) => {
  if (value === 1) {
    return value;
  }

  return Math.pow(value, 2);
}

module.exports = validateSquare;
