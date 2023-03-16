class RickAndMortyService {
  _apiBase = 'https://rickandmortyapi.com/api/';

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(`${this._apiBase}character`);
    return res.results.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}character/${id}`);
    return this._transformCharacter(res);
  };

  _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      status: char.status || 'Unknown',
      species: char.species || 'Unknown',
      type: char.type || 'Unknown',
      origin: char.origin.name || 'Unknown',
      image: char.image,
      gender: char.gender,
    };
  };
}

export default RickAndMortyService;
