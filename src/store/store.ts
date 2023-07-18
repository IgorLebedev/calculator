import { create } from "zustand";

type State = {
  isFirstZero: boolean,
  hasComma: boolean,
  firstOperand: string,
  secondOperand: string,
  buffer: string | null,
  operator: string | null,
}

type Action = {
  addSymbol: (num: string) => void,
  remove: () => void,
  setOperator: (operator: string) => void,
  equals: () => void,
  // minus: () => void,
  // percent: () => void,
}

const useStore = create<State & Action>((set) => ({
  isFirstZero: true,
  hasComma: false,
  firstOperand: '0',
  secondOperand: '0',
  buffer: null,
  operator: null,
  addSymbol: (num: string) => set((state) => {
    console.log(state)
    if (num === '0' && state.isFirstZero) {
      return state;
    }
    if (num === ',') {
      if (state.hasComma) {
        return state;
      }
      return state.operator
      ? {
        secondOperand: `${state.secondOperand}${num}`,
        hasComma: true,
        isFirstZero: false,
      }
      : {
        firstOperand: `${state.firstOperand}${num}`,
        hasComma: true,
        isFirstZero: false,
      }
    }
    if (state.operator !== null) {
      if (state.secondOperand.length === 1 && state.secondOperand[0] === '0') {
        return {
          secondOperand: num,
          isFirstZero: false,
        };
      }
      return {
        secondOperand: `${state.secondOperand}${num}`,
        isFirstZero: false,
      }
    }
    if (state.firstOperand.length === 1 && state.firstOperand[0] === '0') {
      return {
        firstOperand: num,
        isFirstZero: false,
      };
    }
    return {
      firstOperand: `${state.firstOperand}${num}`,
      isFirstZero: false,
    };
  }),
  remove: () => set((state) => {
    console.log(state);
    return {
      firstOperand: '0',
      secondOperand: '0',
      hasComma: false,
      isFirstZero: true,
    }
  }
  ),
  setOperator: (operator: string) => set((state) => {
    if (state.operator === operator ) {
      return { operator: null }
    }
    return {
      operator,
      secondOperand: '0',
      buffer: null,
      isFirstZero: true,
      hasComma: false,
    }
  }),
  equals: () => set((state) => {
    if (!state.buffer && !state.operator) {
      return state;
    }
    const first = Number(state.firstOperand.includes(',') ? state.firstOperand.replace(',','.') : state.firstOperand);
    const second = Number(state.secondOperand.includes(',') ? state.secondOperand.replace(',','.') : state.secondOperand);
    console.log(state);
    let temp;
    switch (state.buffer ?? state.operator) {
      case '+':
        temp = first + second;
        break;
      case '-':
        temp = first - second;
        break;
      case '*':
        temp = first * second;
        break;
      case '/':
        temp = first / second;
        break;  
    };
    const tempStr = String(temp);
    const result = tempStr.includes('.') ? tempStr.replace('.', ',') : tempStr;
    return state.buffer
    ? {
      firstOperand: result,
    }
    : {
      firstOperand: result,
      buffer: state.operator,
      operator: null,
    };
  }),
}));

export default useStore;