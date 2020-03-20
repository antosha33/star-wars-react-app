import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';



export default class PeoplePage extends React.Component {

  swapi = new SwapiService();

  state = {
    selectedPerson: 1,

  }

  updatePersonId = (id) => {
    return this.setState({
      selectedPerson: id,
    })
  }



  render() {

    const itemList = <ItemList getPersonId={this.updatePersonId}
      getData={this.swapi.getAllPeople}
      renderItem={({ name, gender, birthYear }) => `${name} + ${gender} + ${birthYear}`}
    />

    const personDitails = <ItemDetails personId={this.state.selectedPerson} />

    return (
      <ErrorBoundry>
        <div className="row mb2">
          <div className="col-md-6">
            {itemList}
          </div>
          <div className="col-md-6">
            {personDitails}
          </div>
        </div>
      </ErrorBoundry>
    )
  }

}

