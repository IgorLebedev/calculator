import { create } from "zustand";
import fixNumber from "../utils/mathFixedEightAfterDot";
import commaReplacer from "../utils/commaReplacer";
import dotReplacer from "../utils/dotReplacer";

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
  minus: () => void,
  equals: () => void,
  percent: () => void,
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
    if (num === '0' && state.isFirstZero && !state.operator) {
      return state;
    }
    if (num === ',') {
      if (state.hasComma) {
        return state;
      }
      if (state.operator) {
        if (state.secondOperand.split('').filter(symbol => symbol !== '-').join('').length > 8) {
          return state;
        }
        return {
          secondOperand: `${state.secondOperand}${num}`,
          hasComma: true,
          isFirstZero: false,
        }
      }
      if (state.firstOperand.split('').filter(symbol => symbol !== '-').join('').length > 8) {
        return state;
      }
      return {
        firstOperand: `${state.firstOperand}${num}`,
        hasComma: true,
        isFirstZero: false,
      }
    }
    if (state.operator) {
      if (state.secondOperand.split('').filter(symbol => symbol !== '-' && symbol !== ',').join('').length > 8) {
        return state;
      }
      if (state.secondOperand.length === 1 && state.secondOperand[0] === '0') {
        return {
          secondOperand: num,
          isFirstZero: false,
        };
      }
      if (state.secondOperand[0] === '-' && state.secondOperand[1] === '0') {
        return {
          secondOperand: `-${num}`,
          isFirstZero: false,
        };
      }
      return {
        secondOperand: `${state.secondOperand}${num}`,
        isFirstZero: false,
      }
    }
    if (state.firstOperand.split('').filter(symbol => symbol !== '-' && symbol !== ',').join('').length > 8) {
      return state;
    }
    if (state.firstOperand.length === 1 && state.firstOperand[0] === '0') {
      return {
        firstOperand: num,
        isFirstZero: false,
      };
    }
    if (state.firstOperand[0] === '-' && state.firstOperand[1] === '0') {
      return {
        firstOperand: `-${num}`,
        isFirstZero: false,
      };
    }
    return {
      firstOperand: `${state.firstOperand}${num}`,
      isFirstZero: false,
    };
  }),
  remove: () => set(() => ({
      firstOperand: '0',
      secondOperand: '0',
      hasComma: false,
      buffer: null,
      isFirstZero: true,
    })
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
  minus: () => set((state) => {
    if (state.operator) {
      if (state.secondOperand.startsWith('-')) {
        return { secondOperand: state.secondOperand.slice(1) }
      }
      return { 
        secondOperand: `-${state.secondOperand}`,
        isFirstZero: false,
      }
    }
    if (state.firstOperand.startsWith('-')) {
      return { firstOperand: state.firstOperand.slice(1) }
    }
    return {
      firstOperand: `-${state.firstOperand}`,
      isFirstZero: false,
    }
  }),
  percent: () => set((state) => {
    if (!state.operator) {
      const divided = Number(commaReplacer(state.firstOperand)) / 100; 
      const tempStr = String(divided);
      const result = dotReplacer(tempStr);
      return {
        firstOperand: result,
      }
    }
    return state;
  }),
  equals: () => set((state) => {
    if (!state.buffer && !state.operator) {
      return state;
    }
    const first = Number(commaReplacer(state.firstOperand));
    const second = Number(commaReplacer(state.secondOperand));
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
    const fixed = fixNumber(temp);
    const tempStr = String(fixed);
    const result = dotReplacer(tempStr);
    
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