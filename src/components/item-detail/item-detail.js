import React from 'react';
import Spinner from '../spinner';

import './item-detail.css';


const ItemDetails = (props) => {

  const { state, children } = props;
  if (state.loader) {
    return (
      <Spinner />
    )
  }
  const { item } = state;
  return (
    <div className="item-details card">
      <img className="item-image"
        alt="item"
        src={state.item.img} />
      <div className="card-body">
        <h4>{item.name}</h4>

        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { item });
        })}
      </div>
    </div>
  )
}

export default ItemDetails;

