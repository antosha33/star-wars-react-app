import React from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends React.Component  {
   
  swapi  = new SwapiService();

  state = {
    selectedPerson: 1,
  }

  updatePersonId = (id) => {
    return this.setState({
      selectedPerson: id,
    })
  }

  render(){
    return(
      <div className="row mb2">
      <div className="col-md-6">
        <ItemList getPersonId={this.updatePersonId}
                  getData = {this.swapi.getAllPeople}/>
      </div>
      <div className="col-md-6">
        <PersonDetails personId={this.state.selectedPerson}/>
      </div>
    </div>
    )
  }

}

