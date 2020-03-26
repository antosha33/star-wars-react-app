import React from 'react';
import Row from '../row';
import { PeopleList, PeopleDetails } from '../sw-components';
import { withRouter} from 'react-router-dom';


const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <Row left={<PeopleList onItemSelected={(id) => {
      history.push(id)}
    } />}
         right={<PeopleDetails itemId={id || 1} />}
    />
  )

}

export default withRouter(PeoplePage);