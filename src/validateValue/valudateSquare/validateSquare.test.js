const validateSquare = require('./validateSquare');

describe('validate square', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('use spyMathPow with 2', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    validateSquare(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test('use spyMathPow with 1', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    validateSquare(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });
});
