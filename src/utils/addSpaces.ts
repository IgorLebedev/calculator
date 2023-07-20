const addSpaces = (input: string): string => {
  const [integer, fraction] = input.split(',');
  if (integer.length < 4) {
    return input;
  }
  console.log(integer, fraction);
  const result = integer.split('').reduceRight((acc, symbol, index) => {
    if ((integer.length - index) % 3 === 0) {
      acc = ` ${symbol}${acc}`
      return acc;
    }
    acc = `${symbol}${acc}`;
    return acc;
  }, '');
  if (input[input.length - 1] === ',') {
    return `${result},`
  } 
  return fraction ? `${result},${fraction}` : result;
};

export default addSpaces;
