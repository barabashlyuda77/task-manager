import React from 'react';

import './TabHeader.scss';

const TabHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="checklist-wrapper">
        <img alt="Checklist" src="checklist.png" className="checklist"/>
      </div>
      <div className="done-wrapper">
        <img alt="Done" src="checkmark-done-gray.png" className="checkmark-done"/>
      </div>
    </div>
  );
}

export default TabHeader;
