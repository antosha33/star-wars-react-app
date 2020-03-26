import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import SwapiService from '../../services/swapi-service';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';


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
        <Router>
          <SwapiServiceProvider value={this.swapi}>
            <Header />
            {planet}
            <Route path={'/'} render={() => <h2>Welcom to starDB App</h2>} exact={true} />
            <Route path={'/people/:id?'} component={PeoplePage} exact={true} />
            <Route path={'/planets/'} component={PlanetPage} />
            <Route path={'/starships/'} component={StarshipPage} exact={true}/>
            <Route path={'/starships/:id'} render={({match}) => {
                    return <StarshipDetails itemId={match.params.id} />
            }} />
          </SwapiServiceProvider>

        </Router >
      </div >
    );
  }
};

