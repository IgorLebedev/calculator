import { create } from "zustand";

type State = {
  isFirstZero: boolean,
  hasComma: boolean,
  firstOperand: string,
  secondOperand: string,
  operator: string | null,
}

type Action = {
  addSymbol: (num: string) => void,
  remove: () => void,
  setOperator: (operator: string) => void,
}

const useStore = create<State & Action>((set) => ({
  isFirstZero: true,
  hasComma: false,
  firstOperand: '0',
  secondOperand: '0',
  operator: null,
  addSymbol: (num: string) => set((state) => {
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
    if (state.operator) {
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
      isFirstZero: true,
      hasComma: false,
    }
  }),
}));

export default useStore;