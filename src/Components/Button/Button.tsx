import { memo, MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  btnClassName?: string;
  btnType?: 'button' | 'submit' | 'reset';
  btnOnClick?: MouseEventHandler<HTMLButtonElement>;
  btnDisabled?: boolean;
  children?: ReactNode;
};

const Button = memo(
  ({
    btnClassName,
    btnType,
    btnOnClick,
    btnDisabled,
    children,
  }: ButtonProps) => {
    return (
      <button
        className={btnClassName}
        type={btnType ?? 'button'}
        onClick={btnOnClick}
        disabled={btnDisabled ?? false}
      >
        {children}
      </button>
    );
  }
);

export default Button;
