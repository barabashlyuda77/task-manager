import React from 'react';
import { useSelector } from 'react-redux'

import Item from '../Item';
import './ListWrapper.scss';

const ListWrapper = () => {
  const itemsList = useSelector(state => state);

  return (
    <div className="list-wrapper">
      {itemsList.length === 0 ? (
        <div className="completed-task">
          <img alt="Completed" src="completed-task.png"/>
        </div>
      ) : (
        itemsList.map(item => <Item text={item.text} checked={item.checked} key={item.id}/>)
      )}
    </div>
  );
}

export default ListWrapper;
