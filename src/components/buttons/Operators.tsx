import React from "react";
import useStore from "../../store/store";

const Operators = () => {
  const setOperator = useStore((store) => store.setOperator);
  const operator = useStore((store) => store.operator);
  const equals = useStore((store) => store.equals);
  const classNames  = 'w-20 h-20 rounded-full col-span-1  text-4xl hover:bg-mandarin-hover btn-anim'
  return (
    <div className="grid grid-cols-1 gap-3.5 col-span-3 row-span-5">
      <button
        className={`${classNames} ${operator === '/' ? 'text-mandarin-common bg-white' : 'text-white bg-mandarin-common'}`}
        onClick={() => setOperator('/')}
      >
        ÷
      </button>
      <button
        className={`${classNames} ${operator === '*' ? 'text-mandarin-common bg-white' : 'text-white bg-mandarin-common'}`}
        onClick={() => setOperator('*')}
      >
        {'\u00D7'}
      </button>
      <button
        className={`${classNames} ${operator === '-' ? 'text-mandarin-common bg-white' : 'text-white bg-mandarin-common'}`}
        onClick={() => setOperator('-')}
      >
        -
      </button>
      <button
        className={`${classNames} ${operator === '+' ? 'text-mandarin-common bg-white' : 'text-white bg-mandarin-common'}`}
        onClick={() => setOperator('+')}
      >
        +
      </button>
      <button
        className={`${classNames} text-white bg-mandarin-common`}
        onClick={() => equals()}
      >
       =
      </button>
    </div>
  )
};

export default Operators;
