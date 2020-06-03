import React from 'react';

import Item from '../Item';
import './ListWrapper.scss';

const itemsList = [
  {
    text: "Go shopping",
    checked: false,
  },
  {
    text: "Dancing",
    checked: false,
  },
  {
    text: "Have lunch",
    checked: false,
  },
  {
    text: "Clean the room",
    checked: true,
  }
];

const ListWrapper = () => {
  return (
    <div className="list-wrapper">
      {itemsList.map(item => <Item text={item.text} checked={item.checked}/>)}
    </div>
  );
}

export default ListWrapper;
