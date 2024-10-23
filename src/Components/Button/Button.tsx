import { MouseEventHandler } from 'react';

type TButton = {
  btnClassName?: string;
  btnType?: 'button' | 'submit' | 'reset';
  btnOnClick?: MouseEventHandler<HTMLButtonElement>;
  btnText?: string;
};

const Button = ({ btnClassName, btnType, btnOnClick, btnText }: TButton) => {
  return (
    <button
      className={btnClassName}
      type={btnType ?? 'button'}
      onClick={btnOnClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
