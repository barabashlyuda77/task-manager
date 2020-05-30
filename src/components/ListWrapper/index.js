import React from 'react';

import Item from '../Item';
import './ListWrapper.scss';

const ListWrapper = () => {
  return (
    <div className="list-wrapper">
      <Item text="Go shopping"/>
      <Item text="Dancing" />
      <Item text="Have lunch" />
      <Item text="Have lunch" checked />
    </div>
  );
}

export default ListWrapper;
