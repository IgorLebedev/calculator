import { lightGrayBtns, orangeBtns } from "../components/buttons/buttons";

const getClassNames = (value: string): string => {
  if (value === '0') {
    return 'w-full h-20 col-span-6 text-left px-7 bg-grey-dark';
  }
  if (lightGrayBtns.includes(value)) {
    return 'w-20 h-20 col-span-3 bg-grey-light';
  }
  if (orangeBtns.includes(value)) {
    return 'w-20 h-20 col-span-3 bg-mandarin';
  } else {
    return 'w-20 h-20 col-span-3 bg-grey-dark'
  }
};

export default getClassNames;
