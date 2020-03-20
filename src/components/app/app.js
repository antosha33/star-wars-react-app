import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import './app.css';

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
    const { getPerson, getPlanet } = this.swapi;
    const peoples = <ItemDetails itemId={1} getData={getPerson}>
      <Record field={'gender'} label={'Gender'} />
      <Record field={'birthYear'} label={'Birth Year'} /> 
      <Record field={'eyeColor'} label={'Eye Color'} />
    </ItemDetails>;
    const planets = <ItemDetails itemId={3} getData={getPlanet}>
      <Record field={'population'} label={'Popelation'} />
      <Record field={'rotation'} label={'Rotation'} /> 
      <Record field={'diameter'} label={'Diameter'} />   
    </ItemDetails>;

    return (



      <div>
        <Header />
        {planet}
        <button className="btn btn-warning btn-lg mode"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        {/* <PeoplePage /> */}
        
        <ItemList getPersonId={this.updatePersonId}
              getData={this.swapi.getAllPeople} 
              renderItem = {({name, gender, birthYear}) => `${name} + ${gender} + ${birthYear}`}
              />
        <Row left={peoples} right={planets} />
        {/* <div className="row mb2">
          <div className="col-md-6">
            <br></br>
            <ItemList getPersonId={this.updatePersonId}
              getData={this.swapi.getAllPlanets} 
              renderItem = {({name, gender, birthYear}) => `${name} + ${gender} + ${birthYear}`}
              />
          </div>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
            <br></br>
            <ItemList getPersonId={this.updatePersonId}
              getData={this.swapi.getAllStarships} 
              renderItem = {(items) => `${items.name} +`}
              />
          </div>
        </div> */}
      </div>
    );
  }
};

