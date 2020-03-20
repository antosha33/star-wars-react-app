import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';


const withData = (View) => {
  return class extends Component {

    state = {
      itemList: [

      ],
      loading: true,
    }

    componentDidMount() {
      this.itemLoading();
    }

    itemLoading = () => {
      const { getData } = this.props;
      console.log(getData);
      getData()
        .then(this.onItemLoaded)
    }

    onItemLoaded = (res) => {

      return this.setState({
        itemList: res,
        loading: false,
      })
    }

    render() {
      return <View {...this.props} state={this.state}/>
    }
  }
}

export default withData;