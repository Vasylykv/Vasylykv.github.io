import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import {
  getData,
  transformCharacter,
  searchByFilter,
  sortCharactersByName,
} from '../helpers';

function useCharacters(filterQuery) {
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const {
    data: characters = [],
    isError,
    isLoading,
  } = useQuery(
    'characters',
    () => getData(`${process.env.REACT_APP_API_BASE}character`),
    {
      retry: false,
      select: (res) => res.results.map(transformCharacter),
      onSuccess: (data) => FilterAndSort(data),
    }
  );

  useEffect(() => {
    FilterAndSort(characters);
    // eslint-disable-next-line
  }, [filterQuery]);

  function FilterAndSort(charsArr) {
    const filteredChars = searchByFilter(charsArr, filterQuery);
    setFilteredCharacters(sortCharactersByName(filteredChars));
  }

  return { filteredCharacters, isLoading, isError };
}

export default useCharacters;
