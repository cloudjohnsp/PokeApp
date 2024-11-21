import { memo } from 'react';
import { TPokemonTypeItem } from '../../types/types';
import TypeContainer from '../TypeContainer/TypeContainer';

type TypeTableCellProps = {
  typeInfoArray: TPokemonTypeItem[];
};

const TypeTableCell = memo(({ typeInfoArray }: TypeTableCellProps) => {
  return (
    <td>
      {typeInfoArray && typeInfoArray.length > 0 ? (
        <TypeContainer dataArray={typeInfoArray} />
      ) : (
        <span className='none'>None</span>
      )}
    </td>
  );
});

export default TypeTableCell;
