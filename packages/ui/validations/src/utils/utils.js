export const getArrayDigitsOfValue = value => Array.from(value, Number);

export const removeSpecialCharacters = value => value.replace(/\D/g, '');

export function calcCheckNumForINN(digitsOfvalue, weights) {
  const checkSum = digitsOfvalue.reduce((sum, digit, i) => sum + digit * weights[i], 0);
  const checkNum = checkSum % 11;

  return checkNum > 9 ? checkNum % 10 : checkNum;
}

export const calcCheckSumForSNILS = digitsOfValue => digitsOfValue
  .slice(0, 9)
  .split('')
  .map(Number)
  .reduce((sum, currentValue, index) => sum + currentValue * (9 - index), 0);