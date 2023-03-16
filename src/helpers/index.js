export function getData(url) {
  return fetch(url).then((resp) => {
    if (!resp.ok) {
      throw Error('There was a problem fetching data.');
    }

    return resp.json();
  });
}

export const transformCharacter = (char) => {
  return {
    id: char.id,
    name: char.name,
    status: char.status,
    species: char.species,
    type: char.type || 'unknown',
    origin: char.origin.name,
    image: char.image,
    gender: char.gender,
  };
};

export const sortCharactersByName = (charArr) => {
  return charArr.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
};

export const searchByFilter = (items, filter) => {
  if (filter.length === 0) return items;
  const lowerCaseFilter = filter.toLowerCase();
  return items.filter(
    (item) => item.name.toLowerCase().indexOf(lowerCaseFilter) > -1
  );
};
