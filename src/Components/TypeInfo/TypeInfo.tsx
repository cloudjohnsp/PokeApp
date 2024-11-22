import './TypeInfo.scss';
import { useParams } from 'react-router-dom';
import usePokemonType from '../../Hooks/usePokemonType';
import TailSpinner from '../TailSpinner/TailSpinner';
//import { pokemonTypes } from '../../mocks/pokemonTypes';
import TypeTableCell from '../TypeTableCell/TypeTableCell';
import { tailSpinCenterStyle } from '../../styles';

const TypeInfo = () => {
  const { typeId } = useParams();
  const numericId = Number(typeId);
  const { typeData } = usePokemonType(numericId);

  //const typeData = pokemonTypes;

  const {
    damage_relations: {
      double_damage_from,
      double_damage_to,
      half_damage_from,
      half_damage_to,
      no_damage_from,
      no_damage_to,
    },
  } = typeData;

  return (
    <div className='type-properties'>
      {typeData ? (
        <div className='type-tables'>
          {/* Offensive properties table */}
          <table className='type-table offensive'>
            <thead>
              <tr>
                <th colSpan={3}>Offensive Properties</th>
              </tr>
              <tr>
                <th>Super Effective</th>
                <th>No Effect</th>
                <th>Not Very Effective</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TypeTableCell typeInfoArray={double_damage_to} />
                <TypeTableCell typeInfoArray={no_damage_to} />
                <TypeTableCell typeInfoArray={half_damage_to} />
              </tr>
            </tbody>
          </table>

          {/* Defensive properties table */}
          <table className='type-table defensive'>
            <thead>
              <tr>
                <th colSpan={3}>Defensive Properties</th>
              </tr>
              <tr>
                <th>Weak To</th>
                <th>Resists</th>
                <th>Immune</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TypeTableCell typeInfoArray={double_damage_from} />
                <TypeTableCell typeInfoArray={half_damage_from} />
                <TypeTableCell typeInfoArray={no_damage_from} />
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className='tail-spinner'>
          <TailSpinner wrapperStyle={tailSpinCenterStyle} />
        </div>
      )}
    </div>
  );
};

export default TypeInfo;
