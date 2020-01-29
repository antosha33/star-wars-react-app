import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {


  state = {
    itemList: [

    ],
    loading: true,
  }

  componentDidMount() {
    this.itemLoading();
  }

  itemLoading = () => {
    const {getData} = this.props;
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
    const {getPersonId } = this.props;
    let peoplesJsx = this.state.itemList.map(it => {
      return (
        <li className="list-group-item"
          key={it.name}
          onClick = {()=>getPersonId(it.id)}
          >
          {it.name}
        </li>
      )
    });

    peoplesJsx =
      <ul className="item-list list-group">
        {peoplesJsx}
      </ul>

    const show = this.state.loading ? <Spinner /> : peoplesJsx;

    return (
      <React.Fragment>
        {show}
      </React.Fragment>

    );
  }
}
