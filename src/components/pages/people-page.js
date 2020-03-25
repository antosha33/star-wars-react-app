import React from 'react';
import Row from '../row';
import { PeopleList } from '../sw-components';
import { PeopleDetails } from '../sw-components';

export default class PeoplePage extends React.Component {
  
  state = {
    selectedItem: 1
  }

  onItemSelected = (item) => {
    this.setState({ selectedItem: item });
  }

  render() {
    return (
      <Row left={<PeopleList onItemSelected={this.onItemSelected} />} right={<PeopleDetails itemId={this.state.selectedItem} />} />
    )
  }
}