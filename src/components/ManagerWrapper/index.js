import React from 'react';

import ListWrapper from '../ListWrapper';
import './ManagerWrapper.scss';

const ManagerWrapper = () => {
  return (
    <div className="manager-wrapper">
      <div>header</div>
      <ListWrapper />
      <div>add item functionality</div>
    </div>
  );
}

export default ManagerWrapper;
