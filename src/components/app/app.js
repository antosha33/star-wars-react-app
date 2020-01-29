import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';


import './app.css';

export default class App extends React.Component {

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
        <Header />
        {planet}
        <button className="btn btn-warning btn-lg mode"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <PeoplePage />
      </div>
    );
  }
};

