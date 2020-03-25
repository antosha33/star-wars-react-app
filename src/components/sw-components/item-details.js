import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemDetail from '../item-detail';
import { DataForDetails } from '../hoc-helpers';


const swapi = new SwapiService();
const { getPerson, getPlanet, getStarship } = swapi;

const Record = ({ item, field, label }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
        </li>
      </ul>
    </>
  )
}


const WithRecordsPerson = (ItemDetail) => {
  return (props) => {
    return <ItemDetail {...props}>
      <Record field={'gender'} label={'Gender'} />
      <Record field={'birthYear'} label={'Birth Year'} />
      <Record field={'eyeColor'} label={'Eye Color'} />
    </ItemDetail>
  }
}

const WithRecordsPlanet = (ItemDetail) => {
  return (props) => {
    return <ItemDetail {...props}>
      <Record field={'rotation'} label={'Rotation Period'} />
      <Record field={'diameter'} label={'Diameter'} />
      <Record field={'population'} label={'Population'} />
    </ItemDetail>
  }
}

const WithRecordsStarship = (ItemDetail) => {
  return (props) => {
    return <ItemDetail {...props}>
      <Record field={'model'} label={'Model'} />
      <Record field={'manufacturer'} label={'Manufacturer'} />
      <Record field={'length'} label={'Length'} />
    </ItemDetail>
  }
}




const PeopleDetails = DataForDetails(WithRecordsPerson(ItemDetail), getPerson);

const PlanetDetails = DataForDetails(WithRecordsPlanet(ItemDetail), getPlanet);

const StarshipDetails = DataForDetails(WithRecordsStarship(ItemDetail), getStarship);

export {
  PeopleDetails,
  PlanetDetails,
  StarshipDetails,
  Record,
};