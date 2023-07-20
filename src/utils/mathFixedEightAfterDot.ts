function fixNumber(num: number | undefined): string {
  if (num === undefined) return 'Error';
  if (Math.abs(num) >= 1e9 || (Math.abs(num) < 1e-8 && Math.abs(num) !== 0)) {
    return num.toExponential(0).replace(/\.?0+e/, 'e');
  }

  // Округление до 9 цифр в сумме
  const numStr = num.toString();
  let integerPart = '';
  let decimalPart = '';

  if (numStr.includes('.')) {
    [integerPart, decimalPart] = numStr.split('.');
    decimalPart = decimalPart.slice(0, 9 - integerPart.length);
  } else {
    integerPart = numStr.slice(0, 9);
  }

  // Удаление незначащих нулей после запятой
  while (decimalPart.endsWith('0')) {
    decimalPart = decimalPart.slice(0, decimalPart.length - 1);
  }

  // Сборка окончательного числа
  let formattedNum = integerPart;
  if (decimalPart) {
    formattedNum += '.' + decimalPart;
  }

  return formattedNum;
}

export default fixNumber;