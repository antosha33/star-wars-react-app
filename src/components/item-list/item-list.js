import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import {WithData} from '../hoc-helpers';

import './item-list.css';

const ItemList = (props) =>{
    const { getPersonId, renderItem, state } = props;
    let itemsJsx = state.itemList.map(it => {
      const value = renderItem(it);
      return (
        <li className="list-group-item"
          key={it.name}
          onClick={() => getPersonId(it.id)}
        >
          {value}
        </li>
      )
    });

    itemsJsx =
      <ul className="item-list list-group">
        {itemsJsx}
      </ul>

    const show = state.loading ? <Spinner /> : itemsJsx;

    return (
      <React.Fragment>
        {show}
      </React.Fragment>

    );

}

export default WithData(ItemList);