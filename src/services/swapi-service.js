
export default class SwapiService {

  _apiBase = 'https://swapi.co/api/';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) throw new Error('something went wrong');
    const body = await res.json();
    return body;
  }

   getAllPeople = async () => {
    const res = await this.getResource(`people/`);
    return res.results.map(it => {
      return {
        name: it.name,
        id: this._extractId(it.url),
      }
    });
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`planets/`);
    return res.results;
  }

  getAllStarships = async () => {
    const res = await this.getResource(`starships/`);
    return res.results;
  }

  _extractId(url) {
    const regExp = /\/([0-9]*)\/$/;
    const id = url.match(regExp)[1];
    return id;
  }

  async getStarship(id) {
    const result = await this.getResource(`starships/${id}`)
    return {
      id: this._extractId(result.url),
      starshipName: result.name,
      model: result.model,
      manufacturer: result.manufacturer,
      costInCredits: result.costInCredits,
      length: result.length,
      crew: result.crew,
      passengers: result.passengers,
      cargoCapacity: result.cargoCapacity,
    }
  }

  async getPerson(id) {
    const result = await this.getResource(`people/${id}`);
    console.log(result)
    return {
      id: this._extractId(result.url),
      personName: result.name,
      gender: result.gender,
      birthYear: result.birth_year,
      eyeColor: result.eye_color,
    }
  }

  async getPlanet(id) {
    const result = await this.getResource(`planets/${id}`);
    return {
      id: this._extractId(result.url),
      planetName: result.name,
      population: result.population,
      rotation: result.rotation_period,
      diameter: result.diameter,
    }
  }
}