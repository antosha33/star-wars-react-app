import React from 'react';
import Spinner from '../spinner';

import './item-list.css';

const ItemList = (props) =>{
    const { onItemSelected, renderItem, state } = props;
    let itemsJsx = state.itemList.map(it => {
      const value = renderItem(it);
      return (
        <li className="list-group-item"
          key={it.name}
          onClick={() => onItemSelected(it.id)}
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

export default ItemList;