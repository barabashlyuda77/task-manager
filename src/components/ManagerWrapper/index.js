import React from 'react';

import ListWrapper from '../ListWrapper';
import AddItem from '../AddItem';
import './ManagerWrapper.scss';

const ManagerWrapper = () => {
  return (
    <div className="manager-wrapper">
      <div>header</div>
      <ListWrapper />
      <AddItem />
    </div>
  );
}

export default ManagerWrapper;
