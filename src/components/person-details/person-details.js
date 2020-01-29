import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';


export default class PersonDetails extends Component {

  swapi = new SwapiService();

  state = {
    person: null,
    loader: true,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    this.setState({
      loader: true,
    });
    this.swapi.getPerson(personId)
      .then((res) => {
        return this.setState({
          person: res,
          loader: false
        })
      })
  }



  render() {

    if (this.state.loader) {
      return (
        <Spinner />
      )
    }

    const { person: { id, personName, gender, birthYear, eyeColor } } = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          alt="person"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{personName}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
