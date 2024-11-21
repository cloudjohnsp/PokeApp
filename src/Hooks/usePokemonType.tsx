import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { TTypeRelations } from '../types/types';

type UsePokemonHookReturn = {
  typeData: TTypeRelations;
  setTypeData: Dispatch<SetStateAction<TTypeRelations>>;
};

const usePokemonType = (typeId: number | undefined): UsePokemonHookReturn => {
  const [typeData, setTypeData] = useState<TTypeRelations>({
    damage_relations: {
      double_damage_from: [],
      double_damage_to: [],
      half_damage_from: [],
      half_damage_to: [],
      no_damage_from: [],
      no_damage_to: [],
    },
  } as TTypeRelations);

  const typesUrl: string = `https://pokeapi.co/api/v2/type/${typeId}`;

  useEffect(() => {
    const fetchType = async (): Promise<void> => {
      try {
        const request = await axios.get(typesUrl);
        console.log('request', request);
        const response = request.data;
        setTypeData(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchType();
  }, [typesUrl]);

  return { typeData, setTypeData };
};

export default usePokemonType;
