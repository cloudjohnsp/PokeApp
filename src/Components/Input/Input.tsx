import { ChangeEventHandler, memo } from 'react';

type TInput = {
  idInput?: string;
  classNameInput?: string;
  typeInput?: string;
  nameInput?: string;
  valueInput: string;
  placeholderInput?: string;
  onChangeInputHandler?: ChangeEventHandler<HTMLInputElement>;
};

const Input = memo(
  ({
    idInput,
    classNameInput,
    typeInput,
    nameInput,
    valueInput,
    placeholderInput,
    onChangeInputHandler,
  }: TInput) => {
    return (
      <input
        id={idInput}
        className={classNameInput}
        name={nameInput}
        value={valueInput}
        type={typeInput ?? 'text'}
        placeholder={placeholderInput}
        onChange={onChangeInputHandler}
      />
    );
  }
);

export default Input;
