import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import { WithRenderItemLists, DataForLists } from '../hoc-helpers';



const swapi = new SwapiService();
const { getAllPlanets, getAllPeople, getAllStarships } = swapi;


const composeHelper = (...fnc) => (item) => {

  return fnc.reduceRight((prevFn, fn) => fn(prevFn), item);
}


const PeopleList = composeHelper(
  DataForLists(getAllPeople),
  WithRenderItemLists(({ name, gender, birthYear }) => `${name} + ${gender} + ${birthYear}`)
)
  (ItemList);


const PlanetList = composeHelper(
  DataForLists(getAllPlanets),
  WithRenderItemLists(({ name, diameter, rotation }) => `${name} + ${diameter} + ${rotation}`)
)
  (ItemList);

const StarshipList = composeHelper(
  DataForLists(getAllStarships),
  WithRenderItemLists(({ name, crew, length }) => `${name} + ${crew} + ${length}`)
)
  (ItemList);


export {
  PeopleList,
  PlanetList,
  StarshipList,
};