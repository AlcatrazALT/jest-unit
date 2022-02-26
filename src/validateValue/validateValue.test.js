const validateValue = require('./validateValue');

describe('validate value', () => {
  test('correct value', () => {
    expect(validateValue(50)).toBe(true);
  })

  test('less value', () => {
    expect(validateValue(-1)).toBe(false);
  })

  test('more value', () => {
    expect(validateValue(101)).toBe(false);
  })

  test('lower bound value', () => {
    expect(validateValue(0)).toBe(true);
  })

  test('top bound value', () => {
    expect(validateValue(100)).toBe(true);
  })
})
