import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage } from '../pages';
import { PlanetPage } from '../pages';
import SwapiService from '../../services/swapi-service';

import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';


export default class App extends React.Component {

  swapi = new SwapiService();

  state = {
    randomPlanet: true,
    personId: 1,
  }

  toggleRandomPlanet = () => {
    this.setState(({ randomPlanet }) => {
      return {
        randomPlanet: !randomPlanet,
      }
    })
  }

  updatePersonId = (id) => {
    return this.setState({
      personId: id,
    })
  }

  render() {

    const planet = this.state.randomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <SwapiServiceProvider value={this.swapi}>
          <Header />
          {planet}
          <PeoplePage />
          <PlanetPage />
        </SwapiServiceProvider>
      </div>
    );
  }
};

