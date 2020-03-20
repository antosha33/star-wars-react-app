
export default class SwapiService {

  _apiBase = 'https://swapi.co/api/';
  _imgBase = 'https://starwars-visualguide.com/assets/img/';

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
        gender: it.gender,
        birthYear: it.birth_year,
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

  getStarship = async (id) => {
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

   getPerson = async (id) =>  {
    const result = await this.getResource(`people/${id}`);
    return {
      id: this._extractId(result.url),
      name: result.name,
      gender: result.gender,
      birthYear: result.birth_year,
      eyeColor: result.eye_color,
      img: this.getPersonImage(id),
    }
  }

  getPlanet = async (id) => {
    const result = await this.getResource(`planets/${id}`);
    return {
      id: this._extractId(result.url),
      name: result.name,
      population: result.population,
      rotation: result.rotation_period,
      diameter: result.diameter,
      img: this.getPlanetImage(id),
    }
  }

  getPersonImage = (id) => {
    return `${this._imgBase}characters/${id}.jpg`;
  }
  getPlanetImage = (id) => {
    return `${this._imgBase}planets/${id}.jpg`;
  }
}