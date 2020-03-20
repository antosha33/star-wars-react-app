import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

  constructor() {
    super();
  }

  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  swapi = new SwapiService();

  state = {
    planet: {},
    loader: true,
    error: false,
  }

  onPlanetLoaded = (planet) => {
    return this.setState({
      planet,
      loader: false,
    })
  }

  onError = (err) => {
    return this.setState({
      error: true,
      loader: false,
    })
  };


  updatePlanet = async () => {
    let id = Math.floor(3 + Math.random() * (19 + 1 - 3));
    this.swapi.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { loader, error } = this.state;


    const result = loader ? <Spinner /> : error ? <ErrorIndicator /> : <PLanetView planet={this.state.planet} />

    return (
      <div className="random-planet jumbotron rounded">
        {result}
      </div>
    );
  }
}
const PLanetView = ({ planet }) => {
  const { planetName, population, rotation, diameter, id } = planet;
  return (
    <>
      <img className="planet-image"
        alt="planet"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{planetName}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotation}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}