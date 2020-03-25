import React, { Component } from 'react';


const WithData = (View, getData) => {
  return class extends Component {

    state = {
      item: null,
      loader: true,
    }

    componentDidMount() {
      this.updateitem();
    }

    componentDidUpdate(prevProps) {

      if (this.props.itemId !== prevProps.itemId) {
        this.updateitem();
      }
    }

    updateitem() {
      const { itemId } = this.props;
      this.setState({
        loader: true,
      });
      getData(itemId)
        .then((res) => {
          return this.setState({
            item: res,
            loader: false
          })
        })
    }
    render() {
      return <View {...this.props} state={this.state} />
    }
  }
}


export default WithData;