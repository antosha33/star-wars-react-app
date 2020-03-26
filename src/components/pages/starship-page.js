import React from 'react';
import Row from '../row';
import { StarshipList } from '../sw-components';
import { StarshipDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarsipPage = ({ history }) => {
  return (
   <StarshipList onItemSelected={(id) => history.push(id)} />
  )
}

export default withRouter(StarsipPage);