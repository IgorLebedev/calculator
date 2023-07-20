const dotReplacer = (str: string): string => {
  return str.includes('.') ? str.replace('.',',') : str;
};

export default dotReplacer;