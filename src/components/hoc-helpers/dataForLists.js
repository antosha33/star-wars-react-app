import React, { Component } from 'react';

const WithData = (getData) => (View) => {
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

export default WithData;