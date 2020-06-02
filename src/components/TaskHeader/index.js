import React from 'react';

import './ManagerWrapper.scss';

const TaskHeader = () => {
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

export default TaskHeader;
