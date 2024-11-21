import { MouseEventHandler } from 'react';

type TypeItemProps = {
  type: string;
  typeFilter?: string;
  onClickMethod?: MouseEventHandler<HTMLElement>;
};

const TypeItem = ({ type, typeFilter, onClickMethod }: TypeItemProps) => {
  return (
    <div
      onClick={onClickMethod}
      className={`pokemon-filter-type-item ${type} ${
        typeFilter === type ? 'active' : ''
      }`}
    >
      {type}
    </div>
  );
};

export default TypeItem;
