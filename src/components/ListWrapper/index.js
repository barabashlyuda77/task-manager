import React from 'react';
import { useSelector } from 'react-redux'

import Item from '../Item';
import './ListWrapper.scss';

const ListWrapper = ({ checkedOnly }) => {
  const itemsList = useSelector(state => state);

  const checkedItems = itemsList.filter(item => item.checked);

  const showItemList = list => list.map(item => (
    <Item
      text={item.text}
      checked={item.checked}
      key={item.id}
    />
  ))
  return (
    <div className="list-wrapper">
      {itemsList.length === 0 ? (
        <div className="completed-task">
          <img alt="Completed" src="completed-task.png"/>
        </div>
      ) : (
        showItemList(checkedOnly ? checkedItems : itemsList)
      )}
    </div>
  );
}

export default ListWrapper;
