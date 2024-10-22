import { ChangeEventHandler } from 'react';

type TInput = {
  idInput?: string;
  classNameInput?: string;
  typeInput?: string;
  nameInput?: string;
  valueInput: string;
  placeholderInput?: string;
  onChangeInputHandler?: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  idInput,
  classNameInput,
  typeInput,
  nameInput,
  valueInput,
  placeholderInput,
  onChangeInputHandler,
}: TInput) => {
  return (
    <div>
      <input
        id={idInput}
        className={classNameInput}
        name={nameInput}
        value={valueInput}
        type={typeInput ?? 'text'}
        placeholder={placeholderInput}
        onChange={onChangeInputHandler}
      />
    </div>
  );
};

export default Input;
