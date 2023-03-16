export const sortCharactersByName = (charArr) => {
  return charArr.sort((a, b) => a.name.localeCompare(b.name));
};

export const searchByFilter = (items, filter) => {
  if (filter.length === 0) return items;
  return items.filter((item) => item.name.indexOf(filter) > -1);
};
