import React, { Component, useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-details.css';


const Record = ({ item, field, label }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
        </li>
      </ul>
    </>
  )
}

export {
  Record,
}

export default class ItemDetails extends Component {

  swapi = new SwapiService();

  state = {
    item: null,
    loader: true,
  }



  componentDidMount() {
    this.updateitem();
  }

  componentDidUpdate(prevProps) {

    if (this.props.itemId !== prevProps.itemId) {
      console.log(this.props.itemId);
      this.updateitem();
    }
  }

  updateitem() {
    const { itemId, getData } = this.props;
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

    if (this.state.loader) {
      return (
        <Spinner />
      )
    }

    const { item } = this.state;

    return (
      <div className="item-details card">
        <img className="item-image"
          alt="item"
          src={this.state.item.img} />
                  <div className="card-body">
        <h4>{item.name}</h4>

          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </div>
      </div>
    )
  }
}

