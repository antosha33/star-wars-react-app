import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import  ItemList from '../item-list';
import {WithData} from '../hoc-helpers';


const swapi = new SwapiService();
const {getAllPlanets, getAllPeople, getAllStarships} = swapi;


const PeopleList = WithData(ItemList, getAllPeople);

// const PlanetList = WithData(ItemList, getAllPlanets);

// const StarshipList = WithData(ItemList, getAllStarships);

export {
  PeopleList,
  // PlanetList,
  // StarshipList,
};