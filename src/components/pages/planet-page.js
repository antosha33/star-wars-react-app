import React from 'react';
import Row from '../row';
import { PlanetList } from '../sw-components';
import { PlanetDetails } from '../sw-components';

export default class PlanetPage extends React.Component {
  
  state = {
    selectedItem: 1
  }

  onItemSelected = (item) => {
    this.setState({ selectedItem: item });

  }

  render() {
    return (
      <Row left={<PlanetList onItemSelected={this.onItemSelected} />} right={<PlanetDetails itemId={this.state.selectedItem} />} />
    )
  }
}