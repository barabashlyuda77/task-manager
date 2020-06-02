import React from 'react';

import ListWrapper from '../ListWrapper';
import AddItem from '../AddItem';
import TaskHeader from '../TaskHeader';
import './ManagerWrapper.scss';

const ManagerWrapper = () => {
  return (
    <div className="manager-wrapper">
      <TaskHeader />
      <ListWrapper />
      <AddItem />
    </div>
  );
}

export default ManagerWrapper;
